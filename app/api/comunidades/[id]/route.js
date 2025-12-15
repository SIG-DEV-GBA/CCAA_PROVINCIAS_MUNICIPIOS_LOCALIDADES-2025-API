import { comunidadesById, provinciasByComunidadId } from '@/data';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { id } = await params;
  const comunidad = comunidadesById[id];

  if (!comunidad) {
    return NextResponse.json({ error: 'Comunidad no encontrada' }, { status: 404 });
  }

  const provinciasData = provinciasByComunidadId[id] || [];

  return NextResponse.json({
    ...comunidad,
    provincias: provinciasData
  });
}
