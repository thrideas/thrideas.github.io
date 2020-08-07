import React from 'react';
import './SocialMedia.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faItchIo,faTwitch,faGithub,faYoutube} from "@fortawesome/free-brands-svg-icons"

class SocialMedia extends React.Component {
    render() {
        return <div>
            <ul className="social-media">
                <li><a href="https://twitter.com/alchemistake"><FontAwesomeIcon icon={faTwitter}/></a></li>
                <li><a href="https://thrideas.itch.io/"><FontAwesomeIcon icon={faItchIo}/></a></li>
                <li><a href="https://www.twitch.tv/alchemistake"><FontAwesomeIcon icon={faTwitch}/></a></li>
                <li><a href="https://github.com/alchemistake"><FontAwesomeIcon icon={faGithub}/></a></li>
                <li><a href="https://shorturl.at/ahuvU"><FontAwesomeIcon
                    icon={faYoutube}/></a></li>
                {/*<!--https://lbry.tv/-->*/}
            </ul>
        </div>;
    }
}

export default SocialMedia