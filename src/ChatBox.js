import React, { Component } from 'react'
import axios from 'axios'

class ChatBox extends Component {
  constructor() {
    super()
    this.state = { 
      message: "",
      sender_id: "",
      receiver_id: "",
      request_id: "",
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  };

  handleClick = (event) => {
    event.preventDefault()
    const { message, sender_id, receiver_id, request_id } = this.state
    let inquiry = {
      message: message,
      sender: sender_id,
      receiver_id: receiver_id,
      request_id: request_id
    }

    axios.post("http://localhost:3003/messages/", { inquiry },
      { withCredentials: true }
    )
      .then(response => {
        if (response.data.status === 'created') {
          this.props.messages(response.data);
        }
      })
      .catch(error => {
        console.log("message error", error);
      });
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <header>Message User</header>
        <input
        type="text"
        name="message"
        placeholder="message"
        value={this.state.message}
        onChange={this.handleChange}
        required />

        <br />

        <button type="submit">Send</button>
      </form>
    )
  }
}

export default ChatBox