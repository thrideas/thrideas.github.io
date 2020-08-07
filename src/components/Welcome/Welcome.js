import React from 'react';
import './Welcome.scss';
import Wallpaper from './Wallpaper/Wallpaper';
import Chevron from "./Chevron/Chevron";
import SocialMedia from "./SocialMedia/SocialMedia";
import {ReactComponent as BackWaves} from 'assets/svg/BackWaves.svg';
import {ReactComponent as FrontWaves} from 'assets/svg/FrontWaves.svg';

class Welcome extends React.Component {
    render() {
        return <div>
            <Wallpaper/>
            <SocialMedia/>
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