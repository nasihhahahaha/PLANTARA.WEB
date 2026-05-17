import Link from 'next/link';
export default function Home(){
  return <section className="text-center py-16"><h1 className="text-4xl font-bold text-emerald-700">Belajar Lingkungan + STEM</h1><p className="mt-4">Platform worksheet, video project, dan pendanaan online.</p><div className="mt-6 flex gap-3 justify-center"><Link href="/dashboard" className="bg-emerald-600 text-white px-4 py-2 rounded">Masuk Dashboard</Link><Link href="/worksheets" className="bg-sky-600 text-white px-4 py-2 rounded">Lihat Worksheet</Link></div></section>
}
