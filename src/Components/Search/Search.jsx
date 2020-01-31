import React, {Component} from "react";
import ReactDOM from "react-dom";
import RoommateSearch from '../RoommateSearch/RoommateSearch.jsx'
import HousingSearch from './HousingSearch/HousingSearch.jsx'
import "./Search.css"
class Search extends React.Component {
	constructor(props){
		super(props)
		this.state = {

	}
	this.ReactDOM = ReactDOM;
	this.searchHousing = this.searchHousing.bind(this)
	this.searchRoommates = this.searchRoommates.bind(this)
	}
	searchHousing(){
		this.ReactDOM.render(<HousingSearch/>, document.getElementById('search-container'))
	}
	searchRoommates(){
		this.ReactDOM.render(<RoommateSearch/>, document.getElementById('search-container'))
	}
	componentDidMount(){
		
	}
	render(){
		return(
			<div id='search-wrapper'>
				<div id='search-toggle'>
					<img src='/user' onClick={this.searchRoommates}/>
					<img src='/casa'onClick={this.searchHousing} />
				</div>
				<div id='search-container'>
					<HousingSearch/>
				</div>
			</div>
			)
	}
}
export default Search