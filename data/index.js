import ubicaciones from './ubicaciones.json';

export const { metadata, resumen, comunidades, provincias, municipios, localidades } = ubicaciones;

// Índices para búsquedas rápidas
export const comunidadesById = Object.fromEntries(comunidades.map(c => [c.id, c]));
export const provinciasByComunidadId = provincias.reduce((acc, p) => {
  if (!acc[p.comunidad_id]) acc[p.comunidad_id] = [];
  acc[p.comunidad_id].push(p);
  return acc;
}, {});
export const provinciasById = Object.fromEntries(provincias.map(p => [p.id, p]));
export const municipiosByProvinciaId = municipios.reduce((acc, m) => {
  if (!acc[m.provincia_id]) acc[m.provincia_id] = [];
  acc[m.provincia_id].push(m);
  return acc;
}, {});
export const municipiosById = Object.fromEntries(municipios.map(m => [m.id, m]));
export const localidadesByMunicipioId = localidades.reduce((acc, l) => {
  if (!acc[l.municipio_id]) acc[l.municipio_id] = [];
  acc[l.municipio_id].push(l);
  return acc;
}, {});
