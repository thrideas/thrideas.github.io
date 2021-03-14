import React from 'react';
import './SocialMedia.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faItchIo, faTwitch, faGithub, faYoutube, faPatreon } from "@fortawesome/free-brands-svg-icons"
import { faDonate } from "@fortawesome/free-solid-svg-icons"

export class SocialMedia extends React.Component {
    render() {
        return <div className="social-media">
            <a href="https://twitter.com/thrideas"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://thrideas.itch.io/"><FontAwesomeIcon icon={faItchIo} /></a>
            <a href="https://www.twitch.tv/thrideas"><FontAwesomeIcon icon={faTwitch} /></a>
            <a href="https://github.com/thrideas"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://shorturl.at/ahuvU"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="https://www.patreon.com/thrideas"><FontAwesomeIcon icon={faPatreon} /></a>
            <a href="https://streamelements.com/thrideas/tip"><FontAwesomeIcon icon={faDonate} /></a>
            {/*<!--https://lbry.tv/-->*/}
        </div>;
    }
}

