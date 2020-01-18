import React, {Component} from "react";
import ReactDOM from "react-dom";
import HousingPreferences from './HousingPreferences.jsx';
import xhr from 'xhr';
// import request from 'request';
import "./CreateAccount.css"
class CreateAccount extends React.Component {
	constructor(props){
		super(props)
		this.state = {

	}
	this.ReactDOM = ReactDOM;
	// this.xhr = xhr
	this.start = this.start.bind(this)
	this.user = {firstName:'',lastName:'', email:'', password:''}
	this.update = this.update.bind(this)
	}
	start(){	
		var body = JSON.stringify({'username':this.user['firstName']+" "+this.user['lastName'],'email':this.user['email'], 'password':this.user['password']})
		console.log(body)
		fetch("http://127.0.0.1:5000/user_init",{
			method:'POST',
			mode: 'no-cors',
			headers: {
				'Accept': 'application/json, text/plain',
				'Content-Type': 'application/json'
			},
			body: body
		})
		.then(response=>{
			console.log(response)
			return response.json()
		})
		.then(json=>{
			console.log(json)
		})
		// var username this.user['firstName']+" "+this.user['lastName']
		// this.xhr = new XMLHttpRequest()
  //       this.xhr.open('POST', 'http://localhost:5000/login', true);
  //       this.xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  //       this.xhr.send(JSON.stringify({'username': username, 'password': this.user['password']}));
  //       this.xhr.onload = () => {
  //           console.log('hit')
  //           this.setState({response: xhr.responseText, done: true})
  //           if (request.status >= 200 && request.status < 400) {
  //               this.setState({response: xhr.responseText, done: true})
  //           } 
  //       };
		this.ReactDOM.render(<HousingPreferences user={this.user}/>, document.getElementById('create-account-wrapper'))
	}
	update(e){
		var element = e.target.name
		console.log(e.target.value)
		this.user[element] = e.target.value
	}
	componentDidMount(){
		
	}
	render(){
		return(
			<div id='create-account-wrapper'>
				<div id='create-account-container'>
					<h1>First Name</h1>
					<input type='text' name='firstName' onChange={this.update.bind(this)}/>
					<h1>Last Name</h1>
					<input type='text' name='lastName' onChange={this.update.bind(this)}/>
					<h1> Email </h1>
					<input type='email' name='email' onChange={this.update.bind(this)}/>
					<h1>Create a Password</h1>
					<input type='password' name='firstPassword'/>
					<h1> Re-Enter Password </h1>
					<input type='password' name='password' onChange={this.update.bind(this)}/>
					<br/>
					<button value='basic' onClick={this.start}> Start Questionaire </button>
				</div>
				
			</div>
			)
	}
}
export default CreateAccount