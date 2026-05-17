-- Supabase schema EcoSTEM Project Hub
create table users (id uuid primary key, name text, email text unique, role text, school text, avatar text, created_at timestamp default now());
create table worksheets (id uuid primary key, title text, description text, theme text, level text, materi text, created_at timestamp default now());
create table worksheet_questions (id uuid primary key, worksheet_id uuid references worksheets(id), question text, type text, options jsonb, answer text);
create table worksheet_submissions (id uuid primary key, worksheet_id uuid, user_id uuid, mcq_score int, essay_answer text, file_url text, teacher_feedback text, status text, updated_at timestamp);
create table videos (id uuid primary key, title text, description text, thumbnail text, youtube_url text, category text, theme text, duration text, level text, tools text, steps text);
create table video_progress (id uuid primary key, user_id uuid, video_id uuid, progress int, updated_at timestamp);
create table funding_projects (id uuid primary key, title text, applicant_id uuid, problem_description text, stem_solution text, objectives text, benefits text, budget_estimation numeric, target_funding numeric, proposal_file_url text, image_url text, timeline text, status text, reviewer_notes text, created_at timestamp, updated_at timestamp);
create table funding_reviews (id uuid primary key, project_id uuid, reviewer_id uuid, status text, notes text, created_at timestamp);
create table notifications (id uuid primary key, user_id uuid, title text, message text, is_read boolean default false, created_at timestamp default now());
