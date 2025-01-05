export interface EcoTip {
  id: string;
  title: string;
  description: string;
  category: 'water' | 'energy' | 'waste' | 'transport';
  difficulty: 'easy' | 'medium' | 'hard';
  impact: number; // 1-5 scale
  imageUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
  imageUrl: string;
}

export interface UserGoal {
  id: string;
  userId: string;
  type: 'water' | 'energy' | 'waste';
  target: number;
  current: number;
  unit: string;
  startDate: string;
  endDate: string;
}