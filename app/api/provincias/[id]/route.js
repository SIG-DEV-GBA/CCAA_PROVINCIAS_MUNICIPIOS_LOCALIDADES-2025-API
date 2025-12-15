import { provinciasById, municipiosByProvinciaId } from '@/data';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { id } = await params;
  const provincia = provinciasById[id];

  if (!provincia) {
    return NextResponse.json({ error: 'Provincia no encontrada' }, { status: 404 });
  }

  const municipiosData = municipiosByProvinciaId[id] || [];

  return NextResponse.json({
    ...provincia,
    total_municipios: municipiosData.length,
    municipios: municipiosData
  });
}
