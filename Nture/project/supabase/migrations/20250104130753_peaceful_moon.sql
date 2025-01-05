/*
  # Admin Authentication and Authorization Schema

  1. New Tables
    - `admin_roles`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `description` (text)
      - `permissions` (jsonb)
    - `admin_users`
      - `id` (uuid, primary key)
      - `role_id` (uuid, foreign key)
      - `email` (text, unique)
      - `full_name` (text)
      - `active` (boolean)
      - `last_login` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for role-based access
*/

-- Create admin roles table
CREATE TABLE IF NOT EXISTS admin_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  description text,
  permissions jsonb NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create admin users table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT auth.uid(),
  role_id uuid REFERENCES admin_roles(id),
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  active boolean DEFAULT true,
  last_login timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES admin_roles(id)
);

-- Enable RLS
ALTER TABLE admin_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Admin users can read roles"
  ON admin_roles
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
      AND admin_users.active = true
    )
  );

CREATE POLICY "Admin users can read other admin users"
  ON admin_users
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
      AND admin_users.active = true
    )
  );

-- Insert default roles
INSERT INTO admin_roles (name, description, permissions) VALUES
  ('super_admin', 'Full system access', '{
    "campaigns": ["create", "read", "update", "delete"],
    "users": ["create", "read", "update", "delete"],
    "blogs": ["create", "read", "update", "delete"],
    "tips": ["create", "read", "update", "delete"],
    "donations": ["read", "export"],
    "analytics": ["read"],
    "feedback": ["read", "respond"]
  }'::jsonb),
  ('campaign_manager', 'Manage campaigns only', '{
    "campaigns": ["create", "read", "update", "delete"]
  }'::jsonb),
  ('content_manager', 'Manage blogs and tips', '{
    "blogs": ["create", "read", "update", "delete"],
    "tips": ["create", "read", "update", "delete"]
  }'::jsonb);