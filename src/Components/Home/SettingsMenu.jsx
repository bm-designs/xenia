import React, {Component} from "react";
import ReactDOM from "react-dom";
class SettingsMenu extends React.Component {
	constructor(props){
		super(props)
		this.state = {

	}
	this.ReactDOM = ReactDOM;
	this.user = props.user
	this.logout = this.logout.bind(this)
	this.profileSettings = this.profileSettings.bind(this)

	}
	logout(){

	}
	profileSettings(){

	}
	componentDidMount(){
		
	}
	render(){
		return(
			<div id='settings-menu'>
				<button onClick={this.logout}>Logout</button>
				<button onClick={this.profileSettings}>Settings</button>
			</div>
			)
	}
}
export default SettingsMenu
