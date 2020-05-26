import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { postClass } from "../actions/classes";

import NavBar from "./NavBar";

function NewClass(props) {
  const [myClass, setMyClass] = useState({
    name: "",
    description: ""
  });
  const [intensity, setIntensity] = useState("");

  const handleChange = event => {
    setMyClass({
      ...myClass,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    props.postClass(myClass);
  };

  const handleIntensity = event => {
    setIntensity(event.target.value);
  };

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h2>Create a new class!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Class Name:
          <input
            type="text"
            name="name"
            value={myClass.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Class Description:
          <input
            type="text"
            name="description"
            value={myClass.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Intensity: (LOW, MEDIUM, HIGH, INSANE)
          <input
            type="text"
            name="intensity"
            value={intensity}
            onChange={handleIntensity}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    classes: state.classes.classes
  };
};

const mapDispatchToProps = {
  postClass
};

export default connect(mapStateToProps, mapDispatchToProps)(NewClass);