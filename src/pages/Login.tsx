import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { pathConstants } from "../router/pathConstants";

export function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="w-1/4 shadow-md flex flex-col items-center px-3 py-5 rounded-sm">
        <h1 className="text-3xl font-semibold">Login</h1>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="w-full px-1 flex flex-col items-center mt-5"
        >
          <div className="w-full flex flex-col">
            <label className="text-gray-500 font-semibold text-lg">
              Username
            </label>
            <input
              type="text"
              className="text-md outline-none rounded-md px-2 py-1 border-2"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && typeof errors.username.message === "string" && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="w-full flex flex-col mt-5">
            <label className="text-gray-500 font-semibold text-lg">
              Password
            </label>
            <div className="flex w-full items-center justify-between rounded-md border-2 py-1 px-2">
              <input
                type={showPassword ? "text" : "password"}
                className="text-md outline-none border-r-2 w-[90%]"
                {...register("password", { required: "Password is required" })}
              />
              {showPassword ? (
                <FaEyeSlash size={18} onClick={() => setShowPassword(false)} />
              ) : (
                <FaEye size={18} onClick={() => setShowPassword(true)} />
              )}
            </div>
            {errors.password && typeof errors.password.message === "string" && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-1/3 border-2 border-blue-600 text-blue-600 font-bold rounded-full mt-5"
          >
            Submit
          </button>
        </form>
        <p className="mt-4 text-xs">
          Don't Have An Account?{" "}
          <Link
            to={pathConstants.REGISTER}
            className="text-blue-600 underline font-semibold"
          >
            {" "}
            Create One.
          </Link>
        </p>
      </div>
    </div>
  );
}
