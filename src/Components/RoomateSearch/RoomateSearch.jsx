import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./RoomateSearch.css"
import SearchResults from './SearchResults.jsx'
class RoomateSearch extends React.Component {
	constructor(props){
		super(props)
		this.state = {

	}
	this.ReactDOM = ReactDOM;
	this.update = this.update.bind(this)
	this.search = this.search.bind(this)

	}
	search(){
		
	}
	update(){

	}
	componentDidMount(){
		var roommates = [{name:'Stanton',url:'/stanton'},{name:"Ricky", url:'/ricky'},{name:"Dan", url:'/dan'}]
		this.ReactDOM.render(<SearchResults roommates={roommates}/>, document.getElementById('results'))

	}
	render(){
		return(
			<div id='search-wrapper'>
				<div id='search-container'>
					<div id='filter-container'>
						<button id='filter-button'> ▼ </button><br/>
						<label>Cleanliness of Roomate</label>
						<input name='first-preference' type='range' min='1' max='5' onInput={this.update.bind(this)} />
						<br/>
						<label> Do you smoke? </label>
						<select>
							<option>No</option>
							<option>Tobacco/Hookah</option>
							<option>Marijuana</option>
							<option>Other</option>
						</select>
						<br/>
						<label> What is your relationship status?</label>
						<select>
							<option value='Relationship'> Relationship</option>
							<option value='Single'> Single</option>
							<option value="It's Complicated" >It's Complicated</option>
						</select>
						<br/>
						<label>My future roommate has as</label>
						<select>
							<option>Dogs</option>
							<option>Cats</option>
							<option>Reptiles</option>
							<option>Fish</option>
							<option> Rodent </option>
						</select>	
						<br/>
						<label>My future roomate  </label>
						<select>
							<option value='yes'> snores</option>
							<option value='no'> does not snore</option>
						</select>
						<br/>
						<label> Are you okay with social gatherings at your house? </label>
						<select>
							<option name='gatherings' value='Occasionally (Breaks/Weekends)'>Occasionally</option>
							<option name='gatherings' value='No'> No</option>
							<option name='gatherings' value='Yes'> Yes</option>
						</select>
						<br/>
						<label>What time do you usually go to bed? </label>
						<input type='time'/>
						<br/>
						<label>Alcohol Friendly?</label>
						<select>
							<option name='drink' value='yes'> Yes </option>
							<option name='drink' value='no'> No </option>
						</select>
						<br/>
						<label>How often do you cook or use the kitchen?</label>
						<select>
							<option name='kitchen' value='barely'> Barely </option>
							<option name='kitchen' value='frequently'> Frequently </option>
							<option name='kitchen' value='everyday'> Everyday </option>
						</select>
						<br/>
						<button id='search-filter-button' onClick={this.search}> Search </button>
					</div>		
					<div id='results'>
					</div>
				</div>
			</div>
			)
	}
}
export default RoomateSearch