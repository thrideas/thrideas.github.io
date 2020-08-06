import React from 'react';
import './Welcome.scss';
import Wallpaper from './Wallpaper/Wallpaper'
import {ReactComponent as BackWaves} from './BackWaves.svg';
import {ReactComponent as FrontWaves} from './FrontWaves.svg';

class Welcome extends React.Component {
    render() {
        return <div>
            <Wallpaper/>
            <div className="footer">
                <BackWaves></BackWaves>
                <FrontWaves></FrontWaves>
                <div className="margin"/>
            </div>
        </div>;
    }
}

export default Welcome