import React, { Component } from 'react';
import '../styles/index.css';

//  displays a particular log entry

class Entry extends Component {

  render() {
    const {progress, thoughts, link, tweet, day, date} = this.props.details
    return (
      <div className="Entry">
        <p>Day {day} <br />{date}</p>

        <p>Progress: {progress}</p>
        <p>Thoughts: {thoughts}</p>
        <p><a href={link}>Link to Work</a></p>
        <p>Tweeted: {progress} #100daysofcode {link}</p>
        <button>Save</button>
      </div>
    );
  }
}

export default Entry;
