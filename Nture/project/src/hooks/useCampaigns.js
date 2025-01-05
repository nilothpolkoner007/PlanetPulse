import { create } from 'zustand';
import * as campaignService from '../services/campaignService';

export const useCampaigns = create((set, get) => ({
  campaigns: [],
  loading: false,
  error: null,

  fetchCampaigns: async () => {
    try {
      set({ loading: true, error: null });
      const campaigns = await campaignService.getCampaigns();
      set({ campaigns });
    } catch (error) {
      set({ error: error });
    } finally {
      set({ loading: false });
    }
  },

  createCampaign: async (data) => {
    try {
      set({ loading: true, error: null });
      const newCampaign = await campaignService.createCampaign(data);
      set((state) => ({
        campaigns: [newCampaign, ...state.campaigns],
      }));
    } catch (error) {
      set({ error: error });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  updateCampaign: async (id, data) => {
    try {
      set({ loading: true, error: null });
      const updatedCampaign = await campaignService.updateCampaign(id, data);
      set((state) => ({
        campaigns: state.campaigns.map((c) => (c.id === id ? updatedCampaign : c)),
      }));
    } catch (error) {
      set({ error: error });
      throw error;
    } finally {
      set({ loading: false });
    }
  },
}));
