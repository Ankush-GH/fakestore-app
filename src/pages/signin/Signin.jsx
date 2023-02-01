import React from "react";
import SigninForm from "../../ui/signinForm/SigninForm";

import "./Signin.css";

const Signin = () => {
  return (
    <div className="app__signin" style={{"margin": "0 1rem"}}>
      <SigninForm />
    </div>
  );
};

export default Signin;
