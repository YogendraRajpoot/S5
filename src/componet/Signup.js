import "../App.css";
import React, { useState } from "react";

export const Signup = () => {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [DOB, setdob] = useState("");
  const [gender, setgender] = useState("");
  const [state, setstate] = useState("");
  const [password, setpassword] = useState("");

  
  const handlesubmit = (event) => {
    event.preventDefault();
    const details = {
      username,
      email,
      phone,
      DOB,
      gender,
      state,
      password,
    };
    // console.log(details);
    fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify(details),
      headers: { "content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((resjson) => console.log(resjson))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="Home-1">
        <a href="/">Home</a>
      </div>
      <div className="Login-1">
        <a href="/Login">Login</a>
      </div>
      <div className="Signup-1">Signup</div>
      <form onSubmit={handlesubmit}>
        <br />
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          onChange={(event) => {
            setusername(event.target.value);
          }}
          name="username"
          value={username}
        />
        <br />
        <label htmlFor="DOB">Date Of Birth</label>
        <br />
        <input
          type="date"
          name="DOB"
          value={DOB}
          onChange={(event) => {
            setdob(event.target.value);
          }}
        />
        <br />
        <label htmlFor="gender">Gender</label>
        <br />
        <input
          type="text"
          name="gender"
          value={gender}
          onChange={(event) => {
            setgender(event.target.value);
          }}
        />
        <br />
        <label htmlFor="state">State</label>
        <br />
        <input
          type="text"
          name="state"
          value={state}
          onChange={(event) => {
            setstate(event.target.value);
          }}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <label htmlFor="phone">Phone</label>
        <br />
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(event) => {
            setphone(event.target.value);
          }}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => {
            setpassword(event.target.value);
          }}
        />
        <br />

        <button type="submit">REGISTER</button>
      </form>
    </>
  );
};
