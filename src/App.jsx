import { useEffect, useMemo, useState } from 'react'
import { cargarDatos, guardarDatos } from './storage.js'
import RegistroView from './components/RegistroView.jsx'
import HistorialView from './components/HistorialView.jsx'
import PanaderiaView from './components/PanaderiaView.jsx'
import AjustesView from './components/AjustesView.jsx'

const VISTAS = [
  { id: 'registro', etiqueta: 'Registro' },
  { id: 'historial', etiqueta: 'Historial' },
  { id: 'panaderia', etiqueta: 'Panadería' },
  { id: 'ajustes', etiqueta: 'Ajustes' },
]

export default function App() {
  const inicial = useMemo(() => cargarDatos(), [])
  const [registros, setRegistros] = useState(inicial.registros)
  const [config, setConfig] = useState(inicial.config)
  const [panaderia, setPanaderia] = useState(inicial.panaderia)
  const [vista, setVista] = useState('registro')
  const [editandoId, setEditandoId] = useState(null)
  const [aviso, setAviso] = useState(null)

  useEffect(() => {
    guardarDatos({ registros, config, panaderia })
  }, [registros, config, panaderia])

  function mostrarAviso(texto) {
    setAviso(texto)
    window.clearTimeout(mostrarAviso.timer)
    mostrarAviso.timer = window.setTimeout(() => setAviso(null), 3000)
  }

  function agregarRegistro(registro) {
    setRegistros((prev) => [...prev, registro])
    mostrarAviso('Registro guardado')
  }

  function actualizarRegistro(actualizado) {
    setRegistros((prev) => prev.map((r) => (r.id === actualizado.id ? actualizado : r)))
    setEditandoId(null)
    mostrarAviso('Registro actualizado')
  }

  function eliminarRegistro(id) {
    setRegistros((prev) => prev.filter((r) => r.id !== id))
    if (editandoId === id) setEditandoId(null)
    mostrarAviso('Registro eliminado')
  }

  function editarDesdeHistorial(id) {
    setEditandoId(id)
    setVista('registro')
  }

  function importarDatos(datos) {
    setRegistros(datos.registros)
    setConfig(datos.config)
    setPanaderia(datos.panaderia ?? {})
    mostrarAviso('Respaldo importado')
  }

  // Guarda la cantidad de amasijos de un pan para un día dado.
  function cambiarCantidadPan(fecha, sku, cantidad) {
    setPanaderia((prev) => {
      const dia = { ...(prev[fecha] ?? {}) }
      if (cantidad > 0) dia[sku] = cantidad
      else delete dia[sku]
      const siguiente = { ...prev, [fecha]: dia }
      if (Object.keys(dia).length === 0) delete siguiente[fecha]
      return siguiente
    })
  }

  const registroEnEdicion = registros.find((r) => r.id === editandoId) ?? null

  return (
    <div className="app">
      <header className="cabecera">
        <div className="cabecera-contenido">
          <div className="marca">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 3h5v5" />
              <path d="M8 3H3v5" />
              <path d="M21 3l-7 7" />
              <path d="M3 3l7 7" />
              <path d="M16 21h5v-5" />
              <path d="M8 21H3v-5" />
              <path d="M21 21l-7-7" />
              <path d="M3 21l7-7" />
            </svg>
            <h1>Registro de Transformaciones</h1>
          </div>
          <nav className="pestanas" aria-label="Vistas">
            {VISTAS.map((v) => (
              <button
                key={v.id}
                className={vista === v.id ? 'pestana activa' : 'pestana'}
                onClick={() => setVista(v.id)}
              >
                {v.etiqueta}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className={vista === 'panaderia' ? 'contenido contenido-ancha' : 'contenido'}>
        {vista === 'registro' && (
          <RegistroView
            registros={registros}
            config={config}
            registroEnEdicion={registroEnEdicion}
            onAgregar={agregarRegistro}
            onActualizar={actualizarRegistro}
            onEliminar={eliminarRegistro}
            onEditar={setEditandoId}
            onCancelarEdicion={() => setEditandoId(null)}
          />
        )}
        {vista === 'historial' && (
          <HistorialView
            registros={registros}
            config={config}
            onEditar={editarDesdeHistorial}
            onEliminar={eliminarRegistro}
          />
        )}
        {vista === 'panaderia' && (
          <PanaderiaView panaderia={panaderia} onCambiarCantidad={cambiarCantidadPan} />
        )}
        {vista === 'ajustes' && (
          <AjustesView
            registros={registros}
            config={config}
            panaderia={panaderia}
            onCambiarConfig={setConfig}
            onImportar={importarDatos}
            onBorrarTodo={() => {
              setRegistros([])
              mostrarAviso('Se borraron todos los registros')
            }}
          />
        )}
      </main>

      {aviso && (
        <div className="aviso" role="status">
          {aviso}
        </div>
      )}
    </div>
  )
}
