import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";

// import InstrDash from "./Dashboards/InstrDash";
// import StuDash from "./Dashboards/StuDash";

const Signin = props => {
  
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState();

  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setIsLoading(true);


    api()
      .post("/api/auth/login", data)
      .then(
        res => {
          
          

          if (res.data.user.roleId == 2) {
            

            //Set Token in Local Storage
            localStorage.setItem("token", res.data.token);

            //Set Username in Local Storage
            localStorage.setItem("username", res.data.user.username);

            //Set InstructorID in Local Storage
            localStorage.setItem("studentID", res.data.user.id);

            

            props.history.push("/student");

          } else if (res.data.user.roleId == 1) {
            
            //Set Token in Local Storage
            localStorage.setItem("token", res.data.token);

            //Set Username in Local Storage
            localStorage.setItem("username", res.data.user.username);

            //Set InstructorID in Local Storage
            localStorage.setItem("instructorID", res.data.user.id);


            props.history.push("/instructor");

            setIsLoading(true);

            if (res.data.user.roleId == 2) {
              console.log("Student");

              props.history.push("/student");
            } else if (res.data.user.roleId == 1) {
              props.history.push("/instructor");
            }

            localStorage.setItem("token", res.data.token);

            setTimeout(function() {
              setIsLoading(false);
            }, 1000);
          }
        }
        // .catch(err => {
        //     // setError(err.response.data.message)
        //     console.log(err);
        //   });
      );
  };

  return (
    <>
      {isLoading && <div>Loading... </div>}

      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
          height: "150px"
        }}
      >
        <h1>Login</h1>

        <form
          onSubmit={handleSubmit}
          style={{
            background: "#f1f1f1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "30px 0px",
            width: "175px"
          }}
        >
          {error && <div className="error">{error}</div>}

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={data.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />

          <button type="submit">Sign In</button>
        </form>
      </div>
    </>
  );
};

export default Signin;