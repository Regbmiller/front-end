import React, { useState } from "react";
import Signup from "./Signup";
import Signin from "./Signin";

import { Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

const Home = props => {
  
  //Holds Visit Type (i.e. if user wants to login or signup)
  const [visitType, setVisitType] = useState();

  //Holds Login Radio Change
  const [login, setLogin] = useState(0);

  //Holds Signup Radio Change
  const [signup, setSignup] = useState(0);

  //CSS Styling for Buttons via Material.ui
  const classes = useStyles();

  //Onclick push to relevant page
  const handleClick = () => {
    props.history.push("/register");
  };

  //Handles Radio Button Change
  const handleVisitChange = e => {
    setVisitType(e.target.value);
  };

  return (
    <>
      <h1>Pintereach2</h1>
      <h3>Subheader goes here</h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h4 style={{ color: "red" }}>Login or Signup?</h4>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="Login or Signup?"
            name="visitType"
            value={visitType}
            onChange={handleVisitChange}
          >
            <FormControlLabel value="login" control={<Radio />} label="Login" />
            <FormControlLabel
              value="signup"
              control={<Radio />}
              label="Signup"
            />
          </RadioGroup>
        </FormControl>

      </div>

      {visitType === "signup" && (
        <Route render={props => <Signup history={props.history} />} />
      )}

      {visitType === "login" && (
        <Route render={props => <Signin history={props.history} />} />
      )}
    </>
  );
};

export default Home;