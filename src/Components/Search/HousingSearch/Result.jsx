import React, {Component} from "react";
import ReactDOM from "react-dom";
class result extends React.Component {
	constructor(props){
		super(props)
		this.state = {

		}
		this.details = props.details //type situation location budget frequency, amenities, img
		this.ReactDOM = ReactDOM;
	}
	componentDidMount(){
		
	}
	render(){
		return(
			<div id='result-container'>
				<img src={this.details.url}/>
				<div id='results-details'>
					<p> {this.details.bedroom}</p><p>{this.details.bathroom}</p><p>{this.details.location}</p><br/>
					<p>{'$'+this.details.budget} Monthly</p>
					<div id='amenity-description'>
						<label>Amenities:</label>
						<p>{this.details.amenities}</p>
					</div>
				</div>
			</div>
			)
	}
}
export default result