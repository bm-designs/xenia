import React, {Component} from "react";
import ReactDOM from "react-dom";
import SettingsMenu from './SettingsMenu.jsx'
import "./Header.css"
import Profile from '../Profile/Profile.jsx'
import Search from '../Search/Search.jsx'
class Header extends React.Component {
	constructor(props){
		super(props)
		this.state = {

	}
	this.ReactDOM = ReactDOM;
	this.user = props.user
	this.show = true
	this.settings = this.settings.bind(this)
	this.profile = this.profile.bind(this)
	this.search = this.search.bind(this)
	}
	settings(){
		if (this.show==true){
			this.show = false
			document.getElementById('settings-menu-buffer').style.visibility = 'visible'
		} else {
			document.getElementById('settings-menu-buffer').style.visibility = 'hidden'
			this.show = true
		}
	}
	profile(){
		this.ReactDOM.render(<Profile user={this.user}/>, document.getElementById('home-container') )

	}
	search(){
		this.ReactDOM.render(<Search user={this.user}/>, document.getElementById('home-container'))
	}
	componentDidMount(){
		this.ReactDOM.render(<SettingsMenu user={this.user}/>, document.getElementById('settings-menu-buffer'))
	}
	render(){
		return(
			<div id='header-wrapper'>
				<div id='header-container'>
					<img src='/transparent' id='header-logo'/>
					<div id='header-buttons'>
						<button onClick={this.search}>🔍</button>
						<button onClick={this.profile}>🏠</button>
						<button onClick={this.settings}>⚙︎</button>
					</div>
					<div id='settings-menu-buffer'>
						
					</div>
					
				</div>
			</div>
			)
	}
}
export default Header