import React, {Component} from "react";
import ReactDOM from "react-dom";
class Roommate extends React.Component {
	constructor(props){
		super(props)
		this.name = props.name
		this.url = props.url
		this.state = {

	}
	this.ReactDOM = ReactDOM;
	}
	componentDidMount(){
		
	}
	render(){
		return(
			<div id='roommate-box'>
				<img src={this.url} id='roommate-pic'/>
				<h1>{this.name}</h1>
			</div>
			)
	}
}
export default Roommate