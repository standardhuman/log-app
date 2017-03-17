import React, { Component } from 'react';
import '../styles/index.css';

//  displays a particular log entry

class Entry extends Component {

  render() {
    const {progress, thoughts, link, tweet, day} = this.props.details
    return (
      <div className="Entry">
        <p>Day {day}</p>
        <p>Progress: {progress}</p>
        <p>Thoughts: {thoughts}</p>
        <p>Work: {link}</p>
        <p>Tweeted: {tweet}</p>
        <button>Save</button>
      </div>
    );
  }
}

export default Entry;
