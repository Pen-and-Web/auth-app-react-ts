import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../http/httpService";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleLogin() {
    var data = {
      password: password,
      email: email
    };
    loginUser(data)
      .then(res => {
        window.localStorage.setItem("username", res.data.username);
        window.localStorage.setItem("email", res.data.email);
        window.location.replace("/");
      })
      .catch(err => alert(err));
  }

  function handleChange(e) {
    e.preventDefault();
    console.log(e.target.name);
    switch (e.target.name) {
      case "password":
        setPassword(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      default:
        console.log("no case");
    }
  }
  return (
    <div className="container-sm">
      <div className="form-group">
        <label>Email address</label>
        <input
          name="email"
          value={email}
          onChange={e => handleChange(e)}
          type="email"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          name="password"
          value={password}
          onChange={e => handleChange(e)}
          type="password"
          className="form-control"
          required
        />
      </div>
      <Link to="/register" className="btn btn-primary">
        Register
      </Link>
      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
      <Link to="/forget" className="btn btn-primary">
        Forget Password?
      </Link>
    </div>
  );
}

export default Login;
