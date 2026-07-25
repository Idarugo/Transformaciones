import { useEffect, useRef, useState } from 'react'
import {
  hoyISO,
  formatearFechaCorta,
  formatearPeso,
  parsearPeso,
  siguienteGuia,
} from '../utils.js'

const FORM_VACIO = {
  guiaEgreso: '',
  guiaIngreso: '',
  tipo: '',
  fechaHizo: hoyISO(),
  peso: '',
}

export default function RegistroView({
  registros,
  config,
  registroEnEdicion,
  onAgregar,
  onActualizar,
  onEliminar,
  onEditar,
  onCancelarEdicion,
}) {
  const [seccion, setSeccion] = useState(config.secciones[0]?.nombre ?? '')
  const [fechaRegistro, setFechaRegistro] = useState(hoyISO())
  const [form, setForm] = useState(FORM_VACIO)
  const [error, setError] = useState(null)
  const refGuiaEgreso = useRef(null)

  // Al entrar en modo edición, cargar el registro en el formulario.
  useEffect(() => {
    if (registroEnEdicion) {
      setSeccion(registroEnEdicion.seccion)
      setFechaRegistro(registroEnEdicion.fechaRegistro)
      setForm({
        guiaEgreso: registroEnEdicion.guiaEgreso,
        guiaIngreso: registroEnEdicion.guiaIngreso,
        tipo: registroEnEdicion.tipo,
        fechaHizo: registroEnEdicion.fechaHizo,
        peso: formatearPeso(registroEnEdicion.pesoKg),
      })
      refGuiaEgreso.current?.focus()
    }
  }, [registroEnEdicion])

  const seccionActual = config.secciones.find((s) => s.nombre === seccion)
  const tipos = seccionActual?.tipos ?? []

  const registrosDelDia = registros
    .filter((r) => r.seccion === seccion && r.fechaRegistro === fechaRegistro)
    .sort((a, b) => a.creadoEn - b.creadoEn)

  const totalDia = registrosDelDia.reduce((suma, r) => suma + r.pesoKg, 0)

  function cambiarCampo(campo, valor) {
    setForm((prev) => ({ ...prev, [campo]: valor }))
  }

  function enviar(e) {
    e.preventDefault()
    setError(null)

    const guiaEgreso = form.guiaEgreso.trim()
    const guiaIngreso = form.guiaIngreso.trim()
    const peso = parsearPeso(form.peso)

    if (!guiaEgreso || !guiaIngreso) {
      setError('Completa las dos guías (insumo y producto elaborado).')
      return
    }
    if (!form.tipo) {
      setError('Selecciona el tipo de transformación.')
      return
    }
    if (peso === null || peso === 0) {
      setError('Ingresa un peso válido en KG (ej: 2,432).')
      return
    }

    // Aviso si la guía de insumo ya fue usada en otro registro.
    const duplicada = registros.find(
      (r) => r.guiaEgreso === guiaEgreso && r.id !== registroEnEdicion?.id,
    )
    if (duplicada) {
      const seguir = window.confirm(
        `La guía ${guiaEgreso} ya está registrada (${duplicada.seccion}, ${formatearFechaCorta(duplicada.fechaRegistro)}). ¿Guardar de todas formas?`,
      )
      if (!seguir) return
    }

    if (registroEnEdicion) {
      onActualizar({
        ...registroEnEdicion,
        seccion,
        fechaRegistro,
        guiaEgreso,
        guiaIngreso,
        tipo: form.tipo,
        fechaHizo: form.fechaHizo,
        pesoKg: peso,
      })
      setForm(FORM_VACIO)
      return
    }

    onAgregar({
      id: crypto.randomUUID(),
      seccion,
      fechaRegistro,
      guiaEgreso,
      guiaIngreso,
      tipo: form.tipo,
      fechaHizo: form.fechaHizo,
      pesoKg: peso,
      creadoEn: Date.now(),
    })

    // Deja listas las guías siguientes (correlativas) para anotar más rápido.
    setForm((prev) => ({
      ...prev,
      guiaEgreso: siguienteGuia(guiaEgreso),
      guiaIngreso: siguienteGuia(guiaIngreso),
      peso: '',
    }))
  }

  function cancelarEdicion() {
    onCancelarEdicion()
    setForm(FORM_VACIO)
  }

  return (
    <div className="vista">
      <section className="tarjeta">
        <div className="tarjeta-titulo">
          <h2>
            {registroEnEdicion ? 'Editando registro' : 'Nuevo registro'}
          </h2>
          <span className="subtitulo">
            Como en el cuaderno: sección y fecha del día, luego cada fila con sus guías.
          </span>
        </div>

        <div className="fila-encabezado">
          <label className="campo">
            <span>Sección</span>
            <select value={seccion} onChange={(e) => { setSeccion(e.target.value); cambiarCampo('tipo', '') }}>
              {config.secciones.map((s) => (
                <option key={s.nombre} value={s.nombre}>{s.nombre}</option>
              ))}
            </select>
          </label>
          <label className="campo">
            <span>Fecha de registro (día del cuaderno)</span>
            <input
              type="date"
              value={fechaRegistro}
              onChange={(e) => setFechaRegistro(e.target.value)}
            />
          </label>
        </div>

        <form onSubmit={enviar} className="formulario">
          <label className="campo">
            <span>Guía insumo consumido (egreso)</span>
            <input
              ref={refGuiaEgreso}
              className="entrada-guia guia-egreso"
              type="text"
              placeholder="F8862979725"
              value={form.guiaEgreso}
              onChange={(e) => cambiarCampo('guiaEgreso', e.target.value)}
              autoComplete="off"
            />
          </label>
          <label className="campo">
            <span>Guía producto elaborado (ingreso)</span>
            <input
              className="entrada-guia"
              type="text"
              placeholder="F261044"
              value={form.guiaIngreso}
              onChange={(e) => cambiarCampo('guiaIngreso', e.target.value)}
              autoComplete="off"
            />
          </label>
          <label className="campo">
            <span>Tipo de transformación</span>
            <select value={form.tipo} onChange={(e) => cambiarCampo('tipo', e.target.value)}>
              <option value="">— Seleccionar —</option>
              {tipos.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </label>
          <label className="campo">
            <span>Fecha que se hizo</span>
            <input
              type="date"
              value={form.fechaHizo}
              onChange={(e) => cambiarCampo('fechaHizo', e.target.value)}
            />
          </label>
          <label className="campo campo-peso">
            <span>Peso (KG)</span>
            <input
              type="text"
              inputMode="decimal"
              placeholder="2,432"
              value={form.peso}
              onChange={(e) => cambiarCampo('peso', e.target.value)}
              autoComplete="off"
            />
          </label>
          <div className="acciones-formulario">
            <button type="submit" className="boton primario">
              {registroEnEdicion ? 'Guardar cambios' : 'Agregar'}
            </button>
            {registroEnEdicion && (
              <button type="button" className="boton" onClick={cancelarEdicion}>
                Cancelar
              </button>
            )}
          </div>
        </form>
        {error && <p className="error" role="alert">{error}</p>}
        {!registroEnEdicion && (
          <p className="pista">
            Al agregar, las guías quedan listas con el número siguiente para anotar la próxima fila más rápido.
          </p>
        )}
      </section>

      <section className="tarjeta">
        <div className="tarjeta-titulo">
          <h2>
            {seccion} · {formatearFechaCorta(fechaRegistro)}
          </h2>
          <span className="subtitulo">
            {registrosDelDia.length} registro{registrosDelDia.length === 1 ? '' : 's'} este día
          </span>
        </div>
        {registrosDelDia.length === 0 ? (
          <p className="vacio">Aún no hay registros para esta sección y fecha.</p>
        ) : (
          <div className="tabla-envoltura">
            <table>
              <thead>
                <tr>
                  <th>Guía insumo (egreso)</th>
                  <th>Guía producto (ingreso)</th>
                  <th>Tipo</th>
                  <th>Fecha que se hizo</th>
                  <th className="numero">Peso (KG)</th>
                  <th className="acciones-col"></th>
                </tr>
              </thead>
              <tbody>
                {registrosDelDia.map((r) => (
                  <tr key={r.id}>
                    <td className="guia guia-egreso">{r.guiaEgreso}</td>
                    <td className="guia">{r.guiaIngreso}</td>
                    <td>{r.tipo}</td>
                    <td>{formatearFechaCorta(r.fechaHizo)}</td>
                    <td className="numero">{formatearPeso(r.pesoKg)}</td>
                    <td className="acciones-col">
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
              <tfoot>
                <tr>
                  <td colSpan="4">Total del día</td>
                  <td className="numero">{formatearPeso(totalDia)}</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </section>
    </div>
  )
}
