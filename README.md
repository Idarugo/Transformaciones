# Registro de Transformaciones

Sistema para reemplazar el cuaderno donde se anotan las transformaciones por sección
(Carnicería, Rotisería, FF.VV, etc.): guía de insumo consumido (egreso), guía del
producto elaborado (ingreso), tipo de transformación, fecha y peso en KG.

## Cómo usarlo

```bash
npm install   # solo la primera vez
npm run dev
```

Luego abrir <http://localhost:5173> en el navegador.

## Qué hace

- **Registro**: se elige la sección y la fecha del día (como el encabezado del cuaderno)
  y se anotan las filas. Al agregar una fila, las dos guías quedan pre-cargadas con el
  número siguiente (correlativo) para anotar la próxima más rápido. Avisa si una guía
  de insumo ya fue registrada antes.
- **Historial**: todos los registros con filtros por sección, rango de fechas y búsqueda
  por número de guía o tipo. Muestra totales de KG, resumen por tipo, y permite
  **exportar a CSV** (se abre en Excel) e imprimir.
- **Ajustes**: administrar secciones y sus tipos de transformación, descargar/importar
  **respaldos** en JSON, y borrar todo.

## Dónde se guardan los datos

Los datos quedan guardados en el navegador (localStorage), en este computador.
**Importante**: descargar un respaldo (Ajustes → Descargar respaldo) cada cierto
tiempo, porque si se borran los datos del navegador se pierde el registro.
# Transformaciones
