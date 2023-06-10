import { create } from "zustand";
import { v4 as uuidV4 } from "uuid";

export type ScrapeField = {
  id: string;
  name: string;
  description: string;
};

type ESState = {
  url: string;
  fields: ScrapeField[];
  addField: (field: ScrapeField) => void;
  addEmptyField: () => void;
  removeField: (id: string) => void;
  getField: (id: string) => ScrapeField | undefined;
  updateField: (field: ScrapeField) => void;
};

export const useStore = create<ESState>((set, get) => ({
  url: "",
  fields: [
    { id: "1", name: "Test", description: "Yo" },
    { id: "2", name: "Test2", description: "Yo2" },
  ],
  addField: (field) => set({ fields: [...get().fields, field] }),
  addEmptyField: () => {
    get().addField({ id: uuidV4(), name: "", description: "" });
  },
  removeField: (id) => {
    if (get().fields.length <= 1) return;
    set({ fields: get().fields.filter((f) => f.id !== id) });
  },
  getField: (id) => get().fields.filter((f) => f.id === id)[0],
  updateField: (field) =>
    set({
      fields: get().fields.map((f) => {
        if (f.id !== field.id) return f;
        return field;
      }),
    }),
}));
