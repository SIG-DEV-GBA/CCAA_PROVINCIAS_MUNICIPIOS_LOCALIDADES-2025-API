import { metadata, resumen } from '@/data';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    nombre: 'API de Ubicaciones de España',
    version: metadata.version,
    descripcion: 'API pública con datos de comunidades autónomas, provincias, municipios y localidades de España',
    fuente: metadata.fuente,
    fecha_actualizacion: metadata.fecha,
    estadisticas: resumen,
    endpoints: {
      comunidades: {
        lista: '/api/comunidades',
        detalle: '/api/comunidades/{id}',
        descripcion: 'Lista todas las comunidades autónomas. El detalle incluye sus provincias.'
      },
      provincias: {
        lista: '/api/provincias',
        filtro: '/api/provincias?comunidad_id={id}',
        detalle: '/api/provincias/{id}',
        descripcion: 'Lista todas las provincias. Se puede filtrar por comunidad. El detalle incluye sus municipios.'
      },
      municipios: {
        lista: '/api/municipios?limit=100&offset=0',
        filtro: '/api/municipios?provincia_id={id}',
        detalle: '/api/municipios/{id}',
        descripcion: 'Lista municipios con paginación. Se puede filtrar por provincia. El detalle incluye sus localidades.'
      },
      localidades: {
        lista: '/api/localidades?limit=100&offset=0',
        filtro: '/api/localidades?municipio_id={id}',
        descripcion: 'Lista localidades con paginación. Se puede filtrar por municipio.'
      },
      buscar: {
        endpoint: '/api/buscar?q={texto}&tipo={tipo}&limit=50',
        tipos: ['comunidad', 'provincia', 'municipio', 'localidad'],
        descripcion: 'Búsqueda en todas las entidades. El parámetro tipo es opcional.'
      }
    }
  });
}
