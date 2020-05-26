import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import api from "../utils/api";
import { makeStyles } from "@material-ui/core";

import InstrDash from "./Dashboards/InstrDash";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center"
  },
  form: {
    width: "50%",
    height: "450px",
    margin: "30px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "darkgray",
    borderRadius: "10px",
    boxShadow: "0px 0px 15px black"
  },
  inputFields: {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto"
  },
  button: {
    width: "150px",
    height: "50px",
    marginTop: "20px",
    color: "white",
    backgroundColor: "green",
    border: "2px solid black",
    boxShadow: "4px 4px 3px black",
    borderRadius: "7px"
  },
  senseiBtn: {
    width: "125px",
    height: "45px",
    color: "white",
    backgroundColor: "#218BCC",
    margin: "5px",
    border: "2px solid black",
    borderRadius: "7px",
    boxShadow: "4px 4px 3px black"
  },
  grasshopperBtn: {
    width: "125px",
    height: "45px",
    color: "black",
    backgroundColor: "#AEEA4F",
    margin: "5px",
    border: "2px solid black",
    borderRadius: "7px",
    boxShadow: "4px 4px 3px black"
  },
  sensei: {
    color: "#218BCC",
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  grasshopper: {
    color: "#AEEA4F",
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  label: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "350px",
    margin: "8px auto"
  }
});

export default function Signin(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  });
  const [newUser, setNewUser ] = useState(false);
setInstructor
  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  // const handleRole = role => {
  //   if (role === 1) {
  //     setUser({
  //       ...user,
  //       roleId: 1
  //     });
  //     setNewUser(true);
  //   } else if (role === 2) {
  //     setUser({
  //       ...user,
  //       roleId: 2
  //     });
  //     setNewUser(false);
  //   }
  // };

  const handleSubmit = event => {
    event.preventDefault();

    api()
      .post(`/api/auth/register`, user)
      .then(res => {
        

        //Set Username in Local Storage
        localStorage.setItem("username", res.data.username);

        if(user.roleId === 1){

          props.history.push('/instructor')
        
        } else if (user.roleId === 2) {

          props.history.push('/student')

        }
      })
      .catch(err => {
        
      });
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div>
          <div>
            <button
              type="button"
              className={classes.grasshopperBtn}
              onClick={() => handleRole(2)}
            >
              Welcome
            </button>
            {instructor === true && (
              <div className={classes.sensei}>Register as an instructor</div>
            )}
            {instructor === false && (
              <div className={classes.grasshopper}>Register as a student</div>
            )}
          </div>
          <div className={classes.inputFields}>
            <label className={classes.label}>
              Username:
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
              />
            </label>
            <label className={classes.label}>
              Password:
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </label>
            <label className={classes.label}>
              First Name:
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
              />
            </label>
            <label className={classes.label}>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
              />
            </label>
            <label className={classes.label}>
              Email:
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit" className={classes.button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}