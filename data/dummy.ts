export const users = [
  { id: 'u1', name: 'Alya', email: 'alya@mail.com', role: 'Siswa', school: 'SMP 1 Hijau', avatar: '', created_at: '2026-01-01' },
  { id: 'u2', name: 'Pak Budi', email: 'budi@mail.com', role: 'Guru', school: 'SMP 1 Hijau', avatar: '', created_at: '2026-01-02' },
  { id: 'u3', name: 'Rina', email: 'rina@mail.com', role: 'Reviewer', school: 'Komunitas Eco', avatar: '', created_at: '2026-01-03' },
  { id: 'u4', name: 'Admin', email: 'admin@mail.com', role: 'Admin', school: 'Pusat', avatar: '', created_at: '2026-01-01' }
];

export const worksheets = Array.from({length:6}).map((_,i)=>({id:`w${i+1}`,title:`Worksheet ${i+1}`,description:'Eksplorasi STEM lingkungan',theme:['Daur Ulang','Energi Terbarukan','Air Bersih','Perubahan Iklim','Pertanian Pintar','Sampah Plastik'][i],level:['Dasar','Menengah','Lanjutan'][i%3],materi:'Materi singkat konsep dan eksperimen.',status:['belum dikerjakan','sedang dikerjakan','selesai'][i%3]}));
export const videos = [
'Membuat filter air sederhana','Membuat komposter mini','Membuat lampu tenaga surya sederhana','Membuat sensor kelembapan tanah','Membuat eco-brick dari sampah plastik','Membuat turbin angin mini'
].map((title,i)=>({id:`v${i+1}`,title,description:'Tutorial project-based learning',thumbnail:'https://placehold.co/640x360',youtube:'https://www.youtube.com/embed/dQw4w9WgXcQ',category:['Sains','Teknologi','Engineering','Matematika','Engineering','Teknologi'][i],theme:['Air Bersih','Daur Ulang','Energi Terbarukan','Pertanian Pintar','Daur Ulang','Perubahan Iklim'][i],duration:`${8+i} menit`,level:['Dasar','Menengah','Lanjutan'][i%3],tools:'Botol, pasir, arang',steps:'1. Siapkan alat 2. Rakit 3. Uji',progress:(i+1)*10}));

export const fundingProjects = Array.from({length:5}).map((_,i)=>({
id:`f${i+1}`,
title:`Project Eco ${i+1}`,
applicant_id: users[i%3].id,
problem_description:'Permasalahan sampah dan energi di lingkungan sekolah.',
stem_solution:'Solusi berbasis sensor dan daur ulang.',
objectives:'Mengurangi sampah 30%.',
benefits:'Edukasi dan dampak lingkungan.',
budget_estimation:5000000 + i*1000000,
target_funding:7000000 + i*1000000,
proposal_file_url:'#', image_url:'https://placehold.co/400x250', timeline:'3 bulan',
status:['draft','diajukan','direview','diterima','didanai'][i], reviewer_notes:'Catatan awal reviewer.',created_at:'2026-02-01',updated_at:'2026-02-15'
}));

export const schema = ['users','worksheets','worksheet_questions','worksheet_submissions','videos','video_progress','funding_projects','funding_reviews','notifications'];
