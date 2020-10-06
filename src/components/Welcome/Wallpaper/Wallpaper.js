import React from 'react';
import './Wallpaper.scss';

class Wallpaper extends React.Component {
    render() {
        return <div className="wallpaper">
            <video autoPlay playsInline muted loop id="logo">
                <source src="logo.mp4" type="video/mp4"/>
            </video>
        </div>;
    }
}

export default Wallpaper;