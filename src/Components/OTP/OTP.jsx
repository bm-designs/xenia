import React, {Component} from "react";
import ReactDOM from "react-dom";
import Home from '../Home/Home.jsx';
import "./OTP.css";
class OTP extends React.Component {
	constructor(props){
		super(props)
		this.state = {

	}
	this.ReactDOM = ReactDOM;
	this.user = props.user
	this.finish = this.finish.bind(this)
	this.generateOTP = this.generateOTP.bind(this)
	}
	finish(){
		this.ReactDOM.render(<Home user={this.user}/>, document.getElementById('app'))
	}
	generateOTP(){

	}
	componentDidMount(){
		
	}
	render(){
		return(
			<div id='otp-wrapper'>
				<div id='otp-container'>
					<label> Generate OTP</label><br/>
					<select>
						<option value={8}>8</option>
						<option value={9}>9</option>
						<option value={10}>10</option>
						<option value={11}>11</option>
						<option value={12}>12</option>
						<option value={13}>13</option>
						<option value={14}>14</option>
						<option value={15}>15</option>
					</select><br/>
					<button onClick={this.generateOTP}>Generate</button>
					<div id='finish'>
						<button onClick={this.finish}> Start Searching </button>
					</div>
				</div>
			</div>
			)
	}
}
export default OTP
