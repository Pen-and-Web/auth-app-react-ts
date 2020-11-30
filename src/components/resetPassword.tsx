import React, { useState } from "react";
import { Link } from "react-router-dom";
import { reset } from "../http/httpService";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleReset() {
    var data = {
      password: password,
      email: email
    };
    reset(data)
      .then(res => {
        alert(res.data.message);
        window.location.replace("/register");
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
      <form>
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
          <input
            name="password"
            value={password}
            onChange={e => handleChange(e)}
            type="password"
            className="form-control"
            required
          />
          <input type="password" className="form-control" />
        </div>
        <Link to="/register" className="btn btn-primary">
          Home
        </Link>
        <button onClick={handleReset} className="btn btn-primary">
          Reset
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
