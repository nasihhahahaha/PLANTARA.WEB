import Link from 'next/link';

const links = ['dashboard','worksheets','videos','funding','admin','profile'];
export function MainNav(){
  return <nav className="bg-emerald-600 text-white"><div className="max-w-7xl mx-auto p-4 flex flex-wrap gap-4 items-center"><Link href="/" className="font-bold text-lg">EcoSTEM Project Hub</Link>{links.map(l=><Link key={l} href={`/${l}`} className="capitalize hover:underline">{l}</Link>)}<div className="ml-auto flex gap-2"><Link href="/auth/login">Login</Link><Link href="/auth/register">Register</Link></div></div></nav>
}
