import { NextResponse } from 'next/server';
import { INITIAL_TICKERS } from '@/lib/mockData';

export async function GET() {
  return NextResponse.json({
    timestamp: new Date().toISOString(),
    top_bar_tickers: INITIAL_TICKERS,
    system_status: 'HEALTHY',
    source: 'AEGIS Market Telemetry Gateway',
  });
}
