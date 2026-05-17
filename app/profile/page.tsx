import Image from 'next/image';
import { users } from '@/lib/dummy-data';

export default function Profile(){const u=users[0]; return <div className='bg-white border rounded-xl p-6 max-w-md'><Image src={u.avatar} alt={u.name} width={80} height={80} className='rounded-full'/><h1 className='text-xl font-bold mt-2'>{u.name}</h1><p>{u.email}</p><p>{u.role} • {u.school}</p></div>;}
