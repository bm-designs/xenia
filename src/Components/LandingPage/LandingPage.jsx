import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Login from '../Login/Login.jsx';
import CreateAccount from '../CreateAccount/CreateAccount.jsx';
import './LandingPage.css'

class LandingPage extends React.Component {
	constructor(props){
		super(props)
		this.ReactDOM = ReactDOM
		this.handleScroll = this.handleScroll.bind(this)
		this.login = this.login.bind(this)
		this.createAccount = this.createAccount.bind(this)
	}
	login(e){
		e.preventDefault()
		if(document.getElementById('login-hidden-layer').style.visibility == 'visible'){
			this.ReactDOM.render(<Login/>,document.getElementById('login-hidden-layer'))
		} else {
			document.getElementById('login-hidden-layer').style.visibility = 'visible'
		}

		
	}
	createAccount(e){
		e.preventDefault()
		this.ReactDOM.render(<CreateAccount/>,document.getElementById("app"))
	}
	handleScroll(){
		//keep track of current state and when the state changes, rerender or update the component state
		alert('hello')
	}
	componentDidMount() {
  
	}

	componentWillUnmount() {
    	document.getElementById('slide-one').removeEventListener('scroll', this.scroll);
	}
	render(){
		return(
			<div>
				<div id='carousel-wrapper'>
					<div id='slide-one'>
						<div id='opaque-layer'>
							<img src='transparent'/>
							<h1>Making finding the roommate and apartment of your dreams easier than ever before</h1>
							<p> Your exhausting and timely search ends today.</p>
							<div id='landing-buttons'>
								<a onClick={this.login.bind(this)}>Login</a>
								<a onClick={this.createAccount.bind(this)}>Signup</a>
							</div>
							<div id='info-wrapper'>
								<div id='info'>
									<h2>Housing for all</h2>
									<p>Whether you are a college student or working professionial we’ve got the housing opitions for you. Xenia carefully matches you with housing that fits the budget and preference of you and your roommate. When you enter your housing amenity preferences, we will be sure to only match you with roommates who have selected the same ammenties.</p>	
								</div>
								<div id='housing-info'>
									<h2>How it Works</h2>
									<p>After creating an account with Xenia, you will be prompted to answer 14 short personality questions and enter your housing preferences. After you enter this information, Xenia will provide you with potential roommate and housing matches based on the information you entered.</p>
									<div id='inner-info'>
										<h3>Housing tailored for you</h3>
										<img src='/house' id='avi'/>
										<p>Select your price range and must have ammenties and we will match you with someone who gets you.</p>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div id='login-hidden-layer'>
						
					</div>
					<div id='slide-three'>

					</div>
					<div id='slide-four'>
					</div>
					<div id='slide-five'>
					</div>
				</div>
			</div>
			)
	}
}
/*<h1> About the Team</h1>
						<p>Xenia was founded in 2019 by a group of four UCLA students who were determined to change the way that roommates and housing are found.</p>
						<div id='team-wrapper'>
							<div id='stan'>
							<img id='avi' src='/stan'/>
							<h2>Stanton Thomas, CEO and Founder</h2>
							<p>Stanton will be graduating UCLA in the spring of 2020, he has industry experience at VMware and Cruise Automation and has signed to join VMware fulltime following graduation.</p>
							</div>
							<div id='dan'>
								<img src='/dan' id='avi'/>
								<h2>Dan Molina, CTO Co-founder</h2>
								<p> Dan will be graduating from UCLA in the winter of 2019, his industry experience includes Intel, Nvidia and SquareSpace. Dan has signed to join Google fulltime following graduation.</p>
							</div>
							<div id='ricky'>
								<img id='avi' src='/ricky'/>
								<h2>Ricky Guo, Engineering Lead</h2>
								<p>Ricky is a second year at UCLA. His industry experience includes an internship at CalAmp.</p>
							</div>
							<div id='tan'>
								<img id='avi' src='/tan'/>
								<h2>Tanmaya Hada, Engineering Lead</h2>
								<p>Tanmaya is a third year at UCLA his industry expereience includes an internship with Infinite.</p>
							</div>

						</div>*/

export default LandingPage;
