import classNames from "classnames";
import "./Task.css";
import { useStore } from "../store";

// eslint-disable-next-line react/prop-types
export const Task = ({ title }) => {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );
  console.log(task.title);
  return (
    <div className="task">
      <div>{task.title}</div>
      <div className="bottomWrapper">
        <div></div>
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </div>
  );
};
