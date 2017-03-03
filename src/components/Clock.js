import React, { Component } from 'react';

class Clock extends Component {
constructor(props) {
  super(props)
  this.state = {date: new Date()}
}
  // componentWillMount() {
  //   this.setState({
  //     day: this.props.day()
  //   })
  // }
  componentDidMount() {
    this.timerID = setInterval(
     () => this.tick(),
     1000
   )
   this.setState({
     day: this.props.day()
   })
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
          It is Day {this.state.day}<br />
          {this.state.date.toLocaleTimeString()}<br /><br />
          Do you know where your code is?
        </h2>
      </div>
    )
  }
}

export default Clock
