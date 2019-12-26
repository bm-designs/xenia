import React, {Component} from "react";
import ReactDOM from "react-dom";
class Questionaire extends React.Component {
	constructor(props){
		super(props)
		this.state = {

	}
	this.ReactDOM = ReactDOM;
	}
	componentDidMount(){
		
	}
	render(){
		return(
			<div id='questionaire-container'>
				<img id='questionaire-logo' src='transparent'/>
				<div id='card-1' class='questionaire-card'>
					<h1> How clean do you keep your living space? </h1>
					<input type='range' min='1' max='5'/> 
				</div>
				<div id='card-2' class='questionaire-card'>
					<h1> Do you smoke? </h1>
					<select>
						<option>No</option>
						<option>Tobacco/Hookah</option>
						<option>Marijuana</option>
						<option>Other</option>
					</select>
				</div>
				<div id='card-3' class='questionaire-card'>	
					<h1> What is your relationship status?</h1>
					<input type='radio' name='r-status' value='Single'/> Single
					<input type='radio' name='r-status' value='Relationship'/> Relationship
					<input type='radio' name='r-status' value="It's Complicated"/> It's Complicated
				</div>
				<div id='card-4' class='questionaire-card'>
					<h1> Do you have any pets? </h1>
					<select>
						<option>Dogs</option>
						<option>Cats</option>
						<option>Reptiles</option>
						<option>Fish</option>
						<option> Rodent </option>
					</select>
					<input type='number'/>
				</div>
				<div id='card-5' class='questionaire-card'>
					<h1>Do you snore ? </h1>
					<input type='radio' name='snore' value='no'/>
					<input type='radio' name='snore' value='yes'/>
				</div>
				<div id='card-6' class='questionaire-card'>
					<h1> Are you okay with social gatherings at your house? </h1>
					<input type='radio' name='gatherings' value='Occasionally (Breaks/Weekends)'/>
					<input type='radio' name='gatherings' value='No'/>
					<input type='radio' name='gatherings' value='Yes'/>
				</div>
				<div id='card-7' class='questionaire-card'>
					<h1>What time do you usually go to bed? </h1>
					<input type='time'/>
				</div>
				<div id='card-8' class='questionaire-card'>
					<h1>Do you drink alcohol</h1>
					<input type='radio' name='drink' value='yes'/> Yes
					<input type='radio' name='drink' value='no'/> No
				</div>
				<div id='card-9' class='questionaire-card'>
					<h1>How often do you cook or use the kitchen?</h1>
					<input type='radio' name='kitchen' value='barely'/> Barely
					<input type='radio' name='kitchen' value='frequently'/> Frequently
					<input type='radio' name='kitchen' value='everyday'/> Everyday
				</div>
				<div id='card-10' class='questionaire-card'>
					<h1> What are some of your hobbies?</h1>
					<input type='text' name='hobbies'/>
				</div>
				<div id='card-11' class='questionaire-card'>
					<h1> My roommates absolutely cannot....</h1>
					<input type='text' name='nonos'/>
				</div>
				<div id='card-12' class='questionaire-card'>
					<h1> My roommates abslutely must....</h1>
					<input type='text' name='musts'/>
				</div>
			</div>
			)
	}
}
export default Questionaire