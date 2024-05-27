import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginSection = () => {
  const schema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Invalid email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Perform login action
  };

  return (
    <section className="">
      <div className="max-w-md mx-auto border-primary rounded-3xl p-6 border-8">
        <h2 className="text-2xl font-bold text-center text-primary">
          Welcome Back
        </h2>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              className={`w-full p-2  border rounded ${
                errors.email ? "border-red-500" : "border-primary"
              } `}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Wrong username</p>
            )}
            <input
              type="password"
              placeholder="Password"
              className={`w-full p-2  border rounded ${
                errors.password ? "border-red-500" : "border-primary"
              } `}
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">Wrong password</p>
            )}
          </div>
          <div className="text-right">
            <a href="#" className="text-primary text-sm">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 my-4 bg-primary text-white rounded bg-primary"
          >
            Log In
          </button>
          <div className="text-center mt-4 flex justify-around">
            <p className="text-gray-500 text-sm">Don't have an account?</p>
            <a href="#" className="text-primary text-sm">
              Create One
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginSection;
