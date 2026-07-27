// Fecha de hoy en formato ISO (YYYY-MM-DD), en hora local.
export function hoyISO() {
  const d = new Date()
  const mes = String(d.getMonth() + 1).padStart(2, '0')
  const dia = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${mes}-${dia}`
}

// "2026-07-25" -> "25/07/2026"
export function formatearFecha(iso) {
  if (!iso) return ''
  const [a, m, d] = iso.split('-')
  return `${d}/${m}/${a}`
}

// "2026-07-25" -> "25/07" (como se anota en el cuaderno)
export function formatearFechaCorta(iso) {
  if (!iso) return ''
  const [, m, d] = iso.split('-')
  return `${d}/${m}`
}

// Acepta "0,684" o "0.684" y devuelve el número, o null si no es válido.
export function parsearPeso(texto) {
  const limpio = String(texto).trim().replace(',', '.')
  if (limpio === '') return null
  const n = Number(limpio)
  return Number.isFinite(n) && n >= 0 ? n : null
}

// Muestra el peso con coma decimal: 0.684 -> "0,684"
export function formatearPeso(n) {
  if (n === null || n === undefined) return ''
  return n.toLocaleString('es-CL', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
  })
}

// Incrementa el número final de una guía conservando el prefijo y los ceros.
// "F8862979725" -> "F8862979726" | "F258169" -> "F258170"
export function siguienteGuia(guia) {
  const match = String(guia).trim().match(/^(.*?)(\d+)$/)
  if (!match) return ''
  const [, prefijo, numero] = match
  const siguiente = String(BigInt(numero) + 1n).padStart(numero.length, '0')
  return prefijo + siguiente
}

// Exporta registros a CSV compatible con Excel en español (separador ; y coma decimal).
export function exportarCSV(registros, nombreArchivo) {
  const encabezado = [
    'Sección',
    'Guía Insumo Consumido (Egreso)',
    'Guía Producto Elaborado (Ingreso)',
    'Tipo de Transformación',
    'Código EAN-13',
    'Fecha que se Hizo',
    'Fecha de Registro',
    'Peso (KG)',
  ]
  const filas = registros.map((r) => [
    r.seccion,
    r.guiaEgreso,
    r.guiaIngreso,
    r.tipo,
    r.ean ?? '',
    formatearFecha(r.fechaHizo),
    formatearFecha(r.fechaRegistro),
    formatearPeso(r.pesoKg),
  ])
  const csv = [encabezado, ...filas]
    .map((fila) => fila.map((celda) => `"${String(celda).replace(/"/g, '""')}"`).join(';'))
    .join('\r\n')
  // BOM para que Excel reconozca las tildes (UTF-8)
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' })
  descargarBlob(blob, nombreArchivo)
}

export function descargarBlob(blob, nombreArchivo) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = nombreArchivo
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
