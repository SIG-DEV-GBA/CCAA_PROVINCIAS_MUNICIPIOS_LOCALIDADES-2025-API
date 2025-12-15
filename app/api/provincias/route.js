import { provincias, resumen } from '@/data';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const comunidadId = searchParams.get('comunidad_id');

  let data = provincias;

  if (comunidadId) {
    data = provincias.filter(p => p.comunidad_id === parseInt(comunidadId));
  }

  const sorted = [...data].sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));

  return NextResponse.json({
    total: sorted.length,
    data: sorted
  });
}
