import React, { Component } from 'react';
import './styles/Entry.css';

//  displays a particular log entry

class Entry extends Component {

  render() {
    const {details, index} = this.props
    return (
      <div className="Entry">
        {day}
        {date}
        {progress}
        {thoughts}
        {link}
        {tweet}
        <button>Save</button>
      </div>
    );
  }
}

export default Entry;
