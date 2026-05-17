import { Badge, Card, SectionTitle } from '@/components/ui';
import { worksheets } from '@/lib/dummy-data';
import Link from 'next/link';

export default function WorksheetPage(){
  return <div className='space-y-4'><SectionTitle title='Worksheet STEM & Lingkungan' desc='Filter level, tema, dan pencarian tersedia.'/>
  <div className='flex gap-2'><input className='border rounded px-3 py-2 w-full' placeholder='Cari worksheet...'/><select className='border rounded px-2'><option>Semua Level</option><option>Dasar</option><option>Menengah</option><option>Lanjutan</option></select></div>
  <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>{worksheets.map(w=><Card key={w.id}><div className='flex justify-between'><h3 className='font-semibold'>{w.title}</h3><Badge>{w.level}</Badge></div><p className='text-sm my-2'>{w.description}</p><p className='text-xs text-slate-500'>{w.tema}</p><Link className='text-sky-600 text-sm' href={`/worksheet/${w.id}`}>Lihat Detail</Link></Card>)}</div></div>
}
