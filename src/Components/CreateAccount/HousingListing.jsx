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
	this.insertPic = this.insertPic.bind(this)
	}
	continue(){
		this.ReactDOM.render(<Questionaire user={this.user}/>, document.getElementById('create-account-wrapper'))
	}
	insertPic(e, section){
		function insert(id){
			var card = document.getElementsByClassName(id)[0]
			card.innerHTML = '';
			var upload = document.createElement('img')
			upload.files = pic
			upload.id = 'inserted-pic'
			card.appendChild(upload)
			var reader = new FileReader()
			reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(upload);
    		reader.readAsDataURL(pic);
		}
		var pic = section.target.files[0]
		var pos = [e, section.target.name]
		console.log(pos)
		if (pos[0]==0){
			insert('gallery-first')
		} 
		if (pos[0]==1){
			insert('gallery-second')
		}
		if(pos[0]==2){
			insert('gallery-third')
		}
		if(pos[0]==3){
			insert('gallery-fourth')
		}
		console.log(pos,pic)
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
							<div id='gallery-top'>
								<label for="housingListing-uploadpics" class='gallery-first' id='upload-label'><div id='gallery-pic-bg'><p id='gallery-pic-add' >+</p></div></label>
								<input type='file' accept='image/*' name='gallery-first'   id='housingListing-uploadpics' onInput={this.insertPic.bind(this, 0)}/>
								<label for="housingListing-uploadpics0" class='gallery-second' id='upload-label'><div id='gallery-pic-bg'><p id='gallery-pic-add' >+</p></div></label>
								<input type='file' accept='image/*' name='gallery-second'   id='housingListing-uploadpics0' onInput={this.insertPic.bind(this,1)}/>
							</div>
							<div id='gallery-bottom'>
								<label for="housingListing-uploadpics1" class='gallery-third' id='upload-label'><div id='gallery-pic-bg'><p id='gallery-pic-add' >+</p></div></label>
								<input type='file' name='gallery-third' accept='image/*'   id='housingListing-uploadpics1' onInput={this.insertPic.bind(this,2)}/>
								<label for="housingListing-uploadpics2" class='gallery-fourth' id='upload-label'><div id='gallery-pic-bg'><p id='gallery-pic-add' >+</p></div></label>
								<input type='file' name='gallery-fourth' accept='image/*'  id='housingListing-uploadpics2' onInput={this.insertPic.bind(this,3)}/>
							</div>
							
							
						</div>
					</div>
				</div>
				<button id='housingListing-continue' onClick={this.continue}>Continue/Skip</button>
			</div>
			)
	}
}
export default HousingListing