import { comunidades, provincias, municipios, localidades } from '@/data';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase().trim();
  const tipo = searchParams.get('tipo'); // comunidad, provincia, municipio, localidad
  const limit = parseInt(searchParams.get('limit') || '50');

  if (!q || q.length < 2) {
    return NextResponse.json({
      error: 'El parámetro "q" es requerido y debe tener al menos 2 caracteres'
    }, { status: 400 });
  }

  const results = {
    comunidades: [],
    provincias: [],
    municipios: [],
    localidades: []
  };

  // Función de búsqueda que normaliza acentos
  const normalize = (str) => str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const qNorm = normalize(q);

  if (!tipo || tipo === 'comunidad') {
    results.comunidades = comunidades
      .filter(c => normalize(c.nombre).includes(qNorm))
      .slice(0, limit);
  }

  if (!tipo || tipo === 'provincia') {
    results.provincias = provincias
      .filter(p => normalize(p.nombre).includes(qNorm))
      .slice(0, limit);
  }

  if (!tipo || tipo === 'municipio') {
    results.municipios = municipios
      .filter(m => normalize(m.nombre).includes(qNorm))
      .slice(0, limit);
  }

  if (!tipo || tipo === 'localidad') {
    results.localidades = localidades
      .filter(l => normalize(l.nombre).includes(qNorm))
      .slice(0, limit);
  }

  return NextResponse.json({
    query: q,
    tipo: tipo || 'todos',
    total: results.comunidades.length + results.provincias.length + results.municipios.length + results.localidades.length,
    results
  });
}
