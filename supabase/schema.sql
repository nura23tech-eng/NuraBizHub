-- NuraBizHub Database Schema

create table businesses (
  id uuid primary key default gen_random_uuid(),
  business_name text not null,
  owner_name text,
  business_type text,
  created_at timestamp with time zone default now()
);

create table transactions (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references businesses(id) on delete cascade,
  type text not null,
  amount numeric not null,
  description text,
  created_at timestamp with time zone default now()
);
