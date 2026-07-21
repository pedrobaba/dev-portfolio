/*
# Create contact_messages table (single-tenant, no auth)

1. Purpose
- Stores messages submitted through the portfolio's "Contact" form.
- This is a public portfolio with no sign-in screen, so the anon-key client
  must be able to INSERT rows. Reads are restricted to the service role
  (dashboard / owner) — anon cannot read messages.

2. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email
  - `message` (text, not null) — the message body
  - `read` (boolean, default false) — owner-side flag for inbox triage
  - `created_at` (timestamptz, default now())

3. Security
- Enable RLS on `contact_messages`.
- INSERT: allow `anon, authenticated` so the public contact form can submit.
- SELECT / UPDATE / DELETE: no policies — only the service role can read or
  manage messages. The anon client cannot read other people's submissions.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);
