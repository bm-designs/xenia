import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./CreateAccount.css"
class CreateAccount extends React.Component {
	constructor(props){
		super(props)
		this.state = {

	}
	this.ReactDOM = ReactDOM;
	this.nextCard = this.nextCard.bind(this)
	}
	nextCard(e){
		var card = e.target.val
		console.log(card)
	}
	componentDidMount(){
		
	}
	render(){
		return(
			<div class='create-account-wrapper'>
				<div id='create-account-container'>
					<h1>First Name</h1>
					<input type='text' name='firstName'/>
					<h1>Last Name</h1>
					<input type='text' name='lastName'/>
					<h1> Email </h1>
					<input type='email' name='email'/>
					<h1>Create a Password</h1>
					<input type='password' name='firstPassword'/>
					<h1> Re-Enter Password </h1>
					<input type='password' name='password'/>
					<br/>
					<button value='basic' onClick={this.nextCard.bind(this)}> Start Questionaire </button>
				</div>
			</div>
			)
	}
}
export default CreateAccount