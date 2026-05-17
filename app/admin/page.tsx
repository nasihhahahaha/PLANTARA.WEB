import { proposals, users, videos, worksheets } from '@/lib/dummy-data';
import { Card, SectionTitle } from '@/components/ui';

export default function Admin(){
 return <div className='space-y-4'><SectionTitle title='Admin Panel'/><div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3'>{[['Pengguna',users.length],['Worksheet',worksheets.length],['Video',videos.length],['Pengajuan',proposals.length]].map(([a,b])=><Card key={String(a)}><p>{a}</p><p className='text-2xl font-bold'>{String(b)}</p></Card>)}</div><Card><h3 className='font-semibold'>Review Proposal</h3><ul>{proposals.map(p=><li key={p.id} className='py-2 border-b flex justify-between'><span>{p.title}</span><div className='space-x-2'><button className='px-2 py-1 bg-emerald-500 text-white rounded text-xs'>Approve</button><button className='px-2 py-1 bg-rose-500 text-white rounded text-xs'>Reject</button></div></li>)}</ul></Card></div>
}
