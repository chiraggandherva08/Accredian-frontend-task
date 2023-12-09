import React from "react";
import "./style.css";

const Signup = () => {
  return (
    <React.Fragment>
      <form action="" id="signup-form">
        <h3>Signup</h3>
        <label htmlFor="username">Enter username</label>
        <input id="username" type="text" placeholder="Username" required />

        <label htmlFor="email">Enter email</label>
        <input id="email" type="text" placeholder="Email" required />

        <label htmlFor="password">Enter password</label>
        <input id="password" type="password" placeholder="Password" required />

        <label htmlFor="re-password">Re-Enter password</label>
        <input id="re-password" type="password" placeholder="Re-Enter Password" required />

        <button id="submit">Signup</button>

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
            href="/"
            style={{
              color: "black",
            }}
          >
            Login instead
          </a>
        </span>
      </form>
    </React.Fragment>
  );
};

export default Signup;
