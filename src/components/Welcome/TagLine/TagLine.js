import React from 'react';
import './TagLine.scss';

class TagLine extends React.Component {
    render() {
        return <div className="tag-line">
            <p>It's a me:</p>
            <img src="logo-fill.png" className="logo" alt="Logo"/>
            <p>I'm Infrastructure Engineer by day.</p>
            <p>I try to be Game Developer by night.</p>
        </div>
    }
}

export default TagLine;