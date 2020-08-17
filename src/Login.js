/* eslint-disable no-empty-pattern */
import Button from "@material-ui/core/Button";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://4.bp.blogspot.com/-l2SmGsBI3OY/XodLCtIsMvI/AAAAAAAAAEw/LERAEdlcIHYGtQ3ukpA46Ozm8kp3DZR4QCK4BGAYYCw/s1600/stepphase.png"
          alt=""
        />
        <h1>Sign in to StepPhase HQ</h1>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
