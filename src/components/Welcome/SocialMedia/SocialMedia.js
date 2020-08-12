import React from 'react';
import './SocialMedia.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faItchIo,faTwitch,faGithub,faYoutube} from "@fortawesome/free-brands-svg-icons"

class SocialMedia extends React.Component {
    render() {
        return <div className="social-media">
            <a href="https://twitter.com/alchemistake"><FontAwesomeIcon icon={faTwitter}/></a>
            <a href="https://thrideas.itch.io/"><FontAwesomeIcon icon={faItchIo}/></a>
            <a href="https://www.twitch.tv/alchemistake"><FontAwesomeIcon icon={faTwitch}/></a>
            <a href="https://github.com/alchemistake"><FontAwesomeIcon icon={faGithub}/></a>
            <a href="https://shorturl.at/ahuvU"><FontAwesomeIcon
                icon={faYoutube}/></a>
        {/*<!--https://lbry.tv/-->*/}
        </div>;
    }
}

export default SocialMedia