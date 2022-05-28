import classes from "./Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGithub, faHtml5, faInstagram, faJsSquare, faLinkedin, faPython, faReact, faSass } from "@fortawesome/free-brands-svg-icons";



const Home = () => {



  return (
    <div className={classes.container}>
      <div className={classes["left-container"]}>
        <h1 className={classes.title}>Hi there,</h1>
        <h1 className={classes["title-mid"]}>
          It's Berkay! Welcome to my page!
        </h1>
        <h2 className={classes["title-bottom"]}>Front end Developer</h2>
      </div>
      <div className={classes["right-container"]}>
          <div className={classes["cubespinner"]}>
            <div className={classes["icon-1"]}>
            <FontAwesomeIcon icon={faReact} color='#61DAFB' size="7x" />
            </div>
            <div className={classes["icon-2"]}>
            <FontAwesomeIcon icon={faJsSquare} color='#F7DF1E' size="7x" />
            </div>
            <div className={classes["icon-3"]}>
            <FontAwesomeIcon icon={faCss3} color='#214CE5' size="7x" />
            </div>
            <div className={classes["icon-4"]}>
            <FontAwesomeIcon icon={faHtml5} color='#E44D26' size="7x" />
            </div>
            <div className={classes["icon-5"]}>
            <FontAwesomeIcon icon={faPython} color='#3775A8' size="7x" />
            </div>
            <div className={classes["icon-6"]}>
            <FontAwesomeIcon icon={faSass} color='#CC6699' size="7x" />
            </div>
          </div>
      </div>
      <div className={classes.links}>
        <ul>
          <li><a target='_blanc' href="https://www.linkedin.com/in/berkay-s%C3%B6nmez-64439a171/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li><a target='_blanc' href="https://www.instagram.com/berkaysonmmez/"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href="https://github.com/sonmezberkay"><FontAwesomeIcon icon={faGithub} /></a></li>
        </ul>
        </div>
    </div>
  );
};

export default Home;
