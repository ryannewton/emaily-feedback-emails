import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class VoteReason extends Component {
  constructor(props) {
    super(props);
    this.state = { reason: '' };

    this.submitResponse = this.submitResponse.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {}

  submitResponse() {
    const { score, surveyId } = this.props.match.params;
    const { history } = this.props;
    const { reason } = this.state;
    this.props.addResponse({ score, reason, surveyId }, history);
  }

  handleChange(event) {
    this.setState({ reason: event.target.value });
  }

  render() {
    const { score } = this.props.match.params;
    return (
      <div>
        <h5>Your response was:</h5>
        <h5>{score}</h5>
        <form>
          <label>What was the primary reason for the score you gave?</label>
          <textarea type="text" value={this.state.reason} onChange={this.handleChange} />
          <button onClick={this.submitResponse} className="teal btn-flat right white-text">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(VoteReason);
