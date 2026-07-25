import { useRef, useState } from 'react'
import { descargarBlob } from '../utils.js'
import { CONFIG_DEFAULT } from '../config.js'

export default function AjustesView({ registros, config, onCambiarConfig, onImportar, onBorrarTodo }) {
  const [nuevaSeccion, setNuevaSeccion] = useState('')
  const [nuevosTipos, setNuevosTipos] = useState({})
  const refArchivo = useRef(null)

  function agregarSeccion(e) {
    e.preventDefault()
    const nombre = nuevaSeccion.trim()
    if (!nombre) return
    if (config.secciones.some((s) => s.nombre.toLowerCase() === nombre.toLowerCase())) {
      window.alert('Esa sección ya existe.')
      return
    }
    onCambiarConfig({
      ...config,
      secciones: [...config.secciones, { nombre, tipos: [] }],
    })
    setNuevaSeccion('')
  }

  function eliminarSeccion(nombre) {
    const usados = registros.filter((r) => r.seccion === nombre).length
    const mensaje = usados
      ? `La sección "${nombre}" tiene ${usados} registro(s). Los registros no se borran, pero la sección dejará de aparecer en el formulario. ¿Continuar?`
      : `¿Eliminar la sección "${nombre}"?`
    if (!window.confirm(mensaje)) return
    onCambiarConfig({
      ...config,
      secciones: config.secciones.filter((s) => s.nombre !== nombre),
    })
  }

  function agregarTipo(nombreSeccion) {
    const tipo = (nuevosTipos[nombreSeccion] ?? '').trim()
    if (!tipo) return
    onCambiarConfig({
      ...config,
      secciones: config.secciones.map((s) =>
        s.nombre === nombreSeccion && !s.tipos.includes(tipo)
          ? { ...s, tipos: [...s.tipos, tipo] }
          : s,
      ),
    })
    setNuevosTipos((prev) => ({ ...prev, [nombreSeccion]: '' }))
  }

  function eliminarTipo(nombreSeccion, tipo) {
    onCambiarConfig({
      ...config,
      secciones: config.secciones.map((s) =>
        s.nombre === nombreSeccion ? { ...s, tipos: s.tipos.filter((t) => t !== tipo) } : s,
      ),
    })
  }

  function exportarRespaldo() {
    const fecha = new Date().toISOString().slice(0, 10)
    const blob = new Blob([JSON.stringify({ registros, config, version: 1 }, null, 2)], {
      type: 'application/json',
    })
    descargarBlob(blob, `respaldo-transformaciones-${fecha}.json`)
  }

  function importarRespaldo(e) {
    const archivo = e.target.files?.[0]
    if (!archivo) return
    const lector = new FileReader()
    lector.onload = () => {
      try {
        const datos = JSON.parse(lector.result)
        if (!Array.isArray(datos.registros)) throw new Error('formato')
        const seguir = window.confirm(
          `El respaldo tiene ${datos.registros.length} registro(s) y reemplazará los datos actuales (${registros.length} registro(s)). ¿Continuar?`,
        )
        if (seguir) {
          onImportar({
            registros: datos.registros,
            config: datos.config && Array.isArray(datos.config.secciones) ? datos.config : CONFIG_DEFAULT,
          })
        }
      } catch {
        window.alert('El archivo no es un respaldo válido.')
      }
      e.target.value = ''
    }
    lector.readAsText(archivo)
  }

  return (
    <div className="vista">
      <section className="tarjeta">
        <div className="tarjeta-titulo">
          <h2>Secciones y tipos de transformación</h2>
          <span className="subtitulo">
            Lo que agregues aquí aparece en el formulario de registro.
          </span>
        </div>

        <div className="secciones-config">
          {config.secciones.map((s) => (
            <div key={s.nombre} className="seccion-config">
              <div className="seccion-config-cabecera">
                <h3>{s.nombre}</h3>
                <button className="boton chico peligro" onClick={() => eliminarSeccion(s.nombre)}>
                  Eliminar sección
                </button>
              </div>
              <ul className="lista-tipos">
                {s.tipos.map((t) => (
                  <li key={t}>
                    {t}
                    <button
                      className="quitar"
                      aria-label={`Quitar ${t}`}
                      onClick={() => eliminarTipo(s.nombre, t)}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                      </svg>
                    </button>
                  </li>
                ))}
                {s.tipos.length === 0 && <li className="sin-tipos">Sin tipos definidos</li>}
              </ul>
              <div className="agregar-tipo">
                <input
                  type="text"
                  placeholder="Nuevo tipo…"
                  value={nuevosTipos[s.nombre] ?? ''}
                  onChange={(e) =>
                    setNuevosTipos((prev) => ({ ...prev, [s.nombre]: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      agregarTipo(s.nombre)
                    }
                  }}
                />
                <button className="boton chico" onClick={() => agregarTipo(s.nombre)}>
                  Agregar
                </button>
              </div>
            </div>
          ))}
        </div>

        <form className="agregar-seccion" onSubmit={agregarSeccion}>
          <input
            type="text"
            placeholder="Nueva sección (ej: Panadería)"
            value={nuevaSeccion}
            onChange={(e) => setNuevaSeccion(e.target.value)}
          />
          <button className="boton" type="submit">Agregar sección</button>
        </form>
      </section>

      <section className="tarjeta">
        <div className="tarjeta-titulo">
          <h2>Respaldo de datos</h2>
          <span className="subtitulo">
            Los datos se guardan en este navegador. Descarga un respaldo cada cierto tiempo por seguridad.
          </span>
        </div>
        <div className="acciones-respaldo">
          <button className="boton primario" onClick={exportarRespaldo}>
            Descargar respaldo (JSON)
          </button>
          <button className="boton" onClick={() => refArchivo.current?.click()}>
            Importar respaldo
          </button>
          <input
            ref={refArchivo}
            type="file"
            accept="application/json"
            onChange={importarRespaldo}
            hidden
          />
        </div>
      </section>

      <section className="tarjeta zona-peligro">
        <div className="tarjeta-titulo">
          <h2>Zona de riesgo</h2>
        </div>
        <button
          className="boton peligro"
          onClick={() => {
            if (!window.confirm(`Se borrarán los ${registros.length} registro(s). ¿Continuar?`)) return
            if (!window.confirm('Esta acción no se puede deshacer. ¿Borrar todo?')) return
            onBorrarTodo()
          }}
          disabled={registros.length === 0}
        >
          Borrar todos los registros
        </button>
      </section>
    </div>
  )
}
