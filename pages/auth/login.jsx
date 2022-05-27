import React, { useEffect, useState } from "react";
import ButtonPrimary from "@/components/UI/Button/ButtonPrimary";
import LoginGoogleOauth from "@/components/elements/GoogleOauth/LoginButton";
// import { gapi } from "gapi-script";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
// import { setAuthLogin } from "@/store/auth/loginSlice";
import { apiFetch } from "@/utils/helpers/apifetch.helpers";
import { useSelector } from "react-redux";
import classNames from "classnames";
import styles from "@/styles/auth/register.module.css";

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const infoUser = useSelector((state) => state.user);
  const [loginFailed, setLoginFailed] = useState("");

  let accessToken = "";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (payload) => {
    apiFetch
      .post("/admin/auth/login", payload)
      .then((res) => {
        // dispatch(setAuthLogin(res.data));
      })
      .catch((err) => {
        setLoginFailed(err.response.data.message);
      });
  };

  //   const start = () => {
  //     gapi.client.init({
  //       clientId: clientId,
  //       script: "",
  //     });
  //     accessToken = gapi.auth2
  //       .getAuthInstance()
  //       .currentUser.get()
  //       .getAuthResponse(true).access_token;
  //   };

  useEffect(() => {
    // gapi.load("client:auth2", start);
  }, []);

  useEffect(() => {
    if (infoUser.role === "admin") {
      navigate("/dashboard");
    }
    if (infoUser.role === "Customer") {
      navigate("/home");
    }
  }, [infoUser]);

  const cx = classNames([
    "hidden lg:block lg:w-[65%]",
    styles["background-image-login"],
  ]);

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen mx-auto">
      <div className={cx}></div>
      <div className="w-full lg:w-[30%]  flex flex-col justify-center items-center">
        <div className="w-full p-10">
          <h1 className="text-2xl text-left font-bold my-5">
            Welcome, Admin BCR
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
            <p>
              {loginFailed !== "" && (
                <span className="text-red-500 text-sm">{loginFailed}</span>
              )}
            </p>
            <div className="flex flex-col space-y-2">
              <ButtonPrimary type="submit">Sign In</ButtonPrimary>
              <LoginGoogleOauth />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
