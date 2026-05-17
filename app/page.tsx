import Link from 'next/link';

export default function Home(){
  return <div className='text-center py-16 space-y-4'><h1 className='text-4xl font-black text-emerald-600'>PLANTARA PROJECT</h1><p>Platform edukasi Lingkungan & STEM untuk siswa, guru, admin, dan donatur.</p><div className='space-x-2'><Link className='px-4 py-2 bg-emerald-500 text-white rounded' href='/auth/login'>Login</Link><Link className='px-4 py-2 bg-sky-500 text-white rounded' href='/dashboard'>Masuk Dashboard</Link></div></div>
}
