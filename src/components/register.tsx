import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../http/httpService";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [secretAnswer, setSecretAnswer] = useState("");

  function handleRegister() {
    var data = {
      username: username,
      password: password,
      email: email,
      secret_answer: secretAnswer
    };
    registerUser(data)
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
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "secretAnswer":
        setSecretAnswer(e.target.value);
        break;
      default:
        console.log("no case");
    }
  }

  return (
    <div className="container-sm">
      <div className="form-group">
        <label>Username</label>
        <input
          name="username"
          value={username}
          onChange={e => handleChange(e)}
          type="text"
          className="form-control"
          required
        />
      </div>
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
        <small className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
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
      <div className="form-group">
        <label>
          Sample secret question which is used for password resetting?
        </label>
        <input
          name="secretAnswer"
          value={secretAnswer}
          onChange={e => handleChange(e)}
          type="text"
          className="form-control"
          required
        />
      </div>
      <button onClick={handleRegister} className="btn btn-primary">
        Register
      </button>
      <Link to="/login" className="btn btn-primary">
        Login
      </Link>
    </div>
  );
}
export default Register;
