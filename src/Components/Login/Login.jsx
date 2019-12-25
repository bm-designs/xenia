import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./Login.css"
class Login extends React.Component {
	constructor(props){
		super(props)
		this.state = {

	}
	this.ReactDOM = ReactDOM;
	}
	componentDidMount(){
		
	}
	render(){
		return(
			<div class='login-wrapper'>
				<a id='back-button' href='/'>←</a>
				<div id='login-container'>
					<h1>Username or Email </h1>
					<input type='text' name='user'/>
					<h1>Password</h1>
					<input type='Password' name='password'/>
					<br/>
					<button onClick={this.login}>Login</button>
				</div>
			</div>
			)
	}
}
export default Login