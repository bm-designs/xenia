import React, {Component} from "react";
import ReactDOM from "react-dom";
import Roommate from './Roommate'
class SearchResults extends React.Component {
	constructor(props){
		super(props)
		this.state = {

		}
		this.roommates = props.roommates
		this.nextRoommate = this.nextRoommate.bind(this)
		this.previousRoommate = this.previousRoommate.bind(this)
		this.currentRoommate = 0
		this.ReactDOM = ReactDOM;
	}
	previousRoommate(){
		this.currentRoommate-=1
		if (this.currentRoommate<0){
			this.currentRoommate=0
		}
		this.ReactDOM.render(<Roommate name={this.roommates[this.currentRoommate].name} url={this.roommates[this.currentRoommate].url}/>, document.getElementById('roommate-container'))
	}
	nextRoommate(){
		this.currentRoommate+=1
		if (this.currentRoommate>=this.roommates.length){
			this.currentRoommate=this.roomates.length-1
		}
		this.ReactDOM.render(<Roommate name={this.roommates[this.currentRoommate].name} url={this.roommates[this.currentRoommate].url}/>, document.getElementById('roommate-container'))
	}
	componentDidMount(){
		
	}
	render(){
		return(
			<div>
				<div id='roommate-container'>
					<Roommate name={this.roommates[0].name} url={this.roommates[0].url}/>
				</div>
				<button id='previous-roommate' onClick={this.previousRoommate}> ← </button>
				<button id='next-roommate' onClick={this.nextRoommate}> → </button>
			</div>
			)
	}
}
export default SearchResults