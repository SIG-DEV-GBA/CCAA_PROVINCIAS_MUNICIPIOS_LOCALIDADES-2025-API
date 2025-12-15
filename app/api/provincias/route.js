import { provincias, resumen } from '@/data';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const comunidadId = searchParams.get('comunidad_id');

  let data = provincias;

  if (comunidadId) {
    data = provincias.filter(p => p.comunidad_id === parseInt(comunidadId));
  }

  return NextResponse.json({
    total: data.length,
    data
  });
}
