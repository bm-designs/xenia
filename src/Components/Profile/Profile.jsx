import React, {Component} from "react";
import ReactDOM from "react-dom";
import Roommate from '../RoommateSearch/Roommate.jsx'
import Result from '../Search/HousingSearch/Result.jsx'
import "./Profile.css"
class Profile extends React.Component {
	constructor(props){
		super(props)
		this.state = {

	}
	this.ReactDOM = ReactDOM;
	this.user = props.user
	this.savedRoommates = []
	this.savedHousing = []
	this.populate = this.populate.bind(this)
	}
	populate(roommates,housing){
		console.log(roommates,housing)
		for (var roommate in roommates){
			var newRoommate = document.createElement('div')
			newRoommate.id = 'roommate-buffer'+roommate
			newRoommate.className = 'buffer'
			document.getElementById('saved-roommates').appendChild(newRoommate)
			this.ReactDOM.render(<Roommate roommate={roommates[roommate]}/>,document.getElementById('roommate-buffer'+roommate))
		}
		for (var house in housing) {
			var newHousing = document.createElement('div')
			newHousing.id = 'housing-buffer'+house
			newHousing.className = 'tuffer'
			document.getElementById('saved-housing').appendChild(newHousing)
			this.ReactDOM.render(<Result details={housing[house]}/>,document.getElementById('housing-buffer'+house))
		}
	}
	componentDidMount(){
		var roommates = [{
			name:'Stanton', 
			age:'21', 
			location:'San Francisco' ,
			url:'/stanton', 
			housing:true, 
			bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan nisi ut nibh varius porta. Nulla volutpat diam eget sapien pulvinar, at fringilla erat blandit. Proin efficitur quam a euismod gravida. Mauris consectetur sollicitudin ligula, in consectetur massa ornare vestibulum. Morbi ac molestie magna. Duis nec rutrum nulla. Nulla id tincidunt velit. Sed at gravida odio, vel scelerisque odio. Cras pretium eu elit sed varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur at blandit lectus.'
			},
			{
				name:"Ricky", 
				age:'20', 
				housing:false, 
				location: 'Los Angeles', 
				url:'/ricky', 
				bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan nisi ut nibh varius porta. Nulla volutpat diam eget sapien pulvinar, at fringilla erat blandit. Proin efficitur quam a euismod gravida. Mauris consectetur sollicitudin ligula, in consectetur massa ornare vestibulum. Morbi ac molestie magna. Duis nec rutrum nulla. Nulla id tincidunt velit. Sed at gravida odio, vel scelerisque odio. Cras pretium eu elit sed varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur at blandit lectus.'
			},
			{
				name:"Dan", 
				age: '21',
				url:'/dan', 
				housing:true, 
				location: 'Mountain View', 
				bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan nisi ut nibh varius porta. Nulla volutpat diam eget sapien pulvinar, at fringilla erat blandit. Proin efficitur quam a euismod gravida. Mauris consectetur sollicitudin ligula, in consectetur massa ornare vestibulum. Morbi ac molestie magna. Duis nec rutrum nulla. Nulla id tincidunt velit. Sed at gravida odio, vel scelerisque odio. Cras pretium eu elit sed varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur at blandit lectus.'
			},
			{
				name:"Dan", 
				age: '21',
				url:'/dan', 
				housing:true, 
				location: 'Mountain View', 
				bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan nisi ut nibh varius porta. Nulla volutpat diam eget sapien pulvinar, at fringilla erat blandit. Proin efficitur quam a euismod gravida. Mauris consectetur sollicitudin ligula, in consectetur massa ornare vestibulum. Morbi ac molestie magna. Duis nec rutrum nulla. Nulla id tincidunt velit. Sed at gravida odio, vel scelerisque odio. Cras pretium eu elit sed varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur at blandit lectus.'
			},
			{
				name:"Dan", 
				age: '21',
				url:'/dan', 
				housing:true, 
				location: 'Mountain View', 
				bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan nisi ut nibh varius porta. Nulla volutpat diam eget sapien pulvinar, at fringilla erat blandit. Proin efficitur quam a euismod gravida. Mauris consectetur sollicitudin ligula, in consectetur massa ornare vestibulum. Morbi ac molestie magna. Duis nec rutrum nulla. Nulla id tincidunt velit. Sed at gravida odio, vel scelerisque odio. Cras pretium eu elit sed varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur at blandit lectus.'
			},
			{
				name:"Dan", 
				age: '21',
				url:'/dan', 
				housing:true, 
				location: 'Mountain View', 
				bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan nisi ut nibh varius porta. Nulla volutpat diam eget sapien pulvinar, at fringilla erat blandit. Proin efficitur quam a euismod gravida. Mauris consectetur sollicitudin ligula, in consectetur massa ornare vestibulum. Morbi ac molestie magna. Duis nec rutrum nulla. Nulla id tincidunt velit. Sed at gravida odio, vel scelerisque odio. Cras pretium eu elit sed varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur at blandit lectus.'
			},
			{
				name:"Dan", 
				age: '21',
				url:'/dan', 
				housing:true, 
				location: 'Mountain View', 
				bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan nisi ut nibh varius porta. Nulla volutpat diam eget sapien pulvinar, at fringilla erat blandit. Proin efficitur quam a euismod gravida. Mauris consectetur sollicitudin ligula, in consectetur massa ornare vestibulum. Morbi ac molestie magna. Duis nec rutrum nulla. Nulla id tincidunt velit. Sed at gravida odio, vel scelerisque odio. Cras pretium eu elit sed varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur at blandit lectus.'
			}

			]
		var housing = [{
			bedroom: "2 Bedroom",
			bathroom: '1 Bathroom',
			situation: 'Apartment',
			location: 'Westwood, CA',
			url: '/listing0',
			budget: 2400,
			amenities: "Full Kitchen, Pool, Washer/Dryer, Pool Table"
		},
		{
			bedroom: "3 Bedroom",
			bathroom: '2 Bathroom',
			situation: 'House',
			location: 'Los Angeles, CA',
			url: '/listing0',
			budget: 2700,
			amenities: "Full Kitchen, Washer/Dryer"
		},
		{
			bedroom: "1 Bedroom",
			bathroom: '1 Bathroom',
			situation: 'Apartment',
			location: 'Berkeley, CA',
			url: '/listing0',
			budget: 1800,
			amenities: "Full Kitchen, A/C Unit"
		}
		]
		this.populate(roommates,housing)
	}
	render(){
		return(
			<div id='profile-wrapper'>
				<div id='profile-container'>
					<div id='saved-content'>
						<h1 id='profile-heading'>Saved Roommates</h1>
						<div id='saved-roommates'>
						</div>
						<h1 id='profile-heading'>Saved Housing</h1>
						<div id='saved-housing'>
						</div>
					</div>
					<div id='profile-info-container'>
						<div id='profile-info'>
						</div>
					</div>
				</div>
			</div>
			)
	}
}
export default Profile
