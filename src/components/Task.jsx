import classNames from "classnames";
import "./Task.css";
import { useStore } from "../store";
import { BsTrash } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
export const Task = ({ title }) => {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );
  const deleteTask = useStore((store) => store.deleteTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);

  return (
    <div
      className="task"
      draggable
      onDragStart={() => setDraggedTask(task.title)}
    >
      <div>{task.title}</div>
      <div className="bottomWrapper">
        <div>
          <BsTrash
            onClick={() => deleteTask(task.title)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </div>
  );
};
