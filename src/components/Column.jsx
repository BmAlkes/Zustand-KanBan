import { useStore } from "../store";
import "./Column.css";
import { Task } from "./Task";
// eslint-disable-next-line react/prop-types
export const Column = ({ state }) => {
  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );

  return (
    <div className="column">
      <p>{state}</p>
      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
    </div>
  );
};
