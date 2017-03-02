import React, { Component } from 'react';

class Clock extends Component {
constructor(props) {
  super(props)
  this.state = {date: new Date()}
}
  componentDidMount() {
    this.timerID = setInterval(
     () => this.tick(),
     1000
   );
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return(
      <div className="Clock">
        <h2>
          It is Day {this.props.day()}<br />
          {this.state.date.toLocaleTimeString()}<br /><br />
          Do you know where your code is?
        </h2>
      </div>
    )
  }
}

export default Clock
