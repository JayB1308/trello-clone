import { Link, useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { pathConstants } from "../router/pathConstants";
import { useDispatch } from "react-redux";
import { addUser } from "../store";

export function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const validateConfirmPassword = (value: string) => {
    const password = watch("password");

    return value === password || "Passwords do not match";
  };

  const onSubmitHandler = (data: FieldValues) => {
    dispatch(
      addUser({
        username: data.username,
        email: data.email,
        password: data.password,
      })
    );
    navigate(pathConstants.LOGIN);
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="w-1/4 shadow-md flex flex-col items-center px-3 py-5 rounded-sm">
        <h1 className="text-3xl font-semibold">Register</h1>
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
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username should of length 3 atleast",
                },
              })}
            />
            {errors.username && typeof errors.username.message === "string" && (
              <p className="text-red-500 text-xs">{errors.username.message}</p>
            )}
          </div>
          <div className="w-full flex flex-col mt-2">
            <label className="text-gray-500 font-semibold text-lg">Email</label>
            <input
              type="email"
              className="text-md outline-none rounded-md px-2 py-1 border-2"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && typeof errors.email.message === "string" && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
          <div className="w-full flex flex-col mt-2">
            <label className="text-gray-500 font-semibold text-lg">
              Password
            </label>
            <div className="flex w-full items-center justify-between rounded-md border-2 py-1 px-2">
              <input
                type={showPassword ? "text" : "password"}
                className="text-md outline-none border-r-2 w-[90%]"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password should be of length 6 atleast.",
                  },
                })}
              />
              {showPassword ? (
                <FaEyeSlash size={18} onClick={() => setShowPassword(false)} />
              ) : (
                <FaEye size={18} onClick={() => setShowPassword(true)} />
              )}
            </div>
            {errors.password && typeof errors.password.message === "string" && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>
          <div className="w-full flex flex-col mt-2">
            <label className="text-gray-500 font-semibold text-lg">
              Confirm Password
            </label>
            <div className="flex w-full items-center justify-between rounded-md border-2 py-1 px-2">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="text-md outline-none border-r-2 w-[90%]"
                {...register("confirmPassword", {
                  required: "Please rewrite the password",
                  validate: validateConfirmPassword,
                })}
              />
              {showConfirmPassword ? (
                <FaEyeSlash
                  size={18}
                  onClick={() => setShowConfirmPassword(false)}
                />
              ) : (
                <FaEye size={18} onClick={() => setShowConfirmPassword(true)} />
              )}
            </div>
            {errors.confirmPassword &&
              typeof errors.confirmPassword.message === "string" && (
                <p className="text-red-500 text-xs">
                  {errors.confirmPassword.message}
                </p>
              )}
          </div>
          <button
            type="submit"
            className="w-1/3 border-2 border-blue-600 text-blue-600 font-bold rounded-full mt-2"
          >
            Submit
          </button>
        </form>
        <p className="mt-2 text-xs">
          Already Have An Account?{" "}
          <Link
            to={pathConstants.LOGIN}
            className="text-blue-600 underline font-semibold"
          >
            Login In.
          </Link>
        </p>
      </div>
    </div>
  );
}
