import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { addList } from "../store";
import { close } from "../store";
import { toast } from "react-hot-toast";

export function CreateList() {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data: FieldValues) => {
    if (projectId) {
      dispatch(addList({ name: data.name, projectId: projectId }));
      toast.success("List added successfully! Note you can only add 4 lists!");
    }
    dispatch(close());
  };

  return (
    <div className="w-96 flex flex-col items-center">
      <h2 className="font-bold text-2xl">Create List</h2>
      <form className="w-full" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="w-full flex flex-col mt-3">
          <label className="text-gray-500 font-semibold text-lg">Title</label>
          <input
            type="text"
            className="text-md outline-none rounded-md px-2 py-1 border-2"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "The name should be atleast 10 chars",
              },
            })}
          />
          {errors.name && typeof errors.name.message === "string" && (
            <p className="text-red-500">{errors.name.message}</p>
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
