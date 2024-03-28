import { useDispatch } from "react-redux";
import { FieldValues, useForm } from "react-hook-form";
import { addTask } from "../store";
import { close } from "../store";

interface CreateTaskProps {
  listId: string;
}

export function CreateTask({ listId }: CreateTaskProps) {
  console.log(listId);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data: FieldValues) => {
    dispatch(
      addTask({
        title: data.title,
        description: data.description,
        assignedUser: data.assigned,
        dueDate: data.dueDate,
        listId: listId,
      })
    );
    dispatch(close());
  };

  return (
    <div className="w-96 flex flex-col items-center">
      <h2 className="font-bold text-2xl">Create Task</h2>
      <form className="w-full" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="w-full flex flex-col mt-3">
          <label className="text-gray-500 font-semibold text-lg">Title</label>
          <input
            type="text"
            className="text-md outline-none rounded-md px-2 py-1 border-2"
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 3,
                message: "The title should be atleast 10 chars",
              },
              maxLength: {
                value: 50,
                message: "Character Limit Exceeded (50 characters)",
              },
            })}
          />
          {errors.title && typeof errors.title.message === "string" && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div className="w-full flex flex-col mt-3">
          <label className="text-gray-500 font-semibold text-lg">
            Description
          </label>
          <input
            type="text"
            className="text-md outline-none rounded-md px-2 py-1 border-2"
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 3,
                message: "The name should be atleast 10 chars",
              },
              maxLength: {
                value: 100,
                message: "Character Limit Exceeded (100 characters)",
              },
            })}
          />
          {errors.description &&
            typeof errors.description.message === "string" && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
        </div>
        <div className="w-full flex flex-col mt-3">
          <label className="text-gray-500 font-semibold text-lg">
            Assigned User
          </label>
          <input
            type="text"
            className="text-md outline-none rounded-md px-2 py-1 border-2"
            {...register("assigned", { required: false })}
          />
        </div>
        <div className="w-full flex flex-col mt-3">
          <label className="text-gray-500 font-semibold text-lg">
            Due Date
          </label>
          <input
            type="date"
            className="text-md outline-none rounded-md px-2 py-1 border-2"
            {...register("dueDate", { required: false })}
          />
        </div>
        <button
          type="submit"
          className="w-full mt-5 bg-blue-600 text-white text-lg font-semibold rounded-md py-1"
        >
          Create
        </button>
      </form>
    </div>
  );
}
