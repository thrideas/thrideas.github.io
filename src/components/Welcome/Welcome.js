import React from 'react';
import './Welcome.scss';
import Wallpaper from './Wallpaper/Wallpaper'
import {ReactComponent as BackWaves} from './BackWaves.svg';
import {ReactComponent as FrontWaves} from './FrontWaves.svg';
import Chevron from "./Chevron/Chevron";

class Welcome extends React.Component {
    render() {
        return <div>
            <Wallpaper/>
            <div className="footer">
                <BackWaves/>
                <Chevron/>
                <FrontWaves/>
                <div className="margin"/>
            </div>
        </div>;
    }
}

export default Welcome