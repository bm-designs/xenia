import React, {Component} from "react";
import ReactDOM from "react-dom";
import CreateAccount from '../CreateAccount/CreateAccount.jsx';
import "./Login.css"
class Login extends React.Component {
	constructor(props){
		super(props)
		this.state = {

	}
	this.ReactDOM = ReactDOM;
	this.close = this.close.bind(this)
	this.login = this.login.bind(this)
	}
	close(){
		document.getElementById('login-hidden-layer').style.visibility = 'hidden';
	}
	login(){
		this.ReactDOM.render(<CreateAccount/>,document.getElementById('app'))
	}
	componentDidMount(){
		// fetch("http://127.0.0.1:5000/test",{
		// 	method:'GET',
		// 	mode: 'no-cors',
		// 	headers: {
		// 		'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
		// 		'Content-Type': 'application/json; application/x-www-form-urlencoded; charset=utf-8'
		// 	}
		// })
		// .then(response=>{
		// 	console.log(response)
		// 	return response.json()
		// })
		// .then(json=>{
		// 	console.log(json)
		// })
	
	}
	render(){
		return(
			<div class='login-wrapper'>
				<div id='login-container'>
					<button id='close' onClick={this.close}> X </button>
					<div id='facebook-login'>
						<a href='https//www.facebook.com/login'> Login with Facebook </a>
					</div>
						<p id='or'> or </p>
					<h1>Username or Email </h1>
					<input type='text' name='user'/>
					<h1>Password</h1>
					<input type='Password' name='password'/>
					<br/>
					<button onClick={this.login}>Login</button>
					<a id='forgot' href=''> Forgot your password </a>
					<div id='signup-option'>
						<button  onClick={this.login}> Create an account > </button>
					</div>
				</div>
			</div>
			)
	}
}
export default Login