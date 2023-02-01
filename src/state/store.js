import { create } from "zustand";

export const useDrag = create((set) => ({
  drag: null,
  setDrag: (scroll) => set({ drag: scroll }),
}));
