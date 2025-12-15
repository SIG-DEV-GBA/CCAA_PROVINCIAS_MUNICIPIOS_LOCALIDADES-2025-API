import { comunidades, resumen } from '@/data';
import { NextResponse } from 'next/server';

export async function GET() {
  const sorted = [...comunidades].sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));

  return NextResponse.json({
    total: resumen.comunidades,
    data: sorted
  });
}
