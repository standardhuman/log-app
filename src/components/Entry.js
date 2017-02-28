import React, { Component } from 'react';
import '../styles/Entry.css';

//  displays a particular log entry

class Entry extends Component {

  render() {
    const {progress, thoughts, link, tweet} = this.props.details
    return (
      <div className="Entry">
        Progress: {progress}<br />
        Thoughts: {thoughts}<br />
        Work: {link}<br />
        Tweeted: {tweet}<br />
        <button>Save</button>
      </div>
    );
  }
}

export default Entry;
