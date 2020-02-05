import React, {Component} from "react";
import ReactDOM from "react-dom";
import HousingListing from './HousingListing.jsx'
class HousingPreferences extends React.Component {
	constructor(props){
		super(props)
		this.state = {

	}
	this.ReactDOM = ReactDOM;
	this.user = props.user
	this.housingListing = this.housingListing.bind(this)
	this.update = this.update.bind(this)
	this.changeBudget = this.changeBudget.bind(this)
	this.checkAmenity = this.checkAmenity.bind(this)
	}
	changeBudget(e){
		var target = e.target.value
		document.getElementById('budget').innerHTML = "$"+target
	}
	update(e){
		var target = e.target.name
		//update in user object

	}
	housingListing(){
		//confirm all data in fields before rendering
		this.ReactDOM.render(<HousingListing user={this.user}/>,document.getElementById('create-account-wrapper'))
	}
	checkAmenity(e){
		// var amenity = document.getElementById(e.target.id)
		if (e.target.checked == true){
			console.log(e.target.className)
			e.target.setAttribute('checked', false)
		}
		
	}
	componentDidMount(){
		var amenityListeners = document.getElementsByClassName('amenityListener')
		for (var amenity in amenityListeners){
			console.log(amenity)
			if(amenity.match(/^[0-9]/)){
				amenityListeners[amenity].addEventListener('mouseup', this.checkAmenity.bind(this))
			}
			else {
				break
			}
		}
		// .addEventListener('mouseup',this.checkAmenity.bind(this))
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
						<form id='amenities'>
							<table>
								<tbody>
									<tr>
										<td>
											<input class='amenityListener' type='checkbox' id='amenity-1' value='washer-dryer'/>In-Unit Washer Dryer
										</td>
										<td>
											<input class='amenityListener' type='checkbox' id='amenity-2' value='hot-tub'/>Hot Tub
										</td>
										<td>
											<input class='amenityListener' type='checkbox' id='amenity-3' value='wifi'/>Wifi Included 
										</td>
										<td>
											<input class='amenityListener' type='checkbox' id='amenity-4' value='month'/>Month to Month 
										</td>
										<td>
											<input class='amenityListener' type='checkbox' id='amenity-5' value='gym'/>Gym 
										</td>
										<td>
											<input class='amenityListener' type='checkbox' id='amenity-6' value='pets'/>Pets Allowed 
										</td>
									</tr>
									<tr>
										<td>
											<input class='amenityListener' type='checkbox' id='amenity-7' value='ac'/>Air Conditioning
										</td>
										<td>
											<input class='amenityListener' type='checkbox' id='amenity-8' value='pool'/>Swimming Pool
										</td>
										<td>
											<input class='amenityListener' type='checkbox' id='amenity-9' value='backyard'/>Backyard
										</td>
										<td>
											<input class='amenityListener' type='checkbox' id='amenity-10' value='bathroom'/>Private Bathroom
										</td>
										<td>
											<input class='amenityListener' type='checkbox' id='amenity-11' value='utilities'/>Utilities Included
										</td>
										<td>
											<input class='amenityListener' type='checkbox' id='amenity-12' value='parking'/>Parking Included
										</td>
									</tr>
								</tbody>
							</table>
						</form>
					</div>
					<button onClick={this.housingListing}>Continue</button>
				</div>
			</div>
			)
	}
}
export default HousingPreferences