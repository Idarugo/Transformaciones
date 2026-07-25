import { CONFIG_DEFAULT } from './config.js'

const CLAVE = 'transformaciones-v1'

export function cargarDatos() {
  try {
    const crudo = localStorage.getItem(CLAVE)
    if (!crudo) return { registros: [], config: CONFIG_DEFAULT }
    const datos = JSON.parse(crudo)
    return {
      registros: Array.isArray(datos.registros) ? datos.registros : [],
      config: datos.config && Array.isArray(datos.config.secciones) ? datos.config : CONFIG_DEFAULT,
    }
  } catch {
    return { registros: [], config: CONFIG_DEFAULT }
  }
}

export function guardarDatos({ registros, config }) {
  localStorage.setItem(CLAVE, JSON.stringify({ registros, config, version: 1 }))
}
