import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);

      if (userData) {
        const userData = await authService.getCurrentUser();

        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto w-full max-w-md bg-white rounded-lg shadow-sm p-8 sm:p-10 border border-gray-200`}
      >
        <div className="mb-8 flex justify-center">
          <span className="inline-block w-full max-w-[70px]">
            <Logo width="100%" />
          </span>
        </div>

        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Create your account
        </h2>

        <p className="mt-1.5 text-center text-sm sm:text-base text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-gray-900 hover:text-gray-700 underline underline-offset-2 transition-colors"
          >
            Sign in
          </Link>
        </p>
        {error && (
          <p className="text-red-700 mt-6 text-center bg-red-50 py-2.5 px-4 rounded-md text-sm border border-red-100">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit(create)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              Create account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
