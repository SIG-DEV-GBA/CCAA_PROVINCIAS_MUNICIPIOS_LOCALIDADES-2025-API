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

  const total = data.length;
  data = data.slice(offset, offset + limit);

  return NextResponse.json({
    total,
    limit,
    offset,
    data
  });
}
