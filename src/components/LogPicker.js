import React from 'react';
import { getFunName } from '../helpers';

class LogPicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToLog = this.goToLog.bind(this);
  // }
  goToLog(event) {
    event.preventDefault();
    console.log('You Changed the URL');
    // first grab the text from the box
    const logId = this.logInput.value;
    console.log(`Going to ${logId}`)
    // second we're going to transition from / to /log/:logId
    this.context.router.transitionTo(`/log/${logId}`);
  }

  render() {
    // Any where else
    return (
      <form className="log-selector" onSubmit={(e) => this.goToLog(e)}>
        <h2>Please Select A Log Name</h2>
        <input type="text" required placeholder="Log Name" defaultValue={getFunName()} ref={(input) => { this.logInput = input}} /><br />
        <button type="submit">Go To Log →</button>
      </form>
    )
  }
}

LogPicker.contextTypes = {
  router: React.PropTypes.object
}

export default LogPicker;
