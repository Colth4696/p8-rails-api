import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from './Header'
import Dashboard from './registrations/Dashboard'

class Home extends Component {
  constructor(props){
  super(props)
  this.state= {
  
  }
  }
  
 handleClick = () => {
    axios.delete('http://localhost:3003/logout', {withCredentials: true})
    .then(response => {
      this.props.handleLogout()
      this.props.history.push('/')
    })
    .catch(error => console.log(error))
  }
  render(){
return (
    <div>
   <div>
       <Header/>
       <br></br>
       { 
        this.props.loggedInStatus ? 
        <Link to='/logout' onClick={this.handleClick}>Log Out</Link> : 
        null
      }
   </div>
   
    <div>
      <Link to='/login'>Log In</Link>
    <br></br>
    <Link to='/signup'>Sign Up</Link>
    {
    this.props.loggedInStatus ?      
    <Dashboard/>: 
    null
    }
    </div>
    </div>
  );
}
};
export default Home;
