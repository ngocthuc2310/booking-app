import "./styleHe/styleTopHe.css";
import React, { useRef } from "react";
import { Button3 } from "../UI/Button/Button";
import Navbar from "./Navbar";
import { signup, logint } from "../../linkAPI/linkAPI.js";
import { useNavigate } from "react-router-dom";
const { appContext } = require("../../store/appContext.js");

function TopHe() {
  const { getState, setState } = React.useContext(appContext);
  const nv = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#003580",
        padding: "5px",
      }}
    >
      <div>
        <h4 style={{ float: "left", color: "white", margin: "10px" }}>
          Booking Website
        </h4>
        {!getState().isLogin ? (
          <>
            <Button3
              onClick={(e) => {
                e.preventDefault();
                setState((x) => {
                  x.showLogin = "login";
                });
              }}
              style={{ float: "right", margin: "10px" }}
            >
              Login
            </Button3>
            ,
            <Button3
              style={{ float: "right", margin: "10px" }}
              onClick={(e) => {
                e.preventDefault();
                setState((x) => {
                  x.showSignUp = "login";
                });
              }}
            >
              Register
            </Button3>
          </>
        ) : (
          <>
            <button
              style={{ float: "right", margin: "10px", padding: "8px" }}
              onClick={(e) => {
                e.preventDefault();
                setState((x) => {
                  x.isLogin = false;
                });
              }}
            >
              Logout
            </button>
            <button
              style={{ float: "right", margin: "10px", padding: "8px" }}
              onClick={(e) => {
                e.preventDefault();
                nv("/transaction");
              }}
            >
              Transaction
            </button>
          </>
        )}
      </div>
      <Login />
      <Signup />
      <Navbar />
    </div>
  );
}
export default TopHe;

function Login() {
  const { getState, setState } = React.useContext(appContext);
  const refEmail = useRef("");
  const refPass = useRef("");

  function login() {
    fetch(logint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: refEmail.current.value,
        passWord: refPass.current.value,
      }),
    })
      .then((x) => x.json())
      .then((y) => {
        alert(y.msg);
        refEmail.current.value = "";
        refPass.current.value = "";
        if (y.user) {
          setState((x) => {
            x.isLogin = true;
            x.showLogin = "hidden";
            x.email = y.user.email;
            x.userId = y.user._id;
          });
        } else
          setState((x) => {
            x.showLogin = "hidden";
          });
      })
      .catch((er) => {
        alert(er.message);
        setState((x) => {
          x.showLogin = "hidden";
        });
      });
  }
  return (
    <div className={getState().showLogin}>
      <h1>Login</h1>
      <div>
        <span>Email</span>
        <input type="text" ref={refEmail} />
      </div>
      <div>
        <span>PassWord</span>
        <input type="password" ref={refPass} />
      </div>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            login();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

function Signup() {
  const refEmail = useRef("");
  const refPass = useRef("");
  const { getState, setState } = React.useContext(appContext);
  function signUp() {
    fetch(signup, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: refEmail.current.value,
        passWord: refPass.current.value,
      }),
    })
      .then((x) => x.json())
      .then((y) => {
        alert(y.msg);
        refEmail.current.value = "";
        refPass.current.value = "";
        setState((x) => {
          x.showSignUp = "hidden";
        });
      })
      .catch((er) => {
        alert(er.message);
        setState((x) => {
          x.showSignUp = "hidden";
        });
      });
  }
  return (
    <div className={getState().showSignUp}>
      <h1>Sign Up</h1>
      <div>
        <span>Email</span>
        <input type="text" ref={refEmail} />
      </div>
      <div>
        <span>PassWord</span>
        <input type="password" ref={refPass} />
      </div>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            signUp();
          }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
