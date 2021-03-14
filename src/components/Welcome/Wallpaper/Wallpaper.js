import React from 'react';
import './Wallpaper.scss';

export class Wallpaper extends React.Component {
    render() {
        return <>
            <div className="wallpaper flash"></div>
            <div className="wallpaper">
                <video autoPlay playsInline muted loop id="logo">
                    <source src="logo.mp4" type="video/mp4" />
                </video>
            </div>
        </>;
    }
}

