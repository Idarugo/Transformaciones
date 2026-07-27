// Configuración por defecto: secciones y sus tipos de transformación con su código EAN-13.
// Se puede modificar desde la pestaña Ajustes (se guarda en el navegador).
export const CONFIG_DEFAULT = {
  secciones: [
    {
      nombre: 'Carnicería',
      tipos: [
        { nombre: 'Hueso Carnudo', ean: '2501107000002' },
        { nombre: 'Grasa V', ean: '2501120000003' },
        { nombre: 'Grasa U', ean: '2501186000009' },
        { nombre: 'Tocino de Cerdo', ean: '2501288000006' },
        { nombre: 'Resto de Huesos', ean: '2501628000000' },
        { nombre: 'Molida Corriente V', ean: '2501095000008' },
        { nombre: 'Molida Corriente U', ean: '2501184000001' },
        { nombre: 'Molida Especial V', ean: '2501139000001' },
        { nombre: 'Molida Especial U', ean: '2502329000009' },
      ],
    },
    {
      nombre: 'Rotisería',
      tipos: [
        { nombre: 'Cáscara Queso', ean: '2533033000009' },
        { nombre: 'Pichanga Económica', ean: '2531058000004' },
        { nombre: 'Pichanga Especial', ean: '2531059000003' },
      ],
    },
    {
      nombre: 'FF.VV',
      tipos: [{ nombre: 'Transformación', ean: '' }],
    },
    {
      nombre: 'Panadería',
      tipos: [{ nombre: 'Transformación', ean: '' }],
    },
    {
      nombre: 'Pastelería',
      tipos: [{ nombre: 'Transformación', ean: '' }],
    },
    {
      nombre: 'Platos Preparados',
      tipos: [{ nombre: 'Transformación', ean: '' }],
    },
  ],
}
