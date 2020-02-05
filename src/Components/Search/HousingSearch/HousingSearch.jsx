import React, {Component} from "react";
import ReactDOM from "react-dom";
import Result from './Result.jsx'
import "./HousingSearch.css"
class HousingSearch extends React.Component {
	constructor(props){
		super(props)
		this.state = {

	}
	this.ReactDOM = ReactDOM;
	this.searchQuery = {}
	this.search = this.search.bind(this)
	this.updateSearch = this.updateSearch.bind(this)
	this.searchCity = this.searchCity.bind(this)
	}

	updateSearch(e){
		var value = e.target.value
		var key = e.target.name
		if (key in this.searchQuery){
			//remove from dictionary
			this.searchQuery[key]=''
		} else {
			this.searchQuery[key]=value
		}
	}
	search(){

	}
	searchCity(){

	}
	componentDidMount(){
		var details = {
			bedroom: "2 Bedroom",
			bathroom: '1 Bathroom',
			situation: 'Apartment',
			location: 'Westwood, CA',
			url: '/listing0',
			budget: 2400,
			amenities: "Full Kitchen, Pool, Washer/Dryer, Pool Table"
		}
		this.ReactDOM.render(<Result details={details}/>, document.getElementById('housingsearch-results-container'))
	}
	render(){
		return(
			<div id='housingsearch-wrapper'>
				<div id='housingsearch-container'>
					<div id='housingsearch-filter'>
						<label>Listing Type:</label>
						<select name='type'>
							<option value='House'>House</option>
							<option value='Apartment'>Apartment</option>
							<option value='Room'>Room</option>
						</select><br/>
						<label>Located in:</label>
						<input type='text' name='location' onInput={this.searchCity.bind(this)}/><br/>
						<label> Budget: </label>
						<input type='range' min='0' max='5000' name='budget'/><br/>
						<label> Preferred Amenities: </label>
						<div id='amenities'>
							<input onInput={this.updateSearch.bind(this)} type='checkbox' name='amenity-1' value='washer-dryer'/>In-Unit Washer Dryer<br/>
							<input onInput={this.updateSearch.bind(this)} type='checkbox' name='amenity-2' value='hot-tub'/>Hot Tub<br/>
							<input onInput={this.updateSearch.bind(this)} type='checkbox' name='amenity-3' value='wifi'/>Wifi Included<br/>
							<input onInput={this.updateSearch.bind(this)} type='checkbox' name='amenity-4' value='month'/>Month to Month<br/>
							<input onInput={this.updateSearch.bind(this)} type='checkbox' name='amenity-5' value='gym'/>Gym<br/>
							<input onInput={this.updateSearch.bind(this)} type='checkbox' name='amenity-6' value='pets'/>Pets Allowed<br/>
							<input onInput={this.updateSearch.bind(this)} type='checkbox' name='amenity-7' value='ac'/>Air Conditioning<br/>
							<input onInput={this.updateSearch.bind(this)} type='checkbox' name='amenity-8' value='pool'/>Pool<br/>
							<input onInput={this.updateSearch.bind(this)} type='checkbox' name='amenity-9' value='backyard'/>Backyard<br/>
							<input onInput={this.updateSearch.bind(this)} type='checkbox' name='amenity-10' value='bathroom'/>Private Bathroom<br/>
							<input onInput={this.updateSearch.bind(this)} type='checkbox' name='amenity-11' value='utilities'/>Utilities Included<br/>
							<input onInput={this.updateSearch.bind(this)} type='checkbox' name='amenity-12' value='parking'/>Parking Included<br/>
						</div>
						<button onClick={this.search}> Search </button>
					</div>
					<div id='housingsearch-results-wrapper'>
						<label> Filter Results </label>
						<div id='housingsearch-results-container'>
							
						</div>
					</div>
				</div>
			</div>
			)
	}
}
export default HousingSearch