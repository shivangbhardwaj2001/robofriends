import React from 'react';
import CardList from '../components/CardList.js';

import SearchBox from '../components/SearchBox.js';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';

class App extends React.Component {

	constructor(){
		super();
		this.state={
			robots:[],
			searchfield:'', 
			message:''
		}
		// this.message=message;
		
	}

 	componentDidMount(){
 	fetch('https://jsonplaceholder.typicode.com/users')
 	.then(responses=>{
 		return responses.json();
 	})
 	.then(users=>{
 		this.setState({robots:users})
 	});

 	}	

	onSearchChange=(event)=>{
		this.setState({searchfield :event.target.value})
	}
 

	textInput=(event)=>{
 this.setState({message:event.target.value})

	}

  
	render (){
		const {searchfield , robots,message} =this.state;
		
		if(message===1){
		alert(message);
	}
	if(message===1){
		console.log(message);
	}

		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if(!robots.length){
			//this is going to be zero so it will return false
			//so adding ! makes it true which is same as
			//robots.legth ===true 
			return (
				<h1 className='black code grow b f1 '>
				Page is Loading ......
				</h1>

				)
		}
			else{
		return(
			<div className='tc'>
			   
			<h1 className='	 grow  f1'>Robo Friends </h1>
			<div className='tc b code divi br4' >
			<p>This is a Basic website made in React.js  by</p>
			<a  className='link bw2 grow' href="https://shivangbhardwaj.netlify.app/">
			<div className='linkStyle br4 grow '>
			
			Shivang Bhardwaj
			
			</div>
			</a>


			<p>This website uses API to get robots data.<br></br> It have one functionality that you can search names 
			of robots in the search bar and get result accordingly. </p>
			</div>
			<SearchBox searchChange={this.onSearchChange} />
			<Scroll>
			<ErrorBoundary>
			<CardList robots={filteredRobots}/>
			</ErrorBoundary>
			</Scroll>
			</div>
			);
}
	}
}
export default App;