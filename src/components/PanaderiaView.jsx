import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { PANADERIA } from '../panaderia-data.js'
import { hoyISO, formatearFecha, formatearPeso, parsearPeso } from '../utils.js'

// Consumo de cada insumo (EAN) por amasijo de cada producto, según las recetas.
function calcularConsumoPorAmasijo() {
  const mapa = {}
  for (const p of PANADERIA.productos) {
    const receta = PANADERIA.recetas[p.sku]
    if (!receta) continue
    for (const ing of receta.ingredientes) {
      if (!ing.codigo || !ing.cantidadCosto) continue
      if (!mapa[ing.codigo]) mapa[ing.codigo] = {}
      mapa[ing.codigo][p.sku] = (mapa[ing.codigo][p.sku] ?? 0) + ing.cantidadCosto
    }
  }
  return mapa
}

export default function PanaderiaView({ panaderia, onCambiarCantidad }) {
  const [fecha, setFecha] = useState(hoyISO())
  const [textos, setTextos] = useState({})
  const [formularioSku, setFormularioSku] = useState(null)
  const [impresion, setImpresion] = useState(null)

  const cantidades = useMemo(() => panaderia[fecha] ?? {}, [panaderia, fecha])

  // Al cambiar de día, cargar las cantidades guardadas en los campos de texto.
  useEffect(() => {
    const dia = panaderia[fecha] ?? {}
    const iniciales = {}
    for (const [sku, n] of Object.entries(dia)) iniciales[sku] = formatearPeso(n)
    setTextos(iniciales)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fecha])

  // Modo impresión dirigida: se imprime solo el contenido elegido.
  useEffect(() => {
    if (!impresion) return
    document.body.classList.add('impresion-activa')
    const alTerminar = () => setImpresion(null)
    window.addEventListener('afterprint', alTerminar)
    const t = window.setTimeout(() => window.print(), 80)
    return () => {
      window.clearTimeout(t)
      window.removeEventListener('afterprint', alTerminar)
      document.body.classList.remove('impresion-activa')
    }
  }, [impresion])

  const consumoPorAmasijo = useMemo(calcularConsumoPorAmasijo, [])

  const consumos = useMemo(() => {
    return PANADERIA.insumos.map((insumo) => {
      const porProducto = consumoPorAmasijo[insumo.ean] ?? {}
      let total = 0
      for (const [sku, porAmasijo] of Object.entries(porProducto)) {
        total += (cantidades[sku] ?? 0) * porAmasijo
      }
      return { ...insumo, cantidad: total }
    })
  }, [cantidades, consumoPorAmasijo])

  const totalKgDia = PANADERIA.productos.reduce(
    (suma, p) => suma + (cantidades[p.sku] ?? 0) * (p.rendimientoKg ?? 0),
    0,
  )
  const productosConCantidad = PANADERIA.productos.filter((p) => cantidades[p.sku] > 0)

  function cambiarCantidad(sku, texto) {
    setTextos((prev) => ({ ...prev, [sku]: texto }))
    const n = texto.trim() === '' ? 0 : parsearPeso(texto)
    if (n !== null) onCambiarCantidad(fecha, sku, n)
  }

  const productoFormulario = PANADERIA.productos.find((p) => p.sku === formularioSku)

  return (
    <div className="vista">
      <section className="tarjeta">
        <div className="tarjeta-titulo">
          <h2>Panadería · producción del día</h2>
          <span className="subtitulo">
            Ingresa la cantidad (amasijos) de cada pan; los KG y el consumo de insumos se calculan solos.
          </span>
        </div>
        <div className="fila-encabezado sin-borde">
          <label className="campo campo-fecha-pan">
            <span>Fecha</span>
            <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
          </label>
          <div className="resumen">
            <div className="kpi">
              <span className="kpi-valor">{productosConCantidad.length}</span>
              <span className="kpi-etiqueta">Panes producidos</span>
            </div>
            <div className="kpi">
              <span className="kpi-valor">{formatearPeso(totalKgDia)}</span>
              <span className="kpi-etiqueta">KG totales</span>
            </div>
          </div>
        </div>
      </section>

      <div className="panaderia-columnas">
      <section className="tarjeta">
        <div className="tarjeta-titulo">
          <h2>Pan</h2>
          <div className="titulo-acciones">
            <button className="boton" onClick={() => setImpresion({ tipo: 'pan' })}>
              Imprimir tabla PAN
            </button>
          </div>
        </div>
        <div className="tabla-envoltura">
          <table>
            <thead>
              <tr>
                <th>SKU</th>
                <th>Descripción</th>
                <th className="numero">Cantidad</th>
                <th className="numero">Rend. KG</th>
                <th className="numero">Total KG</th>
                <th className="acciones-col"></th>
              </tr>
            </thead>
            <tbody>
              {PANADERIA.productos.map((p) => {
                const cantidad = cantidades[p.sku] ?? 0
                return (
                  <tr key={p.sku} className={cantidad > 0 ? 'fila-activa' : ''}>
                    <td className="guia">{p.sku}</td>
                    <td>{p.nombre}</td>
                    <td className="numero">
                      <input
                        className="entrada-cantidad"
                        type="text"
                        inputMode="decimal"
                        placeholder="0"
                        aria-label={`Cantidad de ${p.nombre}`}
                        value={textos[p.sku] ?? ''}
                        onChange={(e) => cambiarCantidad(p.sku, e.target.value)}
                      />
                    </td>
                    <td className="numero">{formatearPeso(p.rendimientoKg)}</td>
                    <td className="numero total-kg">
                      {cantidad > 0 ? formatearPeso(cantidad * (p.rendimientoKg ?? 0)) : '0'}
                    </td>
                    <td className="acciones-col">
                      <button className="boton chico" onClick={() => setFormularioSku(p.sku)}>
                        Formulario
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4">Total del día</td>
                <td className="numero">{formatearPeso(totalKgDia)}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      <section className="tarjeta">
        <div className="tarjeta-titulo">
          <h2>Transformaciones Panadería</h2>
          <div className="titulo-acciones">
            <button className="boton" onClick={() => setImpresion({ tipo: 'transformaciones' })}>
              Imprimir transformaciones
            </button>
          </div>
        </div>
        <p className="pista">
          Consumo de insumos calculado según las recetas y las cantidades del día
          (en unidades de compra de cada insumo, igual que el Excel).
        </p>
        <div className="tabla-envoltura">
          <table>
            <thead>
              <tr>
                <th>EAN</th>
                <th>Descripción</th>
                <th className="numero">Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {consumos.map((i) => (
                <tr key={i.ean} className={i.cantidad > 0 ? 'fila-activa' : ''}>
                  <td className="guia">{i.ean}</td>
                  <td>{i.nombre}</td>
                  <td className="numero">{i.cantidad > 0 ? formatearPeso(i.cantidad) : '0'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      </div>

      {productoFormulario && (
        <div className="modal-fondo" onClick={() => setFormularioSku(null)}>
          <div
            className="modal"
            role="dialog"
            aria-label={`Formulario de ${productoFormulario.nombre}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-acciones">
              <button
                className="boton primario"
                onClick={() => setImpresion({ tipo: 'formulario', sku: productoFormulario.sku })}
              >
                Imprimir formulario
              </button>
              <button className="boton" onClick={() => setFormularioSku(null)}>
                Cerrar
              </button>
            </div>
            <Formulario
              producto={productoFormulario}
              cantidad={cantidades[productoFormulario.sku] ?? 0}
              fecha={fecha}
            />
          </div>
        </div>
      )}

      {impresion &&
        createPortal(
          <div className="solo-impresion">
            <div className="imp-doc">
              {impresion.tipo === 'pan' && (
                <>
                  <ImpBanner titulo="PAN" fecha={fecha} />
                  <table>
                    <thead>
                      <tr>
                        <th>SKU</th>
                        <th>DESCRIPCION</th>
                        <th className="numero">CANTIDAD</th>
                        <th className="numero">TOTAL KG.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PANADERIA.productos.map((p) => {
                        const c = cantidades[p.sku] ?? 0
                        return (
                          <tr key={p.sku}>
                            <td className="guia">{p.sku}</td>
                            <td>{p.nombre}</td>
                            <td className="numero">{c ? formatearPeso(c) : '0'}</td>
                            <td className="numero">
                              {c ? formatearPeso(c * (p.rendimientoKg ?? 0)) : '0'}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="3">TOTAL DEL DIA</td>
                        <td className="numero">{formatearPeso(totalKgDia)}</td>
                      </tr>
                    </tfoot>
                  </table>
                </>
              )}
              {impresion.tipo === 'transformaciones' && (
                <>
                  <ImpBanner titulo="TRANSFORMACIONES PANADERIA" fecha={fecha} />
                  <table>
                    <thead>
                      <tr>
                        <th>EAN</th>
                        <th>DESCRIPCION</th>
                        <th className="numero">CANTIDAD</th>
                      </tr>
                    </thead>
                    <tbody>
                      {consumos.map((i) => (
                        <tr key={i.ean}>
                          <td className="guia">{i.ean}</td>
                          <td>{i.nombre}</td>
                          <td className="numero">
                            {i.cantidad > 0 ? formatearPeso(i.cantidad) : '0'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
              {impresion.tipo === 'formulario' && (
                <Formulario
                  producto={PANADERIA.productos.find((p) => p.sku === impresion.sku)}
                  cantidad={cantidades[impresion.sku] ?? 0}
                  fecha={fecha}
                />
              )}
            </div>
          </div>,
          document.body,
        )}
    </div>
  )
}

// Título del documento impreso al estilo del Excel: recuadro centrado sobre la tabla.
function ImpBanner({ titulo, fecha }) {
  return (
    <>
      <div className="imp-banner">{titulo}</div>
      <p className="imp-fecha">Fecha: {formatearFecha(fecha)}</p>
    </>
  )
}

// Ficha de un producto: receta (como la hoja RECETARIO del Excel) más el
// consumo del día según la cantidad de amasijos ingresada.
function Formulario({ producto, cantidad, fecha }) {
  const receta = PANADERIA.recetas[producto.sku]
  return (
    <div className="formulario-pan">
      <h2 className="titulo-impresion">RECETARIO PANADERÍA</h2>
      <div className="ficha-datos">
        <div><span>Producto</span><strong>{producto.nombre}</strong></div>
        <div><span>SKU</span><strong className="guia">{producto.sku}</strong></div>
        <div><span>Fecha</span><strong>{formatearFecha(fecha)}</strong></div>
        <div><span>Cantidad (amasijos)</span><strong>{formatearPeso(cantidad)}</strong></div>
        <div><span>Rendimiento por amasijo</span><strong>{formatearPeso(producto.rendimientoKg)} KG</strong></div>
        <div><span>Total producido</span><strong>{formatearPeso(cantidad * (producto.rendimientoKg ?? 0))} KG</strong></div>
      </div>

      {receta ? (
        <>
          <h3>Materias primas</h3>
          <div className="tabla-envoltura">
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Materia prima</th>
                  <th>Unidad</th>
                  <th className="numero">Cant. producción</th>
                  <th className="numero">Cant. por costo</th>
                  <th className="numero">Consumo del día</th>
                </tr>
              </thead>
              <tbody>
                {receta.ingredientes.map((ing, i) => (
                  <tr key={i}>
                    <td className="guia">{ing.codigo || '—'}</td>
                    <td>{ing.nombre}</td>
                    <td>{ing.unidad}</td>
                    <td className="numero">
                      {ing.cantidadProduccion !== null ? formatearPeso(ing.cantidadProduccion) : ''}
                    </td>
                    <td className="numero">
                      {ing.cantidadCosto !== null ? formatearPeso(ing.cantidadCosto) : ''}
                    </td>
                    <td className="numero">
                      {ing.cantidadCosto !== null && cantidad > 0
                        ? formatearPeso(ing.cantidadCosto * cantidad)
                        : '0'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {receta.proceso.length > 0 && (
            <>
              <h3>Descripción de proceso</h3>
              <table className="tabla-proceso">
                <tbody>
                  {receta.proceso.map((paso, i) => (
                    <tr key={i}>
                      <td className="etapa">{paso.etapa}</td>
                      <td>{paso.texto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </>
      ) : (
        <p className="vacio">Este producto no tiene receta cargada.</p>
      )}
    </div>
  )
}
