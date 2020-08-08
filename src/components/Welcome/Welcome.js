import React from 'react';
import './Welcome.scss';
import Wallpaper from './Wallpaper/Wallpaper';
import SocialMedia from "./SocialMedia/SocialMedia";
import Wave from "./Wave/Wave";
import TagLine from "./TagLine/TagLine";

class Welcome extends React.Component {
    render() {
        return <div>
            <Wallpaper/>
            <Wave/>
            <SocialMedia/>
            <TagLine/>
        </div>;
    }
}

export default Welcome