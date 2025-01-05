import { supabase } from './supabase';
import { AdminUser, AdminRole } from '../types/admin';

export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: adminUser } = await supabase
    .from('admin_users')
    .select(
      `
      *,
      role:admin_roles (
        name,
        permissions
      )
    `,
    )
    .eq('id', user.id)
    .single();

  return adminUser;
}

export function checkPermission(user, resource, action) {
  if (!user?.role?.permissions) return false;

  const permissions = user.role.permissions[resource] || [];
  return permissions.includes(action);
}
