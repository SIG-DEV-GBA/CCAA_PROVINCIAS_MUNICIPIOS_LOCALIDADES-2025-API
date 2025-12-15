import { municipios, municipiosByProvinciaId } from '@/data';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const provinciaId = searchParams.get('provincia_id');
  const limit = parseInt(searchParams.get('limit') || '100');
  const offset = parseInt(searchParams.get('offset') || '0');

  let data = municipios;

  if (provinciaId) {
    data = municipiosByProvinciaId[provinciaId] || [];
  }

  const sorted = [...data].sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
  const total = sorted.length;
  const paginated = sorted.slice(offset, offset + limit);

  return NextResponse.json({
    total,
    limit,
    offset,
    data: paginated
  });
}
