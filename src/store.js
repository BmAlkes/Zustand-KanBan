import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
// eslint-disable-next-line no-unused-vars
const store = (set) => ({
  tasks: [{ title: "TestTask", state: "DONE" }],
  addTask: (title, state) =>
    set(
      (store) => ({ tasks: [...store.tasks, { title, state }] }),
      false,
      "addTask"
    ),
  deleteTask: (title) =>
    set(
      (store) => ({
        tasks: store.tasks.filter((task) => task.title !== title),
      }),
      false,
      "deleteTask"
    ),
  setDraggedTask: (title) => set({ draggedTask: title }),
  moveTask: (title, state) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { title, state } : task
      ),
    })),
});

const log = (config) => (set, get, api) =>
  config(
    (...args) => {
      console.log(args);
      set(...args);
    },
    get,
    api
  );

export const useStore = create(
  subscribeWithSelector(log(persist(devtools(store), { name: "store" })))
);
