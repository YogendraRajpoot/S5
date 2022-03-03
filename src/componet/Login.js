import React, { useState } from "react";

export const Login = () => {
  const [username, setusername] = useState({
    email: "",
    password: "",
  });

  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setusername({ ...username, [name]: value });
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    fetchData();
    async function fetchData() {
      const response = await fetch("http://localhost:3001/users/");
      const data = await response.json();

      data.forEach((obj) => {
        Object.entries(obj).forEach(([key, value]) => {
          console.log(`${key} ${value}`);
          var datashow=document.getElementsByClassName("data-show")
          datashow.append(`${key}-${value}`)
          return(
            <div>
              {key}-{value}
            </div>
          )
        });
        console.log('-------------------');
      });
    }
    // const detail = [username.email, username.password];
    // console.log(detail);
  };

  return (
    <>
      <div className="Home-2">
        <a href="/">Home</a>
      </div>
      <div className="Login-2">Login</div>
      <div className="Signup-2">
        <a href="/Signup">Signup</a>
      </div>
      <form onSubmit={handlesubmit}>
        <label name="email" htmlFor="email">
          Email
        </label>
        <br />
        <input
          type="text"
          name="email"
          value={username.email}
          htmlFor="email"
          onChange={handlechange}
        />
        <br />
        <label htmlFor="password" type="password" name="password">
          Password
        </label>
        <br />
        <input
          type="password"
          name="password"
          value={username.password}
          htmlFor="password"
          onChange={handlechange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <div className="data-show">

      </div>
    </>
  );
};
