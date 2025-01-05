import { supabase } from '../lib/supabase';

export async function getCampaigns() {
  const { data, error } = await supabase
    .from('campaigns')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getCampaign(id) {
  const { data, error } = await supabase.from('campaigns').select('*').eq('id', id).single();

  if (error) throw error;
  return data;
}

export async function createCampaign(campaign) {
  const { data, error } = await supabase.from('campaigns').insert([campaign]).select().single();

  if (error) throw error;
  return data;
}

export async function updateCampaign(id, updates) {
  const { data, error } = await supabase
    .from('campaigns')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}
