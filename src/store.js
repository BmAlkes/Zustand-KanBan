import { create } from "zustand";
// eslint-disable-next-line no-unused-vars
const store = (set) => ({
  tasks: [{ title: "TestTask", state: "DONE" }],
});

export const useStore = create(store);
