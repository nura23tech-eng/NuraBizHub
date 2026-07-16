create table businesses (

id uuid primary key default gen_random_uuid(),

name text not null,

owner text,

created_at timestamp default now()

);


create table sales (

id uuid primary key default gen_random_uuid(),

business_id uuid references businesses(id),

amount numeric,

created_at timestamp default now()

);


create table expenses (

id uuid primary key default gen_random_uuid(),

business_id uuid references businesses(id),

amount numeric,

created_at timestamp default now()

);


create table customers (

id uuid primary key default gen_random_uuid(),

business_id uuid references businesses(id),

name text,

phone text

);
