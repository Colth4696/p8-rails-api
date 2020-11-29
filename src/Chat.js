import React, { Component } from 'react'
import MessageForm from './MessageForm'
import axios from 'axios'

const AcceptRequest = ({ onDoubleClick, handleVolunteers }) => 
(
  <button className="accept" 
  onDoubleClick={onDoubleClick}
  onClick={handleVolunteers}>
    Accept
  </button>
)

const MessageBox = ({ onClick, request }) => 
(
  <div className="M-Form">
  <CloseBox onClick={onClick} request={request} />
  </div>
)

const CloseBox = ({ onClick, request }) => {
console.log(request)
return(
  <div>
    <MessageForm request={request}/>
  <button className="Close" 
  onClick={onClick}>X</button>
  </div>
)
}
class Chat extends Component{
  constructor(props){
    super(props)
    this.state={
      showMessage: false, 
      user_id: "",
      request_id: ""
    }

    this.boundShowMessage = this.showMessage.bind(this)
    this.boundHideMessage = this.hideMessage.bind(this)
    this.boundHandleVolunteers = this.handleVolunteers.bind(this)
  }

  getUser = (event) => {
    event.preventDefault()
    axios.get("http://localhost:3003/users/:id")
    .then(response => {
      this.props.users(response.data)
    })
  }

  getRequest = (event) => {
    event.preventDefault()
    axios.get("http://localhost:3003/request/:id")
    .then(response => {
      this.props.requests(response.data)
    })
  }


  handleVolunteers = (event) => {
    event.preventDefault()
    const {user_id, request_id} = this.state
    let volunteer =  
    {
      user_id: this.getUser,
      request_id: this.getRequest
    } 
    console.log("volunteer")
    axios.post("http://localhost:3003/volunteers", {volunteer},
    { withCredentials: true }
    )
    .then(response => {
      if (response.data.status === 'created') {
        this.props.volunteers(response.data)
      }
  })        
    .catch(error => {
        console.log("volunteer error", error);
    });
    event.preventDefault();
  };


    showMessage() {
      this.setState({ showMessage: true })
    }

    hideMessage() {
      this.setState({ showMessage: false })
    }

    render(){

      return(
        <div>
          <AcceptRequest onDoubleClick={this.boundShowMessage} handleVolunteers={this.boundHandleVolunteers}/>
          {this.state.showMessage && <MessageBox task={this.props.request_id} onClick={this.boundHideMessage}/>}
        </div>
      )
    }
}

export default Chat