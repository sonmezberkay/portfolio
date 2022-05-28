import classes from "./Sidebar.module.css";
import { useHistory } from "react-router-dom";

import BarContext from "../bar-context/BarContext";
import { useContext } from "react";

const Sidebar = () => {

    const history = useHistory();
    
    const barCtx = useContext(BarContext);

    const closeBarandPushHome = () => {
        history.push('/');
        barCtx.barToggle();
    };
    const closeBarandPushAbout = () => {
        history.push('/about');
        barCtx.barToggle();
    };
    const closeBarandPushContact = () => {
        history.push('/contact');
        barCtx.barToggle();
    };

  return (
    <div className={classes["sidebar-links"]}>
      <button className={classes.btn} onClick={closeBarandPushHome}>Home</button>
      <button className={classes.btn} onClick={closeBarandPushAbout}>About</button>
      <button className={classes.btn} onClick={closeBarandPushContact}>Contact</button>
    </div>
  );
};

export default Sidebar;
