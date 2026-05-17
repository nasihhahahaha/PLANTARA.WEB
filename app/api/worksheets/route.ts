import { NextResponse } from 'next/server';
import { worksheets } from '@/lib/dummy-data';
export async function GET(){ return NextResponse.json(worksheets); }
