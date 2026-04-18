-- One Life Fitness – Leads table
-- Run this in your Supabase SQL editor

CREATE TABLE IF NOT EXISTS leads (
  id               uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  chat_id          text        UNIQUE NOT NULL,          -- WhatsApp chat ID (dedup key)
  name             text,
  phone            text,
  goal             text,
  level            text,
  obstacle         text,
  timeline         text,
  lead_priority    text,                                 -- 'hot' | 'warm'
  source           text,
  date             timestamptz,                          -- form submission timestamp
  status           text        DEFAULT 'new',            -- new | contacted | replied | booked | no_show | cold
  first_contact    timestamptz,
  follow_up_count  integer     DEFAULT 0,
  last_follow_up   timestamptz,
  last_reply_time  timestamptz,
  booking_time     timestamptz,
  showed_up        text,                                 -- 'yes' | 'no'
  booked           boolean     DEFAULT false,
  reminder_24h     boolean     DEFAULT false,
  reminder_2h      boolean     DEFAULT false,
  reminder_30m     boolean     DEFAULT false,
  created_at       timestamptz DEFAULT now(),
  updated_at       timestamptz DEFAULT now()
);

-- Auto-update updated_at on every row change
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Row Level Security (service role key bypasses this, anon key respects it)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Full access for service role (used by n8n)
CREATE POLICY "service_role_all" ON leads
  USING (true)
  WITH CHECK (true);
