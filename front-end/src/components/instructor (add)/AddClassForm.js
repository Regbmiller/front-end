import React, { useState, Component } from "react";

import { render } from "react-dom";

import { connect } from 'react-redux';

import api from "../../utils/api";

//-->START Redux Action File Import
import { postClass } from '../../actions/classes';
//<--END Redux Action File Import






class AddClassForm extends React.Component {

  constructor(){
    super();
    this.state = {
      newClass:{
        title:'',
        address:''
      }
    }
  }

    handleChange = e => {
      this.setState({

        ...this.state.newClass,
        newClass:{
          [e.target.name]: e.target.value,
          instructorId: Number(localStorage.getItem('instructorID')),
          categoryId: this.props.category.id
        }
        
        
      });

      console.log(this.state.newClass, 'onChange')

    }
  
    handleSubmit = e => {
      
      e.preventDefault();

      console.log(this.state, 'onSubmit')
     this.props.postClass(this.state.newClass)

     setTimeout(() => {
      window.location.reload()
    }, 1000);
  
      
    };

  
  
  //   const [isLoading, setIsLoading] = useState(false);

  //   const [newClassData, setNewClassData] = useState({
  //       // title: '',
  //       // instructorId: Number(localStorage.getItem('instructorID')),
  //       // categoryId: Number(props.category.id),
  //       // scheduleTime: '',
  //       // address: '',
  //       // city: '',
  //       // state: '',
  //       // zipCode: ''
  // });

  
    
    render(){
        return (
          <>
            
      
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "75px",
                marginBottom: "25px",
                height: "150px"
              }}
            >
              <h3>Post New Class</h3>
      
              <form
                onSubmit={this.handleSubmit}
                style={{
                  background: "#82bef6",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                  padding: "30px 0px",
                  width: "175px"
                }}
              >
      
      
                <input
                  type="text"
                  name="title"
                  placeholder="Class Name"
                  value={this.state.newClass.title}
                  onChange={this.handleChange}
                />
      
              <input
                  type="text"
                  name="instructorId"
                  
                  value={Number(localStorage.getItem('instructorID'))}
                  onChange={this.handleChange}
                  disabled
                />
      
              <input
                  type="text"
                  name="categoryId"
                  
                  value={Number(this.props.category.id)}
                  onChange={this.handleChange}
                  disabled
                />
      
      
                <input
                  type="text"
                  name="scheduleTime"
                  placeholder="Time"
                  value=''
                  onChange={this.handleChange}
                  disabled
                />
      
              <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={this.props.address}
                  onChange={this.handleChange}
                />
      
              <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={this.props.city}
                  onChange={this.handleChange}
                />
      
              <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={this.props.state}
                  onChange={this.handleChange}
                />
      
              <input
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code"
                  value={this.props.zipCode}
                  onChange={this.handleChange}
                />        
                
      
                <button style={{marginTop:"15px"}} >Submit</button>
              </form>
            </div>
          </>
        );
      };
    }
  

const mapStateToProps = state => {
    return {
      
      categories: state.categories,
      classes: state.classes
  
    };
  };
  
  // const mapDispatchToProps = {
    
  //   postClass
  
  // };
  
  export default connect(mapStateToProps,{postClass})(AddClassForm);