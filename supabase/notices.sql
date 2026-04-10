create extension if not exists pgcrypto;

create table if not exists public.notices (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  pinned boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists notices_pinned_updated_idx
  on public.notices (pinned desc, updated_at desc);

alter table public.notices enable row level security;

-- Public read
drop policy if exists "public can read notices" on public.notices;
create policy "public can read notices"
  on public.notices
  for select
  to anon, authenticated
  using (true);

-- Writes are performed by service role in server route handlers.

