import React, { useState } from "react";
import { Link } from "react-router-dom";
import { forget } from "../http/httpService";

function ForgetPassword() {
  const [secretAnswer, setSecretAnswer] = useState("");
  const [email, setEmail] = useState("");

  function handleNext() {
    var data = {
      secret_answer: secretAnswer,
      email: email
    };
    forget(data)
      .then(res => {
        window.localStorage.setItem("username", res.data.username);
        window.localStorage.setItem("email", res.data.email);
        window.location.replace("/reset");
      })
      .catch(err => alert(err));
  }

  function handleChange(e) {
    e.preventDefault();
    console.log(e.target.name);
    switch (e.target.name) {
      case "secretAnswer":
        setSecretAnswer(e.target.value);
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
          <label>Sample secret question asnwer it corecctly to reset?</label>
          <input
            name="secretAnswer"
            value={secretAnswer}
            onChange={e => handleChange(e)}
            type="text"
            className="form-control"
            required
          />
        </div>
        <Link to="/register" className="btn btn-primary">
          Home
        </Link>
        <button onClick={handleNext} className="btn btn-primary">
          Next
        </button>
      </form>
    </div>
  );
}

export default ForgetPassword;
