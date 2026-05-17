import { users } from '@/data/dummy';
export default function Profile(){const u=users[0];return <div className="card max-w-xl"><h1 className="text-2xl font-bold">Profil Pengguna</h1><p>Nama: {u.name}</p><p>Email: {u.email}</p><p>Role: {u.role}</p><p>Sekolah: {u.school}</p></div>}
