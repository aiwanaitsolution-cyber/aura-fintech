# Lead Database And Email Setup

The website form API is ready for Supabase database storage and Resend email notifications.

## Supabase

1. Create a free Supabase project.
2. Open SQL Editor and run:

```sql
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  kind text not null,
  full_name text not null,
  mobile text not null,
  email text not null,
  loan_product text,
  amount numeric,
  income numeric,
  employment_type text,
  existing_emi numeric,
  city text,
  pin_code text,
  contact_time text,
  enquiry text,
  source_path text,
  submitted_at timestamptz,
  raw_payload jsonb not null
);
```

3. Copy these values from Supabase:
   - Project URL
   - Service role key

## Resend

1. Create a free Resend account.
2. Add and verify `aurafintecservices.com`.
3. Create an API key.

## Vercel Environment Variables

Add these in Vercel Project Settings > Environment Variables:

```env
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY
RESEND_API_KEY=re_YOUR_KEY
LEAD_NOTIFY_EMAIL=info@aurafintecservices.com
LEAD_FROM_EMAIL=Aura Fintec Services <leads@aurafintecservices.com>
```

After saving environment variables, redeploy the project on Vercel.
