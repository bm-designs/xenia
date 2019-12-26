import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./Login.css"
class Login extends React.Component {
	constructor(props){
		super(props)
		this.state = {

	}
	this.ReactDOM = ReactDOM;
	this.close = this.close.bind(this)
	}
	close(){
		document.getElementById('login-hidden-layer').style.visibility = 'hidden';
	}
	componentDidMount(){
		
	}
	render(){
		return(
			<div class='login-wrapper'>
				<div id='login-container'>
					<button id='close' onClick={this.close}> X </button>
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