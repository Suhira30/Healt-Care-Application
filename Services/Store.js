// store.js
import { create } from 'zustand';

export const usePointStore = create((set) => ({
  points: 0, // Initial points
  incrementPoints: () => set((state) => ({ points: state.points + 1 })), // Increase by 1
  decrementPoints: () => set((state) => ({ points: state.points - 5 })), // Decrease by 5
}));
