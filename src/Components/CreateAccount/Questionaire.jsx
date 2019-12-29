import React, {Component} from "react";
import ReactDOM from "react-dom";
class Questionaire extends React.Component {
	constructor(props){
		super(props)
		this.state = {

	}
	this.ReactDOM = ReactDOM;
	this.user = props.user
	this.currentCard = 'card-1'
	this.nextCard = this.nextCard.bind(this)
	this.previousCard = this.previousCard.bind(this)
	this.update = this.update.bind(this)
	this.finish = this.finish.bind(this)

	}
	finish(){
		//log out results of the questionaire
	}
	previousCard(){
		if(Number(this.currentCard.split('-')[1])>1){
			var previousCard = 'card-'+String(Number(this.currentCard.split('-')[1])-1)
			document.getElementById(previousCard).style.marginLeft ='';
			var newCard = Number(this.currentCard.split('-')[1]) - 1
			this.currentCard = 'card-'+String(newCard)
			console.log(this.currentCard)
		} else {
			alert('Start of Questionaire!')
		}
	}
	nextCard(){
		//move current card then update this.currCard
		if (Number(this.currentCard.split('-')[1])<12){
			document.getElementById(this.currentCard).style.marginLeft ='-40vw';
			var newCard = Number(this.currentCard.split('-')[1]) + 1
			this.currentCard = 'card-'+String(newCard)
		} else {
			alert("End Of Questionaire!")
		}
				
	}
	update(e){
		var update = e.target.value
		var toUpdate = e.target.name
		if(toUpdate=='first-preference'){
			document.getElementById('clean').value = update
			this.user['toUpdate']=update
			console.log(this.user)
		}
	}
	componentDidMount(){
		
	}
	render(){
		return(
			<div id='questionaire-wrapper'>
				<img id='questionaire-logo' src='transparent'/>
				<div id='questionaire-container'>
				<div id='card-1' class='questionaire-card' onMouseUp={this.nextCard.bind(this)}>
					<h1> How clean do you keep your living space? </h1>
					<input name='first-preference' type='range' min='1' max='5' onInput={this.update.bind(this)} required/>
					<input id='clean' value='5' disabled/>
				</div>
				<div id='card-2' class='questionaire-card'>
					<h1> Do you smoke? </h1>
					<select onInput={this.nextCard}>
						<option>No</option>
						<option>Tobacco/Hookah</option>
						<option>Marijuana</option>
						<option>Other</option>
					</select>
				</div>
				<div id='card-3' class='questionaire-card' onMouseUp={this.nextCard}>	
					<h1> What is your relationship status?</h1>
					<input type='radio' name='r-status' value='Relationship'/> Relationship<br/>
					<input type='radio' name='r-status' value='Single'/> Single<br/>
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
					<br/>
					<input id='clean' type='number'/>
				</div>
				<div id='card-5' class='questionaire-card' onMouseUp={this.nextCard}>
					<h1>Do you snore ? </h1>
					<input type='radio' name='snore' value='no'/> No
					<input type='radio' name='snore' value='yes'/> Yes
				</div>
				<div id='card-6' class='questionaire-card' onMouseUp={this.nextCard}>
					<h1> Are you okay with social gatherings at your house? </h1>
					<input type='radio' name='gatherings' value='Occasionally (Breaks/Weekends)'/>Occasionally<br/>
					<input type='radio' name='gatherings' value='No'/> No<br/>
					<input type='radio' name='gatherings' value='Yes'/> Yes
				</div>
				<div id='card-7' class='questionaire-card'>
					<h1>What time do you usually go to bed? </h1>
					<input type='time'/>
				</div>
				<div id='card-8' class='questionaire-card' onMouseUp={this.nextCard}>
					<h1>Do you drink alcohol</h1>
					<input type='radio' name='drink' value='yes'/> Yes <br/>
					<input type='radio' name='drink' value='no'/> No
				</div>
				<div id='card-9' class='questionaire-card' onMouseUp={this.nextCard}>
					<h1>How often do you cook or use the kitchen?</h1>
					<input type='radio' name='kitchen' value='barely'/> Barely<br/>
					<input type='radio' name='kitchen' value='frequently'/> Frequently<br/>
					<input type='radio' name='kitchen' value='everyday'/> Everyday
				</div>
				<div id='card-10' class='questionaire-card'>
					<h1> What are some of your hobbies?</h1>
					<textarea type='text' name='hobbies'></textarea>
				</div>
				<div id='card-11' class='questionaire-card'>
					<h1> My roommates absolutely cannot....</h1>
					<textarea type='text' name='nonos'></textarea>
				</div>
				<div id='card-12' class='questionaire-card'>
					<h1> My roommates abslutely must....</h1>
					<textarea type='text' name='musts'></textarea>
					<button onClick={this.finish}> Finish Questionaire </button>
				</div>
				</div>
				<button id='previous-card' onClick={this.previousCard}> ← </button>
				<button id='next-card' onClick={this.nextCard}> → </button>
				
			</div>
			)
	}
}
export default Questionaire