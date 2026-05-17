import Link from 'next/link';
import { ReactNode } from 'react';

export const Badge = ({children}:{children:ReactNode}) => <span className='px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700'>{children}</span>;
export const Card = ({children}:{children:ReactNode}) => <div className='bg-white rounded-xl shadow-sm border p-4'>{children}</div>;
export const SectionTitle = ({title,desc}:{title:string,desc?:string}) => <div><h2 className='text-xl font-bold text-emerald-700'>{title}</h2>{desc&&<p className='text-sm text-slate-500'>{desc}</p>}</div>;
export const Progress = ({value}:{value:number}) => <div className='w-full h-2 bg-slate-100 rounded'><div className='h-2 bg-sky-500 rounded' style={{width:`${value}%`}}/></div>;
export const TopNav = () => <nav className='bg-white border-b sticky top-0 z-10'><div className='max-w-7xl mx-auto p-3 flex gap-4 text-sm'><b className='text-emerald-600'>PLANTARA PROJECT</b>{['dashboard','worksheet','video','funding','admin','profile'].map(x=><Link key={x} href={`/${x}`} className='hover:text-sky-600 capitalize'>{x}</Link>)}</div></nav>;
