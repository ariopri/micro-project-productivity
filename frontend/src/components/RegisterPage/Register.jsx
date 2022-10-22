import React from "react";

const Register = () => {
  return (
    <div>
      <div className="limiter">
        <div
          className="container-login100"
          style={{ backgroundImage: 'url("images/bg-01.jpg")' }}
        >
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-49">Register</span>
              {<div style={{ marginBottom: "10px", color: "red" }}></div>}
              {<div style={{ marginBottom: "10px", color: "green" }}></div>}
              <div className="wrap-input100 validate-input ">
                <span className="label-input100">Username</span>
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="Type your username"
                />
                <span className="focus-input100" data-symbol="" />
              </div>
              <div className="wrap-input100 validate-input m-b-23">
                <span className="label-input100">Email</span>
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Type your email"
                />
                <span className="focus-input100" data-symbol="" />
              </div>
              <div className="wrap-input100 validate-input">
                <span className="label-input100">Password</span>
                <input
                  className="input100"
                  type="password"
                  name="password"
                  placeholder="Type your password"
                />
                <span className="focus-input100" data-symbol="" />
              </div>
              <div className="text-right p-t-8 p-b-31">
                <a href="#">Forgot password?</a>
              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button className="login100-form-btn">Register</button>
                </div>
              </div>
              <div className="txt1 text-center p-t-54 p-b-20">
                <span>Or Sign Up Using</span>
              </div>
              <div className="flex-c-m">
                <a href="#" className="login100-social-item bg1">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#" className="login100-social-item bg2">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#" className="login100-social-item bg3">
                  <i className="fa fa-google" />
                </a>
              </div>
              <div className="txt1 text-center p-t-54 p-b-20">
                <span>
                    Already have an account? <a href="/login">Login</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="dropDownSelect1" />
    </div>
  );
};

export default Register;
