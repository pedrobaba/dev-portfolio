/*
# Create projects table for portfolio

1. New Tables
- `projects`
  - `id` (uuid, primary key, auto-generated)
  - `title` (text, not null) — project name
  - `description` (text, not null) — short project description
  - `image_url` (text) — URL to project thumbnail image
  - `tech_stack` (text[]) — array of technologies used
  - `project_url` (text) — link to live demo
  - `github_url` (text) — link to GitHub repo
  - `featured` (boolean, default false) — whether to highlight the project
  - `sort_order` (integer, default 0) — display ordering
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `projects`.
- Allow anon + authenticated SELECT (public portfolio, no sign-in needed).
- No insert/update/delete policies — data is managed via dashboard/SQL only.

3. Seed Data
- Inserts 6 placeholder projects with realistic titles, descriptions, tech stacks,
  and Pexels image URLs so the portfolio renders content out of the box.
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text,
  tech_stack text[] DEFAULT '{}',
  project_url text,
  github_url text,
  featured boolean NOT NULL DEFAULT false,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_projects" ON projects;
CREATE POLICY "public_read_projects"
ON projects FOR SELECT
TO anon, authenticated
USING (true);

INSERT INTO projects (title, description, image_url, tech_stack, project_url, github_url, featured, sort_order)
VALUES
  (
    'E-Commerce Dashboard',
    'A full-featured admin dashboard for managing products, orders, and customers with real-time analytics and charts.',
    'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    ARRAY['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    'https://example.com/ecommerce-demo',
    'https://github.com/mrpedro/ecommerce-dashboard',
    true,
    1
  ),
  (
    'Recipe Finder App',
    'A search-driven recipe app with filtering by cuisine, dietary needs, and cooking time, plus a favorites system.',
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    ARRAY['React', 'JavaScript', 'Tailwind CSS'],
    'https://example.com/recipe-finder',
    'https://github.com/mrpedro/recipe-finder',
    true,
    2
  ),
  (
    'Weather Widget',
    'A clean, responsive weather widget showing current conditions and a 5-day forecast using a public weather API.',
    'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    ARRAY['React', 'JavaScript', 'CSS'],
    'https://example.com/weather-widget',
    'https://github.com/mrpedro/weather-widget',
    false,
    3
  ),
  (
    'Task Manager',
    'A drag-and-drop kanban board for managing tasks across columns with priority labels and due dates.',
    'https://images.pexels.com/photos/375895/pexels-photo-375895.jpeg?auto=compress&cs=tinysrgb&w=800',
    ARRAY['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    'https://example.com/task-manager',
    'https://github.com/mrpedro/task-manager',
    true,
    4
  ),
  (
    'Portfolio Landing Page',
    'A modern, animated landing page for a creative agency with scroll effects and a contact form.',
    'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
    ARRAY['HTML', 'CSS', 'JavaScript'],
    'https://example.com/agency-landing',
    'https://github.com/mrpedro/agency-landing',
    false,
    5
  ),
  (
    'Movie Discovery App',
    'Browse trending and top-rated movies, search by genre, and save a personal watchlist with persistent storage.',
    'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=800',
    ARRAY['React', 'JavaScript', 'Tailwind CSS'],
    'https://example.com/movie-app',
    'https://github.com/mrpedro/movie-discovery',
    false,
    6
  )
ON CONFLICT DO NOTHING;
