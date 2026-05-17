import { worksheets } from '@/lib/dummy-data';
import { Badge, Card } from '@/components/ui';

export default function Detail({params}:{params:{id:string}}){
 const w=worksheets.find(x=>x.id===params.id); if(!w) return <p>Data tidak ditemukan.</p>;
 return <div className='space-y-4'><Card><div className='flex items-center gap-2'><h1 className='text-2xl font-bold'>{w.title}</h1><Badge>{w.level}</Badge></div><p>{w.materi}</p></Card><Card><h3 className='font-semibold'>Form Pengerjaan</h3><textarea className='w-full border rounded p-2 my-2' placeholder='Jawaban uraian...'/><input type='file' className='text-sm'/><button className='mt-3 px-3 py-2 bg-emerald-500 text-white rounded'>Kirim</button></Card></div>
}
