export interface Stats {
  treesPlanted: number;
  pollutionReduced: number;
  plasticAvoided: number;
}

export interface Tip {
  id: string;
  category: 'Home' | 'Office' | 'Travel' | 'Events';
  title: string;
  description: string;
}

export interface Campaign {
  id: string;
  title: string;
  location: string;
  treesPlanted: number;
  status: 'ongoing' | 'completed';
  coordinates: [number, number];
}