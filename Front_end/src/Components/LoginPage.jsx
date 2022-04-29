import React from "react";
import login_logo from "../Images/login_logo.png";
import login_logo_removebg from "../Images/login_logo_removebg.png";
const LoginPage = () => {
  return (
    <div className="Login_main_container">
      {/* <button className="Close_btn  close">X</button> */}
      <div className="Login_container">
        <div className="Form_logo_side">
          <h1 className="login">Login</h1>
          <p className="paragrph">
            Get access to your <br></br> Orders, Wishlist and <br />{" "}
            Recommendations
          </p>
          <div className="login_logo">
            <img src={login_logo} alt="" />
          </div>
        </div>
        <div className="Form_side">
          <div class="form-floating mb-3 login_item_border">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Enter Email/Mobile number</label>
          </div>
          <div class="form-floating mb-3 login_item_border">
            <input
              type="password"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Enter Password </label>{" "}
            <span>forgot?</span>
          </div>

          <div className="login_item">
            <small className="login_above_text">
              By continuing, you agree to Flipkart's{" "}
              <span className="mid_color">Terms of Use</span> and{" "}
              <span className="mid_color"> Privacy Policy</span>
            </small>
            <button className="login_center size" type="submit">
              Login
            </button>
          </div>
          <br />
          <center className="Or_style">OR</center>

          <div className="login_item ">
            <button className="login_center size different_background">
              Request OTP
            </button>
          </div>
          <div className="login_item">
            <p className="login_center Last_color">
              New to Flipkart? Create an account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
