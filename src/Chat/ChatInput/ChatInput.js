import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  inputChangeHandler = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  sendButtonClick = () => {
    const { message } = this.state;
    if (message !== '') {
      this.props.addMessage(message);
      this.setState({
        message: '',
      });
    }
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" onChange={this.inputChangeHandler} value={this.state.message} />
        <button type="button" onClick={this.sendButtonClick}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
