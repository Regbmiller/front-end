import React, { useState, useEffect } from "react";
import { Route, NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faUser,
  faEnvelope,
  faEye,
  faBookOpen
} from "@fortawesome/free-solid-svg-icons";
import api from '../../utils/api';
import DashNavBar from "./DashNavBar";
import CardsList from '../classes/CardsList';
import ClassesList from '../student (view)/ClassesList';
import "./StuDashStylz.css";
// import CategoriesList from '../student/CategoriesList';
// import BreadCrumbsList from "../student/BreadCrumbsList";

const useStyles = makeStyles({
  classesContainer: {
    display: 'flex',
    justifyContent: 'space-evenly'
  }
})

function StuDash() {
  const classes = useStyles();
  const [category, setCategory] = useState([])

  useEffect(() => {
    // gets all the categories
    api().get(`/api/category`)
        .then(res => {
            setCategory(res.data)
            // console.log(res.data)
        })
        .catch(err => console.log(err))
},[])

  return (
    // Set CSS grid container
    <div className="grid-container">
      <header className="header">
        <div className="header_search">
          <input className="header_input" placeholder="Search..." />
        </div>
        <div className="navbar">
          <DashNavBar />
        </div>
        <div className="header_avatar">{<FontAwesomeIcon icon={faUser} />}</div>
      </header>

      {/* set styling and structure for sidenav */}

      <aside className="sidenav">
        <div className="sidenav__brand">
          <FontAwesomeIcon icon={faDumbbell} className="sidenav_icon" />
          <NavLink to="/" className="sidenav__brand-link">
            Anywhere <span className="text-light">Fitness</span>
          </NavLink>
        </div>

        <div className="sidenav__profile">
          <div className="sidenav__profile-avatar">
            {<FontAwesomeIcon icon={faUser} />}
          </div>
          <div className="sidenav__profile-title text-light">{localStorage.getItem("username")}</div>
        </div>

        <div className="row row--align-v-center row--align-h-center">
          <ul className="navList">
            <li className="navList__heading">
              Messages {<FontAwesomeIcon icon={faEnvelope} />}
            </li>

            <div className="navList__subheading">
              <span className="navList__subheading-icon">
                {<FontAwesomeIcon icon={faEnvelope} />}
              </span>
              <span className="navList__subheading-title">Inbox</span>
            </div>

            <div className="navList__subheading">
              <span className="navList__subheading-icon">
                {<FontAwesomeIcon icon={faEye} />}
              </span>
              <span className="navList__subheading-title">Unread</span>
            </div>

            <div className="navList__subheading">
              <span className="navList__subheading-icon">
                {<FontAwesomeIcon icon={faBookOpen} />}
              </span>
              <span className="navList__subheading-title">Archive</span>
            </div>
          </ul>
        </div>
      </aside>

      {/* set styling for main section */}

      <main className="main">
        <div className="main-header">
          <div className="main-header__intro-wrapper">
            <div className="main-header__welcome">
              <div className="main-header__welcome-title text-light">
                Welcome, <strong>{localStorage.getItem("username")}</strong>
              </div>
              <div className="main-header__welcome-subtitle text-light">
                Where are you working out today?
              </div>
            </div>
          </div>
        </div>

        {/* styling for main cards */}
        {/* Render class card components HERE */}

        <div className={classes.classesContainer}>
          <CardsList />
          <ClassesList />
        </div>
        {/* <CategoriesList categories={category}/> */}
        {/* <BreadCrumbsList /> */}
        {/* <Route exact path={`/student/${category.name}`} component={ClassesList} /> */}
        
      </main>

      {/* styling for footer */}
      <footer className="footer">
        <div className="footer_copyright">&copy; 2019 Anywhere Fitness</div>
        <div className="footer_signature">Fitness The Way YOU Want It!</div>
      </footer>
    </div>
  );
}

export default StuDash;