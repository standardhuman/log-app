import React, { Component } from 'react';
import '../styles/index.css';

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
  //  this.setState({
  //    day: this.props.day()
  //  })
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
          <h4>
            It's {this.state.date.toLocaleTimeString()}<br />
            Do you know where your code is?
          </h4>
      </div>
    )
  }
}

export default Clock
