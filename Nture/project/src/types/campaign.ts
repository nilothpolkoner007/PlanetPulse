export type CampaignStatus = 'draft' | 'active' | 'completed' | 'cancelled';

export interface Campaign {
  id: string;
  title: string;
  description?: string;
  location: string;
  targetTrees: number;
  plantedTrees: number;
  startDate: string;
  endDate: string;
  status: CampaignStatus;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCampaignData {
  title: string;
  description?: string;
  location: string;
  targetTrees: number;
  startDate: string;
  endDate: string;
}

export interface UpdateCampaignData extends Partial<CreateCampaignData> {
  status?: CampaignStatus;
  plantedTrees?: number;
}