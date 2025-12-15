import { localidades, localidadesByMunicipioId } from '@/data';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const municipioId = searchParams.get('municipio_id');
  const limit = parseInt(searchParams.get('limit') || '100');
  const offset = parseInt(searchParams.get('offset') || '0');

  let data = localidades;

  if (municipioId) {
    data = localidadesByMunicipioId[municipioId] || [];
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
