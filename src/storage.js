import { CONFIG_DEFAULT } from './config.js'

const CLAVE = 'transformaciones-v1'

export function cargarDatos() {
  try {
    const crudo = localStorage.getItem(CLAVE)
    if (!crudo) return { registros: [], config: CONFIG_DEFAULT, panaderia: {} }
    const datos = JSON.parse(crudo)
    return {
      registros: Array.isArray(datos.registros) ? datos.registros : [],
      config: datos.config && Array.isArray(datos.config.secciones) ? datos.config : CONFIG_DEFAULT,
      panaderia: datos.panaderia && typeof datos.panaderia === 'object' ? datos.panaderia : {},
    }
  } catch {
    return { registros: [], config: CONFIG_DEFAULT, panaderia: {} }
  }
}

export function guardarDatos({ registros, config, panaderia }) {
  localStorage.setItem(CLAVE, JSON.stringify({ registros, config, panaderia, version: 1 }))
}
