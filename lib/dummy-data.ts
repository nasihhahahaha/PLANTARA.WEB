import { FundingStatus, Level, Role } from './types';

export const users = [
  { id:'u1', name:'Alya Putri', email:'alya@plantara.id', role:'siswa' as Role, school:'SMP Nusantara', avatar:'https://i.pravatar.cc/120?img=12', created_at:'2026-01-02' },
  { id:'u2', name:'Pak Budi', email:'budi@plantara.id', role:'guru' as Role, school:'SMP Nusantara', avatar:'https://i.pravatar.cc/120?img=47', created_at:'2026-01-03' },
  { id:'u3', name:'Rina GreenFund', email:'rina@donatur.id', role:'reviewer' as Role, school:'Komunitas Hijau', avatar:'https://i.pravatar.cc/120?img=32', created_at:'2026-01-04' }
];

export const worksheets = Array.from({length:6}).map((_,i)=>({ id:`w${i+1}`, title:["Audit Sampah Kelas","Mini PLTS","Filter Air Sederhana","Kebun Hidroponik","Simulasi Emisi","Sensor Kelembapan"][i], description:'Worksheet STEM lingkungan berbasis project.', tema:['daur ulang','energi terbarukan','air bersih','pertanian pintar','perubahan iklim','pertanian pintar'][i], level:(['Dasar','Menengah','Dasar','Menengah','Lanjutan','Lanjutan'][i] as Level), materi:'Pelajari konsep, lakukan eksperimen, dan refleksi dampak lingkungan.', status:['belum dikerjakan','sedang dikerjakan','selesai'][i%3], score: 70+i*3 }));

export const videos = [
  'Membuat filter air sederhana','Membuat komposter mini','Membuat lampu tenaga surya sederhana','Membuat sensor kelembapan tanah','Membuat eco-brick dari sampah plastik','Membuat turbin angin mini'
].map((title,i)=>({ id:`v${i+1}`, title, description:'Video tutorial project-based learning.', thumbnail:`https://picsum.photos/seed/plantara${i}/400/220`, youtube:'https://www.youtube.com/embed/dQw4w9WgXcQ', kategori:['Engineering','Biologi','Fisika','IoT','Kimia','Fisika'][i], tema:['air bersih','daur ulang','energi terbarukan','pertanian pintar','daur ulang','energi terbarukan'][i], durasi:['12:20','9:11','14:05','11:40','8:30','13:15'][i], level:(['Dasar','Dasar','Menengah','Lanjutan','Menengah','Lanjutan'][i] as Level), alat:'Botol bekas, sensor, kabel, dll', langkah:['Siapkan alat','Rakit project','Uji coba','Dokumentasi'] }));

export const proposals = Array.from({length:5}).map((_,i)=>({ id:`p${i+1}`, title:['Bank Sampah Digital','Kebun Vertikal Sekolah','Lampu Surya Lorong','Panen Air Hujan','Laboratorium Mini IoT'][i], applicant_id:users[i%3].id, role:users[i%3].role, school:'SMP Nusantara', problem_description:'Masalah lingkungan lokal belum tertangani optimal.', stem_solution:'Solusi berbasis rekayasa dan data.', objectives:'Meningkatkan literasi STEM & dampak lingkungan.', benefits:'Sekolah lebih hijau dan hemat energi.', budget_estimation:12000000+i*1000000, target_funding:15000000+i*1000000, timeline:'3 bulan', status:(['diajukan','direview','diterima','ditolak','didanai'][i] as FundingStatus), reviewer_notes: i%2 ? 'Perlu detail dampak sosial' : 'Baik, lanjutkan' }));
