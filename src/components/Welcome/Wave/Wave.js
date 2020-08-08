import React from 'react';
import './Wave.scss';
import {ReactComponent as BackWaves} from "assets/svg/BackWaves.svg";
import Chevron from "./Chevron/Chevron";
import {ReactComponent as FrontWaves} from "assets/svg/FrontWaves.svg";

class Wave extends React.Component {
    render() {
        return <div className="footer">
            <BackWaves/>
            <Chevron/>
            <FrontWaves/>
            <div className="margin"/>
        </div>
    }
}

export default Wave;