import { useContext } from 'react';
import BarContext from '../bar-context/BarContext';
import classes from './Backdrop.module.css';

const Backdrop = () => {
    const barCtx = useContext(BarContext);
    const barToggle = barCtx.barToggle;

    return (
        <div onClick={barToggle} className={classes.backdrop}>

        </div>
    )
};

export default Backdrop;