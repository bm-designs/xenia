import React, {Component} from "react";
import ReactDOM from "react-dom";
import Questionaire from './Questionaire.jsx'
class HousingListing extends React.Component {
	constructor(props){
		super(props)
		this.state = {

	}
	this.user = props.user
	this.ReactDOM = ReactDOM;
	this.continue = this.continue.bind(this)
	}
	continue(){
		this.ReactDOM.render(<Questionaire user={this.user}/>, document.getElementById('create-account-wrapper'))
	}
	componentDidMount(){
		
	}
	render(){
		return(
			<div id='housingListing-wrapper'>
				<h1>List your Housing</h1>
				<div id='housingListing-container'>
					<div id='housingListing-left'>
						<label>Title</label><br/>
						<input type='text' name='title'/><br/>
						<label>Price</label><br/>
						<input type='number' name='price'/><br/>
						<label>Living Type</label><br/>
						<select>
							<option value='House'>House</option>
							<option value='Apartment'>Apartment</option>
							<option value='Room'>Room</option>
						</select><br/>
						<label>Rooms</label><br/>
						<input type='number'/><br/>
						<label> Bath(s) </label><br/>
						<input type='number'/><br/>
						<label>Amenities</label><br/>
						<input type='text' name='amenities'/><br/>
						<label>City and Address</label><br/>
						<input type='text' name='address'/><br/>
						<label>Description</label><br/>
						<textarea name='descrption'></textarea><br/>
					</div>
					<div id='housingListing-images'>
						<div id='gallery'>
							<input type='file' multiple='multiple' accept='image' id='housingListing-uploadpics'/>
						</div>
					</div>
				</div>
				<button id='housingListing-continue' onClick={this.continue}>Continue/Skip</button>
			</div>
			)
	}
}
export default HousingListing