import Image from 'next/image';
import { videos } from '@/lib/dummy-data';
import { Badge, Card, SectionTitle } from '@/components/ui';

export default function VideoPage(){
 return <div className='space-y-4'><SectionTitle title='Video Tutorial Project-Based' desc='Filter berdasarkan tema, level, kategori.'/><div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>{videos.map(v=><Card key={v.id}><Image src={v.thumbnail} alt={v.title} width={400} height={220} className='rounded'/><div className='my-2 flex justify-between'><Badge>{v.level}</Badge><span className='text-xs'>{v.durasi}</span></div><h3 className='font-semibold'>{v.title}</h3><p className='text-sm'>{v.tema} • {v.kategori}</p><button className='mt-2 px-3 py-1 bg-sky-500 text-white rounded text-sm'>Mulai Project</button></Card>)}</div></div>
}
