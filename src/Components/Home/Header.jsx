import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./Header.css"
import SearchPage from '../Search/Search.jsx'
class Header extends React.Component {
	constructor(props){
		super(props)
		this.state = {

	}
	this.ReactDOM = ReactDOM;
	this.user = props.user
	this.settings = this.settings.bind(this)
	this.messages = this.messages.bind(this)
	this.search = this.search.bind(this)
	}
	settings(){

	}
	messages(){

	}
	search(){
		this.ReactDOM.render(<Search user={this.user}/>, document.getElementById('home-container'))
	}
	componentDidMount(){
		
	}
	render(){
		return(
			<div id='header-wrapper'>
				<div id='header-container'>
					<img src='/transparent' id='header-logo'/>
					<div id='header-buttons'>
						<button onClick={this.search}>🔍</button>
						<button onClick={this.messages}>✉️</button>
						<button onClick={this.settings}>⚙︎</button>
					</div>
					
				</div>
			</div>
			)
	}
}
export default Header