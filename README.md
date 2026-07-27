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
  y se anotan las filas. Cada tipo de transformación muestra su **código EAN-13** (en la
  lista y destacado con botón para copiar), que queda guardado en el registro para
  anotarlo en la guía sin buscarlo. Al agregar una fila, las dos guías quedan pre-cargadas
  con el número siguiente (correlativo). Avisa si una guía de insumo ya fue registrada antes.
- **Historial**: todos los registros con filtros por sección, rango de fechas y búsqueda
  por número de guía, tipo o código EAN-13. Muestra totales de KG, resumen por tipo, y
  permite **exportar a CSV** (se abre en Excel, incluye el código) e imprimir.
- **Panadería**: producción del día. Se ingresa la cantidad (amasijos) de cada pan y el
  sistema calcula el **total KG** (cantidad × rendimiento de la receta) y las
  **Transformaciones Panadería** (consumo de cada insumo según las recetas, en unidades
  de compra, igual que el Excel). Cada pan tiene su **formulario** (recetario con
  materias primas, proceso y consumo del día). Se puede imprimir la tabla PAN, la tabla
  de transformaciones y cada formulario por separado.
- **Ajustes**: administrar secciones y sus tipos de transformación, descargar/importar
  **respaldos** en JSON, y borrar todo.

Las recetas de panadería (32 productos, 36 insumos) están en `src/panaderia-data.js`,
extraídas automáticamente del Excel `25-07-2026.xlsm`. Si cambia una receta o un
rendimiento, se edita ese archivo.

## Dónde se guardan los datos

Los datos quedan guardados en el navegador (localStorage), en este computador.
**Importante**: descargar un respaldo (Ajustes → Descargar respaldo) cada cierto
tiempo, porque si se borran los datos del navegador se pierde el registro.
# Transformaciones
