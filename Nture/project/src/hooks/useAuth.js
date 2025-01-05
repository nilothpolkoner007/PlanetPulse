import { create } from 'zustand';
import { getCurrentUser, signIn, signOut } from '../lib/auth';

export const useAuth = create((set) => ({
  user: null,
  loading: false,
  error: null,
  initialized: false,

  initialize: async () => {
    try {
      set({ loading: true });
      const user = await getCurrentUser();
      set({ user, initialized: true });
    } catch (error) {
      set({ error: error });
    } finally {
      set({ loading: false });
    }
  },

  signIn: async (email, password) => {
    try {
      set({ loading: true, error: null });
      await signIn(email, password);
      const user = await getCurrentUser();
      set({ user });
    } catch (error) {
      set({ error: error });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  signOut: async () => {
    try {
      set({ loading: true, error: null });
      await signOut();
      set({ user: null });
    } catch (error) {
      set({ error: error });
      throw error;
    } finally {
      set({ loading: false });
    }
  },
}));
