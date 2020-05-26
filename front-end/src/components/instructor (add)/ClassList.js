import React, { useState, useEffect } from "react";
import { connect } from  "react-redux";
import api from "../../utils/api";

//START Charlie
import { editClass } from "../../actions/classes";
import { deleteClass } from "../../actions/classes";
import ClassCard from "./ClassCard";
//END Charlie

const CardsList = props => {
  
  // console.log(props.class_item[0], 'ClassList')

  return (
    <>
      <div>
        <h1>Your Classes</h1>

        {/* <h1>Dashboard - Card List</h1> */}

        <div style={{ display: "flex", flexDirection: "row" }}>
          {props.class_details.map((item, index) => (
            <ClassCard 
              key={index} 
              class_details={item}
              editClass={props.editClass}
              deleteClass={props.deleteClass} 
            />
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    
    class_details: state.classes.classes

  };
};

const mapDispatchToProps = {
  
  editClass,
  deleteClass

};


export default connect(mapStateToProps, mapDispatchToProps)(CardsList);

// export default CardsList;