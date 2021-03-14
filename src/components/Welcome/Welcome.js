import React from 'react';
import './Welcome.scss';
import { Wallpaper } from './Wallpaper/Wallpaper';
import { SocialMedia } from './SocialMedia/SocialMedia';
import { TagLine } from './TagLine/TagLine';

export class Welcome extends React.Component {
    render() {
        return <div>
            <Wallpaper />
            <SocialMedia />
            <TagLine />
        </div>;
    }
}

