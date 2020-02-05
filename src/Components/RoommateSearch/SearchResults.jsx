import React, {Component} from "react";
import ReactDOM from "react-dom";
import Roommate from './Roommate'
class SearchResults extends React.Component {
	constructor(props){
		super(props)
		this.state = {

		}
		this.roommates = props.roommates
		this.preferences = []
		this.nextRoommate = this.nextRoommate.bind(this)
		this.previousRoommate = this.previousRoommate.bind(this)
		this.saveRoommate = this.saveRoommate.bind(this)
		this.removeRoommate = this.removeRoommate.bind(this)
		this.currentRoommate = 0
		this.ReactDOM = ReactDOM;
	}
	previousRoommate(){
		this.currentRoommate = this.currentRoommate - 1
		console.log(this.currentRoommate)
		if (this.currentRoommate>0){
			console.log(this.roommates[this.currentRoommate])
			this.ReactDOM.render(<Roommate roommate={this.roommates[this.currentRoommate - 1]}/>, document.getElementById('roommate-container'))
			this.currentRoommate -=1
		}
		else {
			this.currentRoommate=0
			console.log(this.roommates[this.currentRoommate])
			this.ReactDOM.render(<Roommate roommate={this.roommates[this.currentRoommate]} />, document.getElementById('roommate-container'))

		}
		
	}
	nextRoommate(){
		this.currentRoommate+=1
		console.log(this.currentRoommate)
		if (this.currentRoommate>=this.roommates.length - 1){
			this.currentRoommate=0
			console.log(this.roommates[this.currentRoommate])
			this.ReactDOM.render(<Roommate roommate={this.roommates[this.currentRoommate]} />, document.getElementById('roommate-container'))
		} 
		else {
			console.log(this.roommates[this.currentRoommate])
			this.ReactDOM.render(<Roommate roommate={this.roommates[this.currentRoommate]} />, document.getElementById('roommate-container'))

		}
	}
	saveRoommate(){
		console.log(this.preferences)
		this.preferences.push(this.roommates[this.currentRoommate])
		console.log(this.preferences)
		this.removeRoommate()
		this.ReactDOM.render(<Roommate roommate={this.roommates[this.currentRoommate]}/>, document.getElementById('roommate-container'))
	}
	removeRoommate(){
		var newRoommates =[]
		//remove current remoate from list
		for (var i=0; i<=this.roommates.length-1;i++){
			if (i==this.currentRoommate){
				continue
			} else {
				newRoommates.push(this.roommates[i])
			}
		}
		this.roommates = newRoommates;
		if (this.currentRoommate>0){
			this.currentRoommate = this.currentRoommate - 1 
		}
		this.ReactDOM.render(<Roommate roommate={this.roommates[this.currentRoommate]}/>, document.getElementById('roommate-container'))
		console.log(this.roomates)
	}
	componentDidMount(){
		
	}
	render(){
		return(
			<div id='results-wrapper'>
				<div id='remove-container'>
					<button id='remove-roommate' onClick={this.removeRoommate}><img src='/cancel' /></button>
				</div>
				<div id='roommate-container'>
					<Roommate roommate={this.roommates[0]}/>
				</div>
				<div id='save-container'>
					<button id='save-roommate' onClick={this.saveRoommate}><img src='/check'/></button>
				</div>
				<div style={{width:'20vw',display:'block',marginLeft:'auto',marginRight:'auto'}}>
					<button id='previous-roommate' onClick={this.previousRoommate}> ← </button>
					<button id='next-roommate' onClick={this.nextRoommate}> → </button>
				</div>
				
				
				
			</div>
			)
	}
}
export default SearchResults