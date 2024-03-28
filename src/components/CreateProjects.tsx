import { useDispatch } from "react-redux";
import { addProject, close } from "../store";
import { FieldValues, useForm } from "react-hook-form";

export function CreateProject() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data: FieldValues) => {
    dispatch(addProject({ title: data.title, description: data.description }));
    dispatch(close());
  };

  return (
    <div className="w-96 flex flex-col items-center">
      <h2 className="font-bold text-2xl">Create Project</h2>
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
            })}
          />
          {errors.title && typeof errors.title.message === "string" && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div className="w-full flex flex-col">
          <label className="text-gray-500 font-semibold text-lg">
            Description
          </label>
          <input
            type="text"
            className="text-md outline-none rounded-md px-2 py-1 border-2"
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "The title should be atleast 10 chars",
              },
              maxLength: {
                value: 100,
                message: "Character limit of 250 exceeded",
              },
            })}
          />
          {errors.description &&
            typeof errors.description.message === "string" && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
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
