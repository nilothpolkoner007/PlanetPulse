declare module '@supabase/supabase-js' {
  // Add your type declarations here
export type Database = {
  campaigns: {
    id: string;
    name: string;
    location: string;
    trees_planted: number;
    start_date: string;
    end_date: string;
    status: 'active' | 'completed' | 'upcoming';
  }[];
  users: {
    id: string;
    name: string;
    email: string;
    trees_planted: number;
    total_donations: number;
    last_active: string;
    status: 'active' | 'inactive' | 'banned';
  }[];
  trees: {
    id: string;
    name: string;
    location: string;
    species: string;
    planted_at: string;
    status: 'healthy' | 'sick' | 'dead';
  }[];
  donations: {
    id: string;
    user_id: string;
    campaign_id: string;
    amount: number;
    created_at: string;
  }[];
};
}