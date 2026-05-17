import { Card, Progress, SectionTitle } from '@/components/ui';
import { proposals, users, videos, worksheets } from '@/lib/dummy-data';

export default function Dashboard(){
  return <div className='space-y-6'>
    <SectionTitle title='Dashboard' desc='Ringkasan aktivitas per role pengguna.'/>
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
      <Card><p className='text-sm'>Total Pengguna</p><p className='text-2xl font-bold'>{users.length}</p></Card>
      <Card><p className='text-sm'>Total Worksheet</p><p className='text-2xl font-bold'>{worksheets.length}</p></Card>
      <Card><p className='text-sm'>Total Video</p><p className='text-2xl font-bold'>{videos.length}</p></Card>
      <Card><p className='text-sm'>Pengajuan Dana</p><p className='text-2xl font-bold'>{proposals.length}</p></Card>
    </div>
    <Card><h3 className='font-semibold mb-2'>Siswa: Progress Belajar</h3><Progress value={68}/><p className='text-sm mt-2'>Video terakhir: {videos[0].title}</p></Card>
    <Card><h3 className='font-semibold'>Reviewer/Donatur: Menunggu Review</h3><ul className='list-disc pl-6 text-sm'>{proposals.filter(p=>p.status==='diajukan').map(p=><li key={p.id}>{p.title}</li>)}</ul></Card>
  </div>
}
