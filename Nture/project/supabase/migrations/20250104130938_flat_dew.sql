/*
  # Campaign Management Schema

  1. New Tables
    - `campaigns`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `location` (text)
      - `target_trees` (integer)
      - `planted_trees` (integer)
      - `start_date` (date)
      - `end_date` (date)
      - `status` (enum)
      - `created_by` (uuid, foreign key)
      - Timestamps

  2. Security
    - Enable RLS
    - Add policies for campaign managers and super admins
*/

-- Create campaign status enum
CREATE TYPE campaign_status AS ENUM ('draft', 'active', 'completed', 'cancelled');

-- Create campaigns table
CREATE TABLE IF NOT EXISTS campaigns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  location text NOT NULL,
  target_trees integer NOT NULL DEFAULT 0,
  planted_trees integer NOT NULL DEFAULT 0,
  start_date date NOT NULL,
  end_date date NOT NULL,
  status campaign_status NOT NULL DEFAULT 'draft',
  created_by uuid REFERENCES admin_users(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Campaign managers and super admins can read campaigns"
  ON campaigns
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users au
      JOIN admin_roles ar ON au.role_id = ar.id
      WHERE au.id = auth.uid()
      AND au.active = true
      AND ar.permissions->>'campaigns' ? 'read'
    )
  );

CREATE POLICY "Campaign managers and super admins can insert campaigns"
  ON campaigns
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users au
      JOIN admin_roles ar ON au.role_id = ar.id
      WHERE au.id = auth.uid()
      AND au.active = true
      AND ar.permissions->>'campaigns' ? 'create'
    )
  );

CREATE POLICY "Campaign managers and super admins can update campaigns"
  ON campaigns
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users au
      JOIN admin_roles ar ON au.role_id = ar.id
      WHERE au.id = auth.uid()
      AND au.active = true
      AND ar.permissions->>'campaigns' ? 'update'
    )
  );