  
import React, { useState, useEffect } from "react";
import { Route, NavLink } from "react-router-dom";
import { connect } from  "react-redux";

// import CardDescription from "./CardDescription";

//-->START Card UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Modal from "@material-ui/core/Modal";

import TextField from '@material-ui/core/TextField';
import { deleteClass } from "../../actions/classes";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginLeft: 10,
    marginRight: 10
  }
});
//<--END Card UI


//-->START Modal UI
const useModalStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
//<--END Modal UI


//-->START DatePicker UI
const useDatePickerStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 225,
  },
}));
//<--END DatePicker UI


//-->START Handle Edit Button
const handleEdit = e => {

  

}
//<--END Handle Edit Button

function ClassCard(props) {

  //Card Material UI Styling
  const classes = useStyles();

  //Modal Material UI Styling
  const modalClasses = useModalStyles();

  //DatePicker UI Styling
  const datePickerClasses = useDatePickerStyles();


  //<--START Component State to Hold Class and Category IDs
  const [ids, setIds] = useState()
  //<--END Component State to Hold Class and Category IDs


  //<--START Modal Open/Not Open State & Handlers
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //-->END Modal Open/Not Open State & Handlers

  //Holds Class ID
  const [classId, setClassId] = useState(props.class_details.id)

  //<--START Edited Form State to send to PUT API
  const [newEditedClass, setEditedClass] = useState({
              
              categoryId: props.class_details.categoryId,
              title:props.class_details.title,
              address: props.class_details.address,
              city: props.class_details.city,
              state: props.class_details.state,
              zipCode: props.class_details.zipCode,
              instructorId: props.class_details.instructorId,
              scheduleTime: props.class_details.scheduleTime,
            });

 

  const handleEditChange = e => {
    setEditedClass({
      ...newEditedClass,
      [e.target.name]: e.target.value
    });

      
  };

  //-->END Edited Form State to send to PUT API


  //Using useEffect to set component state & prevent infinite loop
  //State to be used to pass classId and CategoryId to Edit API Call
  useEffect( () => {

    setIds({
      classId: props.class_details.id,
      categoryId: props.class_details.categoryId,
      title:props.class_details.title,
      address: props.class_details.address,
      city: props.class_details.city,
      state: props.class_details.state,
      zipCode: props.class_details.zipCode,
      instructorId: props.class_details.instructorId,
      scheduleTime: props.class_details.scheduleTime,
      })

    }, []);
  

    const handleSubmit = e =>{

      e.preventDefault()

      // console.log(newEditedClass)
      props.editClass(classId, newEditedClass)

      setTimeout(() => {
        window.location.reload()
      }, 1000);

    }


    const handleDelete = () => {
      
      props.deleteClass(props.class_details.id)

      setTimeout(() => {
        window.location.reload()
      }, 1200);
    
    }

    

    const cat = props.categories.categories.filter( category => {return category.id == props.class_details.categoryId})

    

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Cross Fit"
          height="140"
          image="https://www.wellandgood.com/wp-content/uploads/2019/08/GettyImages-931805226-crossfitgames-alvarez.jpg"
          title="Cross Fit"
        />
        <CardContent>
          

          <h3>Category: {cat.name}</h3>
          <Typography gutterBottom variant="h5" component="h2">
            Class Name: {props.class_details.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* {props.class_details.scheduleTime ? props.class_details.scheduleTime : 'null'} */}
            <p>{new Date().toLocaleString()}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleOpen} size="small" color="primary">
          Edit
        </Button>

          {/*START MODAL*/}
          <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={modalClasses.modal}
          open={open}
          onClose={handleClose}
          >
            <div className={modalClasses.paper}>
              <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>

                <h3>Enter Edits Below</h3>

                <div>
                  <h5>Current Class Details</h5>
                    <p style={{borderBottom:'1px dotted black'}}>Title: {props.class_details.title}</p>
                    <p style={{borderBottom:'1px dotted black'}}>Address: {props.class_details.address}</p>
                    <p style={{borderBottom:'1px dotted black'}}>City: {props.class_details.city}</p>
                    <p style={{borderBottom:'1px dotted black'}}>State: {props.class_details.state}</p>
                    <p style={{borderBottom:'1px dotted black'}}>Zip Code: {props.class_details.zipCode}</p>
                    <p style={{borderBottom:'1px dotted black'}}>Scheduled Time: {props.class_details.scheduleTime}</p>
                </div>

                <h3>Make Edits Below:</h3>

                <form
                  onSubmit={handleSubmit}
                  style={{
                    background: "#f1f1f1",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "30px 0px",
                    width: "325px"
                  }}
                >
                  <span style={{marginBottom:"10px"}}>
                    <label>Title:</label>
                    <input
                      type="text"
                      name="title"
                      
                      value={newEditedClass.title}
                      onChange={handleEditChange}
                    />
                  </span>

                  <span style={{marginBottom:"10px"}}>
                    <label>Address:</label>
                    <input
                      type="text"
                      name="address"
                      
                      value={newEditedClass.address}
                      onChange={handleEditChange}
                    />
                  </span>

                  <span style={{marginBottom:"10px"}}>
                    <label>City</label>
                    <input
                    type="text"
                    name="city"
                    
                    value={newEditedClass.city}
                    onChange={handleEditChange}
                  />                    
                  </span>
                  
                  <span style={{marginBottom:"10px"}}>
                    <label>State:</label>
                    <input
                      type="text"
                      name="state"
                      
                      value={newEditedClass.state}
                      onChange={handleEditChange}
                    />
                  </span>

                  <span style={{marginBottom:"10px"}}>
                    <label>Zip Code:</label>
                    <input
                      type="text"
                      name="zipCode"
                      
                      value={newEditedClass.zipCode}
                      onChange={handleEditChange}
                    />
                  </span>  

                  
                  
                  <span style={{marginBottom:"10px"}}>
                    <TextField
                      name="scheduleTime"
                      id="datetime-local"
                      label="Scheduled Time"
                      type="datetime-local"
                      defaultValue="2017-05-24T10:30"
                      className={datePickerClasses.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={handleEditChange}
                    />
                  </span>

                  <button style={{marginTop:'25px'}} type="submit">Submit Edits</button>
                </form>

              </div>  
              
            </div>
          </Modal>
          {/*END MODAL*/}

        <Button onClick={handleDelete} size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}


const mapStateToProps = state => {
  return {
    
    categories: state.categories

  };
};




export default connect(mapStateToProps)(ClassCard);

// export default ClassCard;