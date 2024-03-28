import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { ModalLayout } from "../layout/ModalLayout";
import { changeList, open } from "../store";
import { List as ListType } from "../core/types/list.type";
import { Task as TaskType } from "../core/types/task.type";
import { CreateTask } from "./CreateTask";
import { Task } from "./Task";
import { TaskModal } from "./TaskModal";

interface ListProps {
  list: ListType;
}

export function List({ list }: ListProps) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const modalId = useSelector((state) => state.modal.id);
  const allTasks = useSelector((state) => state.task.tasks);

  const [currentTasks, setCurrentTasks] = useState<Array<TaskType>>([]);
  const [openTask, setOpenTask] = useState<TaskType>();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: { task: TaskType }) => {
      if (item.task.listId !== list.id) {
        dispatch(changeList({ taskID: item.task.id, listID: list.id }));
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const getTasks = () => {
    const tasks = allTasks.filter((task: TaskType) => task.listId === list.id);

    setCurrentTasks(tasks);
  };

  useEffect(() => {
    getTasks();
  }, [allTasks]);

  return (
    <div
      ref={drop}
      className="w-1/4 min-h-[250px] border-[0.5] border border-gray-300 border-opacity-75 flex flex-col items-center rounded-md"
    >
      {isOpen && modalId === "create-task" && (
        <ModalLayout>
          <CreateTask listId={list.id} />
        </ModalLayout>
      )}
      {isOpen && openTask && modalId === "open-task" && (
        <ModalLayout>
          <TaskModal task={openTask} />
        </ModalLayout>
      )}
      <div className="w-full flex items-center justify-between px-2 rounded-t-md  border-b-2 border-blue-600 bg-blue-100">
        <h1 className="font-bold text-md">{list.name}</h1>
        <button>
          <IoIosAddCircleOutline
            size={24}
            className="text-blue-500"
            onClick={() => dispatch(open({ id: "create-task" }))}
          />
        </button>
      </div>
      <div className={`px-3 flex flex-col items-center w-full mt-2 `}>
        {currentTasks.map((task) => {
          return <Task key={task.id} task={task} onSelect={setOpenTask} />;
        })}
      </div>
    </div>
  );
}
