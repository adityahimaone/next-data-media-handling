import React, { useState } from "react";
import Link from "next/link";
import ButtonPrimary from "@/components/UI/Button/ButtonPrimary";
import { useForm } from "react-hook-form";
import Alert from "@/components/UI/Alert/Alert";
import styles from "@/styles/auth/register.module.css";
import { apiFetch } from "@/utils/helpers/apifetch.helpers";
import classNames from "classnames";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const cx = classNames([
    "hidden lg:block lg:w-[65%]",
    styles["background-image-login"],
  ]);

  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerFailed, setRegisterFailed] = useState("");

  const onSubmit = (payload) => {
    apiFetch
      .post("/customer/auth/register", payload)
      .then((res) => {
        if (res.data?.id !== null || undefined) {
          setRegisterSuccess(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setRegisterSuccess(false);
      });
  };
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen mx-auto">
      {registerSuccess && (
        <Alert
          title="Registration Success"
          text="You can continue to login"
          navigation="/login"
          confirmText="Go To Login"
        />
      )}
      <div className={cx}></div>
      <div className="w-full lg:w-[35%]  flex flex-col justify-center items-center">
        <div className="w-full p-10">
          <h1 className="text-2xl text-left font-bold my-5">
            Create New Account
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col space-y-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Contoh : jhondoe@gmail.com"
                className="input-form"
                {...register("email")}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="6+ Karakter"
                className="input-form"
                {...register("password")}
              />
            </div>
            <div className="flex flex-col py-3">
              <ButtonPrimary type="submit">Sign Up</ButtonPrimary>
              <div className="inline-flex space-x-1 text-md">
                <p>Already Have an account? </p>
                <Link href="/login" className="hover:text-primaryDarkBlue-400">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
