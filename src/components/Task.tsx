import { SetStateAction } from "react";
import { Task as TaskType } from "../types/Task.type";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { open } from "../store";
import { useDrag } from "react-dnd";

interface TaskProps {
  task: TaskType;
  onSelect: React.Dispatch<SetStateAction<TaskType | undefined>>;
}

export function Task({ task, onSelect }: TaskProps) {
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { task: task },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleTaskSelect = () => {
    onSelect(task);
    dispatch(open({ id: "open-task" }));
  };

  return (
    <div
      ref={drag}
      className={`w-full border-2 ${
        isDragging ? "border-blue-500" : "border-gray-500"
      } rounded-md cursor-pointer mb-2`}
    >
      <h5
        className="font-bold px-2 text-lg underline"
        onClick={handleTaskSelect}
      >
        {task.title}
      </h5>
      <p className="font-light text-sm px-2">{task.description}</p>
      <span className="flex items-center justify-between bg-gray-200 px-1 py-1 mt-1 font-bold text-sm">
        <FaRegUserCircle />
        {task.assignedUser ? task.assignedUser : "No user assigned"}
      </span>
    </div>
  );
}
