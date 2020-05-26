import React from "react";
import { Route, NavLink } from "react-router-dom";
// import CardDescription from "./CardDescription";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import api from "../../utils/api"

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginLeft: 10,
    marginRight: 10
  }
});

function ClassCard(props) {
  const classes = useStyles();
  console.log(props);

  return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
          //pic goes here
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.class_details.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.class_details.scheduleTime}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={props.handleDelete}>
            Delete
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

    
  );
}

export default ClassCard;