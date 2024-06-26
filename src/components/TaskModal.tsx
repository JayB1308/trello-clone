import { Task } from "../core/types/task.type";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import dayjs from "dayjs";

interface TaskModalProps {
  task: Task;
}

export function TaskModal({ task }: TaskModalProps) {
  return (
    <div className="flex min-w-[300px] flex-col items-center px-1 py-1">
      <h1 className="text-3xl font-bold">{task.title}</h1>
      <div className="flex items-center justify-between w-full gap-4 mt-3 border-2 px-2 py-1 rounded-md">
        <FaRegUserCircle size={24} />
        {task.assignedUser ? (
          task.assignedUser
        ) : (
          <span className="font-bold text-xs">No user assigned</span>
        )}
      </div>
      <div className="flex items-center justify-between w-full gap-4 mt-3 border-2 px-2 py-1 rounded-md">
        <FaRegCalendar size={24} />
        {task.dueDate ? (
          <span className="font-bold text-sm">
            {dayjs(task.dueDate).format("DD/MM")}
          </span>
        ) : (
          <span className="font-bold text-xs">No due date</span>
        )}
      </div>
      <div className="flex w-full items-center justify-between mt-3 px-1">
        <h6 className="font-semibold bg-blue-900 rounded-full px-2 text-white text-xs">
          Description
        </h6>
        <p className="text-xs text-wrap">{task.description}</p>
      </div>
    </div>
  );
}
