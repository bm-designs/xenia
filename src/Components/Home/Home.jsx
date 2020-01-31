import React, {Component} from "react";
import ReactDOM from "react-dom";
import Search from '../Search/Search.jsx';
import Header from './Header.jsx'
import "./Home.css"
class Home extends React.Component {
	constructor(props){
		super(props)
		this.state = {

		}
		this.user = props.user
	this.ReactDOM = ReactDOM;
	}
	componentDidMount(){
		
	}
	render(){
		return(
			<div id='home-wrapper'>
				<Header user={this.user}/>
				<div id='home-container'>
					<Search/>
				</div>
			</div>
			)
	}
}
export default Home