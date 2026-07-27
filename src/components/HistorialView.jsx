import { useMemo, useState } from 'react'
import { exportarCSV, formatearFecha, formatearPeso } from '../utils.js'

export default function HistorialView({ registros, config, onEditar, onEliminar }) {
  const [filtroSeccion, setFiltroSeccion] = useState('')
  const [desde, setDesde] = useState('')
  const [hasta, setHasta] = useState('')
  const [busqueda, setBusqueda] = useState('')

  const filtrados = useMemo(() => {
    const texto = busqueda.trim().toLowerCase()
    return registros
      .filter((r) => {
        if (filtroSeccion && r.seccion !== filtroSeccion) return false
        if (desde && r.fechaHizo < desde) return false
        if (hasta && r.fechaHizo > hasta) return false
        if (texto) {
          const pajar = `${r.guiaEgreso} ${r.guiaIngreso} ${r.tipo} ${r.ean ?? ''}`.toLowerCase()
          if (!pajar.includes(texto)) return false
        }
        return true
      })
      .sort((a, b) =>
        a.fechaHizo === b.fechaHizo ? b.creadoEn - a.creadoEn : (a.fechaHizo < b.fechaHizo ? 1 : -1),
      )
  }, [registros, filtroSeccion, desde, hasta, busqueda])

  const totalKg = filtrados.reduce((suma, r) => suma + r.pesoKg, 0)

  const resumenPorTipo = useMemo(() => {
    const mapa = new Map()
    for (const r of filtrados) {
      const clave = `${r.seccion} · ${r.tipo}`
      const actual = mapa.get(clave) ?? { cantidad: 0, kg: 0 }
      actual.cantidad += 1
      actual.kg += r.pesoKg
      mapa.set(clave, actual)
    }
    return [...mapa.entries()].sort((a, b) => b[1].kg - a[1].kg)
  }, [filtrados])

  function exportar() {
    const fecha = new Date().toISOString().slice(0, 10)
    exportarCSV(filtrados, `transformaciones-${fecha}.csv`)
  }

  return (
    <div className="vista">
      <section className="tarjeta no-imprimir">
        <div className="tarjeta-titulo">
          <h2>Filtros</h2>
        </div>
        <div className="filtros">
          <label className="campo">
            <span>Sección</span>
            <select value={filtroSeccion} onChange={(e) => setFiltroSeccion(e.target.value)}>
              <option value="">Todas</option>
              {config.secciones.map((s) => (
                <option key={s.nombre} value={s.nombre}>{s.nombre}</option>
              ))}
            </select>
          </label>
          <label className="campo">
            <span>Desde (fecha que se hizo)</span>
            <input type="date" value={desde} onChange={(e) => setDesde(e.target.value)} />
          </label>
          <label className="campo">
            <span>Hasta</span>
            <input type="date" value={hasta} onChange={(e) => setHasta(e.target.value)} />
          </label>
          <label className="campo campo-busqueda">
            <span>Buscar guía o tipo</span>
            <input
              type="search"
              placeholder="F8862… / molida / pichanga"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </label>
        </div>
      </section>

      <section className="tarjeta">
        <div className="tarjeta-titulo">
          <h2>Historial</h2>
          <div className="titulo-acciones no-imprimir">
            <button className="boton" onClick={() => window.print()}>Imprimir</button>
            <button className="boton primario" onClick={exportar} disabled={filtrados.length === 0}>
              Exportar CSV (Excel)
            </button>
          </div>
        </div>

        <div className="resumen">
          <div className="kpi">
            <span className="kpi-valor">{filtrados.length}</span>
            <span className="kpi-etiqueta">Registros</span>
          </div>
          <div className="kpi">
            <span className="kpi-valor">{formatearPeso(totalKg)}</span>
            <span className="kpi-etiqueta">KG totales</span>
          </div>
        </div>

        {filtrados.length === 0 ? (
          <p className="vacio">No hay registros que coincidan con los filtros.</p>
        ) : (
          <div className="tabla-envoltura">
            <table>
              <thead>
                <tr>
                  <th>Sección</th>
                  <th>Guía insumo (egreso)</th>
                  <th>Guía producto (ingreso)</th>
                  <th>Tipo</th>
                  <th>Código EAN-13</th>
                  <th>Fecha que se hizo</th>
                  <th>Registrado</th>
                  <th className="numero">Peso (KG)</th>
                  <th className="acciones-col no-imprimir"></th>
                </tr>
              </thead>
              <tbody>
                {filtrados.map((r) => (
                  <tr key={r.id}>
                    <td>{r.seccion}</td>
                    <td className="guia guia-egreso">{r.guiaEgreso}</td>
                    <td className="guia">{r.guiaIngreso}</td>
                    <td>{r.tipo}</td>
                    <td className="guia">{r.ean || '—'}</td>
                    <td>{formatearFecha(r.fechaHizo)}</td>
                    <td>{formatearFecha(r.fechaRegistro)}</td>
                    <td className="numero">{formatearPeso(r.pesoKg)}</td>
                    <td className="acciones-col no-imprimir">
                      <button className="boton chico" onClick={() => onEditar(r.id)}>Editar</button>
                      <button
                        className="boton chico peligro"
                        onClick={() => {
                          if (window.confirm('¿Eliminar este registro?')) onEliminar(r.id)
                        }}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {resumenPorTipo.length > 0 && (
        <section className="tarjeta">
          <div className="tarjeta-titulo">
            <h2>Resumen por tipo</h2>
            <span className="subtitulo">Según los filtros aplicados</span>
          </div>
          <div className="tabla-envoltura">
            <table>
              <thead>
                <tr>
                  <th>Sección · Tipo</th>
                  <th className="numero">Registros</th>
                  <th className="numero">KG</th>
                </tr>
              </thead>
              <tbody>
                {resumenPorTipo.map(([clave, datos]) => (
                  <tr key={clave}>
                    <td>{clave}</td>
                    <td className="numero">{datos.cantidad}</td>
                    <td className="numero">{formatearPeso(datos.kg)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  )
}
