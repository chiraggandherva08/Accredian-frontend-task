import React from "react";
import "./style.css";

const Login = () => {
  return (
    <React.Fragment>
      <form action="" id="login-form">
        <h3>Login</h3>
        <label htmlFor="email-username">Enter username / email</label>
        <input id="email-username" type="text" placeholder="Email / Username" required />

        <label htmlFor="password">Enter password</label>
        <input id="password" type="password" placeholder="Password" required />

        <button id="submit">Login</button>

        <hr
          style={{
            width: "100%",
            marginTop: "20px",
            marginBottom: "20px",
            borderColor: "rgba(0, 0, 0, 0.1)",
          }}
        />

        <span>
          or{" "}
          <a
            href="/signup"
            style={{
              color: "black",
            }}
          >
            signup instead
          </a>
        </span>
      </form>
    </React.Fragment>
  );
};

export default Login;
