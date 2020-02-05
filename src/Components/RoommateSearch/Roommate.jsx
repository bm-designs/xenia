import React, {Component} from "react";
import ReactDOM from "react-dom";
class Roommate extends React.Component {
	constructor(props){
		super(props)
		this.roommate = props.roommate
		if (props.saved){
			this.contact = this.roommate.contactInfo
			if (this.roommate.contact=='Facebook'){
				this.contact = 'Facebook: ' +this.contact
			}
		}
		else {
			this.contact = this.roommate.contact
		}
		this.state = {

	}
	this.ReactDOM = ReactDOM;
	}
	componentDidMount(){

		// if (this.roommate.housing == false) {
		// 	document.getElementById('roommate-pic').style.border = 'solid 10px red'
		// }
		// if (this.roommate.housing == true) {
		// 	document.getElementById('roommate-pic').style.border = 'solid 10px green'
		// }
	}
	render(){
		
		return(
			<div id='roommate-box'>
				<img src={this.roommate.url} id='roommate-pic'/>
				<h1>{this.roommate.name}</h1>
				<h2>{this.roommate.age + ", "}</h2><h2>{this.roommate.location}</h2>
				<p>{this.roommate.bio}</p>
				<p id='contact'>{this.contact}</p>
			</div>
			)
	}
}
export default Roommate