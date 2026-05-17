import { fundingProjects, users, videos, worksheets } from '@/data/dummy';
export default function Dashboard(){
  return <div className="space-y-4"><h1 className="text-2xl font-bold">Dashboard</h1><div className="grid md:grid-cols-4 gap-4">{[
['Total Pengguna',users.length],['Total Worksheet',worksheets.length],['Total Video',videos.length],['Pengajuan Dana',fundingProjects.length]
].map(([k,v])=><div key={String(k)} className="card"><p className="text-sm">{k}</p><p className="text-3xl font-bold text-emerald-600">{v}</p></div>)}</div><div className="card"><p>Ringkasan role tersedia: Siswa, Guru, Admin, Reviewer/Donatur.</p></div></div>
}
