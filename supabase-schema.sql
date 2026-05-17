create table users (id uuid primary key, name text, email text unique, role text, school text, avatar text, created_at timestamptz default now());
create table worksheets (id uuid primary key, title text, description text, tema text, level text, materi text, created_at timestamptz default now());
create table worksheet_questions (id uuid primary key, worksheet_id uuid, question text, type text, options jsonb, answer text);
create table worksheet_submissions (id uuid primary key, worksheet_id uuid, student_id uuid, essay_answer text, file_url text, score int, feedback text, status text);
create table videos (id uuid primary key, title text, description text, thumbnail text, youtube_url text, category text, tema text, duration text, level text, tools_materials text, steps jsonb);
create table video_progress (id uuid primary key, video_id uuid, user_id uuid, progress int, completed bool default false);
create table funding_projects (id uuid primary key, title text, applicant_id uuid, problem_description text, stem_solution text, objectives text, benefits text, budget_estimation numeric, target_funding numeric, proposal_file_url text, image_url text, timeline text, status text, reviewer_notes text, created_at timestamptz default now(), updated_at timestamptz default now());
create table funding_reviews (id uuid primary key, project_id uuid, reviewer_id uuid, status text, notes text, created_at timestamptz default now());
create table notifications (id uuid primary key, user_id uuid, title text, message text, is_read bool default false, created_at timestamptz default now());
