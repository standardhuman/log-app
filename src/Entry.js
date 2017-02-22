import React, { Component } from 'react';
import './styles/Entry.css';

//  displays a particular log entry

class Entry extends Component {

  render() {
    const {day, progress, thoughts, link, tweet, date} = this.props.details
    console.log("day:", {day});
    return (
      <div className="Entry">
        {day}<br />
        {date}<br />
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
