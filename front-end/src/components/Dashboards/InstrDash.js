import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { connect } from  "react-redux";


//-->START Redux Action File Import
import { fetchCategories } from '../../actions/categories';
import { fetchClasses } from '../../actions/classes';
//<--END Redux Action File Import


//-->START FontAwesome Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faUser,
  faEnvelope,
  faEye,
  faBookOpen,
  faPlusSquare
} from "@fortawesome/free-solid-svg-icons";
//<--END FontAwesome Import


//-->START Components Import
import DashNavBar from "./DashNavBar";
import ClassList from '../instructor/ClassList';
import AddClassButton from '../instructor/AddClassButton';
import Category from '../instructor/Category';
//<--END FontAwesom Import


//-->START Context API to Manage ADDCLASS
import { AddClassContext } from '../../contexts/AddClassContext';
import { AddCategoryContext } from '../../contexts/AddCategoryContext';
//<--END Context API


//-->START CSS Import
import "./InstrDashStylz.css";
import AddClassForm from "../instructor/AddClassForm";
//<-END CSS Import



function InstrDash(props) {

  //State to handle Add Class Button & Category Initial Mapping
  const [addClass, setAddClass] = useState(false)

 
  const [category, setCategory] = useState({
    id:'',
    name:''
  })

  //-->START useContext to consume Category state from child component Category.js
  // const { category } = useContext(AddCategoryContext);
  //<--END useContext


  //-->START Fetch Categories via Redux and Sets its state
  useEffect(() => {
    
    props.fetchCategories()

    props.fetchClasses()

  }, []);
  //<--END Fetch Categories




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
        <div className="main-header-section">
          <div className="main-header__intro-wrapper">
            <div className="main-header__welcome">
              <div className="main-header__welcome-title text-light">
                Welcome, <strong>{localStorage.getItem("username")}</strong>
              </div>
              <div className="main-header__welcome-subtitle text-light">
                Ready for your class today?
              </div>
            </div>
          </div>
        </div>

        {/* styling for main cards */}

        <div style={{marginBottom:'50px'}}>
          
          <ClassList  />
          
        </div>

        {/*Add a class button here*/}
        {!addClass ?
        
          <AddClassContext.Provider value={{addClass, setAddClass}}>
            <AddClassButton  />
          </AddClassContext.Provider>
        
        :

          <div>
              <h1>Select The Category For Your New Class </h1>

              <div style={{display:'flex', justifyContent:'center'}}>

                {props.categories.categories.map( (category, index) => (
                    
                      <Category key={index} category={category} setCategory={setCategory} />
                    
                ))}

              </div>
          </div>
      
        }

        
        {/*Display Class List According to Category*/}
        {category.id != '' ?
        
          <div>
            <h2 style={{color:'red', marginBottom:'50px'}}>{category.name}</h2>

            <AddClassForm style={{marginBottom:'50px'}} category={category} />
          </div>

        :

          <h3></h3>
        }

        

        {/* Render class card components HERE */}
        
        
        
        
        <div className="main-cards"  style={{marginTop:'75px'}}  >
          <div className="card">Social Feed</div>
          <div className="card">Event Notification Card</div>
          <div className="card">Suggested Classes</div>
        </div>
      </main>

      {/* styling for footer */}
      <footer className="footer">
        <div className="footer_copyright">&copy; 2019 Anywhere Fitness</div>
        <div className="footer_signature">Fitness The Way YOU Want It!</div>
      </footer>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    
    categories: state.categories,
    classes: state.classes

  };
};

const mapDispatchToProps = {
  
  fetchCategories,
  fetchClasses

};

export default connect(mapStateToProps, mapDispatchToProps)(InstrDash);
