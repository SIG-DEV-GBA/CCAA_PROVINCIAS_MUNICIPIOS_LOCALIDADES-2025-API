import { comunidades, resumen } from '@/data';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    total: resumen.comunidades,
    data: comunidades
  });
}
