import { create } from "zustand";
import { v4 as uuidV4 } from "uuid";

export type ScrapeField = {
  id: string;
  name: string;
  description: string;
};

export type Result = {
  [x: string]: string;
};

type ESState = {
  url: string;
  fields: ScrapeField[];
  result: Result;
  setUrl: (url: string) => void;
  setResult: (data: Result) => void;
  addField: (field: ScrapeField) => void;
  addEmptyField: () => void;
  removeField: (id: string) => void;
  getField: (id: string) => ScrapeField | undefined;
  updateField: (field: ScrapeField) => void;
};

const initialUrl = "https://www.imdb.com/title/tt0120338/";
const initialFields = [
  { id: uuidV4(), name: "movie_name", description: "The name of the movie." },
  {
    id: uuidV4(),
    name: "movie_duration",
    description: "The duration of the movie.",
  },
  {
    id: uuidV4(),
    name: "movie_rating",
    description: "The rating of the movie.",
  },
];

export const useStore = create<ESState>((set, get) => ({
  url: initialUrl,
  fields: initialFields,
  result: {},
  setResult: (data) => set({ result: data }),
  setUrl: (url) => set({ url }),
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
