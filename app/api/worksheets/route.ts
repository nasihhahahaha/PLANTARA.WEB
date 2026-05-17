import { NextResponse } from 'next/server';
import { users, worksheets, videos, fundingProjects } from '@/data/dummy';

export async function GET(){
  const payload = {
    users,
    worksheets,
    videos,
    fundingProjects,
    info: 'worksheets endpoint'
  };
  return NextResponse.json(payload);
}
