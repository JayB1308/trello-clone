import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { ModalLayout } from "../layout/ModalLayout";
import { changeList, open, removeList } from "../store";
import { List as ListType } from "../core/types/list.type";
import { Task as TaskType } from "../core/types/task.type";
import { CreateTask } from "./CreateTask";
import { Task } from "./Task";
import { TaskModal } from "./TaskModal";
import { MdOutlineDelete } from "react-icons/md";
import { RootState } from "../store/root-state.type";

interface ListProps {
  list: ListType;
}

export function List({ list }: ListProps) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const modalId = useSelector((state: RootState) => state.modal.id);
  const allTasks = useSelector((state: RootState) => state.task.tasks);

  const [currentTasks, setCurrentTasks] = useState<Array<TaskType>>([]);
  const [openTask, setOpenTask] = useState<TaskType>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: { task: TaskType }) => {
      if (item.task.listId !== list.id) {
        //Changing the list ID for a task on dragging
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

  const handleDeleteList = () => {
    dispatch(removeList({ id: list.id }));
  };

  useEffect(() => {
    getTasks();
  }, [allTasks]);

  return (
    <div
      data-testid={list.id}
      ref={drop}
      className="w-1/4 pb-1 border-[0.5] border border-gray-300 border-opacity-75 flex flex-col items-center rounded-md"
      style={{ minHeight: "calc(90vh - 100px)" }}
    >
      {isOpen && modalId === `${list.id}-create-task` && (
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
        <div className="flex items-center gap-1">
          <h1 className="font-bold text-md">{list.name}</h1>
          <MdOutlineDelete
            size={24}
            className="cursor-pointer text-red-600"
            onClick={handleDeleteList}
          />
        </div>
        <button
          className={`${currentTasks.length === 5 ? "opacity-50" : ""}`}
          disabled={currentTasks.length === 5}
        >
          <IoIosAddCircleOutline
            size={24}
            className={`${
              currentTasks.length === 5 ? "text-gray-500" : "text-blue-500"
            }`}
            onClick={() => dispatch(open({ id: `${list.id}-create-task` }))}
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
