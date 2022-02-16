import React, { useState } from "react";
import firebase from "firebase";
import "./Login.css";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function Login() {
  let history = useHistory()
  const notify = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        toast.success("Login Successfully");
        history.push("/");
      })
      .catch((err) => {
        toast.error("Register First ");
      });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(firebase.auth());
  const signInHandler = () => {};
  return (
    <div>
    <div className="row offset-0">
    <div className="col">
   </div>
   </div>
      <div autoComplete="">
        <div className=" mt-5  " id="LoginForm">
          <div className="row ">
            <div className=" col-5 offset-4 ">
              <h3 className="admin mt-5">Login</h3>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-controls mt-3 " id="inputs"
                placeholder="Email address"
              ></input>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-controls mt-2 pt-2" id="inputs"
                placeholder="Password"
              />{" "}
              <div className="Checkbox mt-2">
                {/* <input type="checkbox"></input> <b>Remember me</b> */}
              </div>
              <div className="ms-4">
                {" "}
                <button
                  onClick={(signInHandler, notify)}

                  // onClick = {()=> history.push("/")}
                  
                  className="btn btn-primary mt-4"
                  id="button"
                >
                  Login
                </button>{" "}
               
              </div>
              <br />
            </div>

            <div className></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
