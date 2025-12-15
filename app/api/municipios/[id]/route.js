import { municipiosById, localidadesByMunicipioId } from '@/data';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { id } = await params;
  const municipio = municipiosById[id];

  if (!municipio) {
    return NextResponse.json({ error: 'Municipio no encontrado' }, { status: 404 });
  }

  const localidadesData = (localidadesByMunicipioId[id] || [])
    .sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));

  return NextResponse.json({
    ...municipio,
    total_localidades: localidadesData.length,
    localidades: localidadesData
  });
}
