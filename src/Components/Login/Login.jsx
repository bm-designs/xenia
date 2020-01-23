import React, {Component} from "react";
import ReactDOM from "react-dom";
import CreateAccount from '../CreateAccount/CreateAccount.jsx';
import Home from '../Home/Home.jsx';
import "./Login.css"
class Login extends React.Component {
	constructor(props){
		super(props)
		this.state = {

		}
	this.ReactDOM = ReactDOM;
	this.credentials = {email: '',
						password: ''}
	this.close = this.close.bind(this)
	this.signin = this.signin.bind(this)
	this.update = this.update.bind(this)
	this.create = this.create.bind(this)
	this.validatePassword = this.validatePassword.bind(this)
	}
	validatePassword(password){
		if(password.length>=8){

			if (password.match(/[^A-Za-z0-9]/)){
				if (password.match(/[0-9]/)){
					return true
				}
				else {
					alert("Numbers are required")
					return false
				}
				
			}
			else{
				alert('Password must contain special characters')
				return false
			}
		}
		else {
			alert('Password must be at least 8 characters long')
			return false
		}
	}
	close(){
		document.getElementById('login-hidden-layer').style.visibility = 'hidden';
	}
	create(){
		this.ReactDOM.render(<CreateAccount />, document.getElementById('app'))
	}
	update(e){
		var element = e.target.name
		this.credentials[element] = e.target.value
	}
	signin(){
		var request_payload = JSON.stringify(this.credentials);
		fetch("http://127.0.0.1:5000/login", {
			headers: { "Content-Type": "application/json; charset=utf-8" },
  			method: 'POST',
  			body: request_payload
		})
		.then(response => {
			return response.json();
		})
		.then(my_json => {
			console.log(my_json)
		})
		// if(this.credentials.username.split("@")){
		// 	console.log(this.credentials.password.match(/[0-9]/))
		// 	if (this.validatePassword(this.credentials.password)){
		// 		var data = {'username':this.credentials.username, 'password':this.credentials.password}
		// 		console.log(data)
		// 		fetch("/login", {
		// 			method: "POST",
		// 			headers: {
		//                   'Accept': 'application/json, text/plain',
		//                   'Content-Type': 'application/json'
		//                   },
		// 			body: JSON.stringify(data)
		// 		}).then(response => {
		// 			if (response.ok) {
		// 				//update the cookie/session then transition to the home page
		// 				this.ReactDOM.render(<Home user={{name:"Dan Molina", userid:"12345abc", email:"dan@xenia.com"}}/>,document.getElementById('app'))
		// 			}
		// 		})
		// 	} 
		// } else {
		// 	alert("Enter valid email")
		// }

		
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
					<h1>Email </h1>
					<input type='text' name='email' onChange={this.update.bind(this)}/>
					<h1>Password</h1>
					<input type='password' name='password' onChange={this.update.bind(this)}/>
					<br/>
					<button onClick={this.signin}>Login</button>
					<a id='forgot' href=''> Forgot your password </a>
					<div id='signup-option'>
						<button  onClick={this.create}> Create an account > </button>
					</div>
				</div>
			</div>
			)
	}
}
export default Login