import React, {Component} from "react";
import ReactDOM from "react-dom";
import Questionaire from './Questionaire.jsx'
class HousingPreferences extends React.Component {
	constructor(props){
		super(props)
		this.state = {

	}
	this.ReactDOM = ReactDOM;
	this.user = props.user
	this.beginQuestionaire = this.beginQuestionaire.bind(this)
	this.update = this.update.bind(this)
	this.changeBudget = this.changeBudget.bind(this)
	}
	changeBudget(e){
		var target = e.target.value
		document.getElementById('budget').innerHTML = "$"+target
	}
	update(e){
		var target = e.target.name
		//update in user object
	}
	beginQuestionaire(){
		//confirm all data in fields before rendering
		this.ReactDOM.render(<Questionaire user={this.user}/>,document.getElementById('create-account-wrapper'))
	}
	componentDidMount(){
		
	}
	render(){
		return(
			<div id='preferences-wrapper'>

				<div id='preferences-container'>
				<h2> Housing Preferences </h2>
					<h1>I'm a </h1>
					<select>
						<option>Male</option>
						<option>Female</option>
						<option> Transgender Female </option>
						<option> Transgender Male </option>
					</select>
					<h1>Looking for a </h1>
					<input type='number' min='1'/><label>Bedroom</label>
					<br/>
					<select>
						<option value='Apartment'>Apartment</option>
						<option value='House'> House </option>
					</select>
					<h1>Located in </h1>
					<input type='text' placeholder='Los Angeles'/>
					<h1> My monthly budget is </h1>
					<input onInput={this.changeBudget} type='range' min='300' max='5000'/>
					<label id='budget'> 300$ </label> 
					<div id='preferred-amenities'>
						<h1> Preferred Amenities </h1>
						<div id='amenities'>
							<input type='radio' name='amenity-1' value='washer-dryer'/>In-Unit Washer Dryer
							<input type='radio' name='amenity-2' value='hot-tub'/>Hot Tub
							<input type='radio' name='amenity-3' value='wifi'/>Wifi Included
							<input type='radio' name='amenity-4' value='month'/>Month to Month
							<input type='radio' name='amenity-5' value='gym'/>Gym
							<input type='radio' name='amenity-6' value='pets'/>Pets Allowed
							<input type='radio' name='amenity-7' value='ac'/>Air Conditioning
							<input type='radio' name='amenity-8' value='pool'/>Pool
							<input type='radio' name='amenity-9' value='backyard'/>Backyard
							<input type='radio' name='amenity-10' value='bathroom'/>Private Bathroom
							<input type='radio' name='amenity-11' value='utilities'/>Utilities Included
							<input type='radio' name='amenity-12' value='parking'/>Parking Included
						</div>
					</div>
					<button onClick={this.beginQuestionaire}>Continue</button>
				</div>
			</div>
			)
	}
}
export default HousingPreferences