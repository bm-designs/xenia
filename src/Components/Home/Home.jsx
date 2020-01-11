import React, {Component} from "react";
import ReactDOM from "react-dom";
import RoomateSearch from '../RoomateSearch/RoomateSearch.jsx';
import Header from './Header.jsx'
import "./Home.css"
class Home extends React.Component {
	constructor(props){
		super(props)
		this.state = {

		}
	this.ReactDOM = ReactDOM;
	}
	componentDidMount(){
		
	}
	render(){
		return(
			<div id='home-wrapper'>
				<Header/>
				<div id='home-container'>
					<RoomateSearch/>
				</div>
			</div>
			)
	}
}
export default Home