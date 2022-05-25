import React from "react";
import { GoogleLogin } from "react-google-login";
import ButtonPrimary from "@/components/UI/Button/ButtonPrimary";
import { useDispatch } from "react-redux";
// import { setAuthGoogleLogin } from "../stores/authLoginSlice";

const clientId =
  "959897734432-vvl2g84djul3vcla8gbsuuu36k6mv8io.apps.googleusercontent.com";

function LoginGoogleOauth() {
  const dispatch = useDispatch();
  const onSuccess = (response) => {
    console.log("Login SUCCESS", response.profileObj);
    console.log("Access SUCCESS", response.accessToken);
    const newPayload = {
      name: response.profileObj.name,
      email: response.profileObj.email,
      access_token: response.accessToken,
    };
    // dispatch(setAuthGoogleLogin(newPayload));
  };

  const onFailure = (response) => console.log("Login FAILURE", response);

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        className="w-full rounded-sm"
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        // isSignedIn={true}
      />
    </div>
  );
}

export default LoginGoogleOauth;
