import { CONFIG_DEFAULT } from './config.js'

const CLAVE = 'transformaciones-v1'

// EAN por defecto de cada tipo, para rellenar configuraciones guardadas antes
// de que los tipos tuvieran código.
const EAN_POR_NOMBRE = new Map(
  CONFIG_DEFAULT.secciones.flatMap((s) => s.tipos.map((t) => [t.nombre, t.ean])),
)

// Los tipos se guardaban como texto ('Grasa V') y ahora son { nombre, ean }.
function normalizarConfig(config) {
  return {
    ...config,
    secciones: config.secciones.map((seccion) => ({
      ...seccion,
      tipos: (seccion.tipos ?? []).map((tipo) =>
        typeof tipo === 'string'
          ? { nombre: tipo, ean: EAN_POR_NOMBRE.get(tipo) ?? '' }
          : { nombre: tipo.nombre, ean: tipo.ean ?? EAN_POR_NOMBRE.get(tipo.nombre) ?? '' },
      ),
    })),
  }
}

export function cargarDatos() {
  try {
    const crudo = localStorage.getItem(CLAVE)
    if (!crudo) return { registros: [], config: CONFIG_DEFAULT, panaderia: {} }
    const datos = JSON.parse(crudo)
    return {
      registros: Array.isArray(datos.registros) ? datos.registros : [],
      config:
        datos.config && Array.isArray(datos.config.secciones)
          ? normalizarConfig(datos.config)
          : CONFIG_DEFAULT,
      panaderia: datos.panaderia && typeof datos.panaderia === 'object' ? datos.panaderia : {},
    }
  } catch {
    return { registros: [], config: CONFIG_DEFAULT, panaderia: {} }
  }
}

export function guardarDatos({ registros, config, panaderia }) {
  localStorage.setItem(CLAVE, JSON.stringify({ registros, config, panaderia, version: 2 }))
}

export { normalizarConfig }
