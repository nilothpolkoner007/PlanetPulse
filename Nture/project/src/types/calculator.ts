export interface PlasticItem {
  id: string;
  name: string;
  category: 'disposable' | 'packaging' | 'household';
  weightGrams: number;
  co2PerUnit: number;
}

export interface UserLog {
  date: string;
  items: Array<{
    itemId: string;
    quantity: number;
  }>;
}