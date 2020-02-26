import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/searchBox.js';
import Scroll from '../components/scroll.js';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry.js';

class App extends Component {
//All funtion inside class, can use this constructor function to use the state.
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
		console.log('1');

	}

//defined by React, so don't need air funtion (=>)
	componentDidMount() {
		console.log('2');
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=> {
			this.setState({robots: users})

		});

	}

//your own method. the object this -> caleld from searchBox.
//when you want to make it to be within, heritae this from App class
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	}

//Cac bien trong tung function rieng biet chi co the duoc dng trong function do
	render () {
		const {robots, searchfield } = this.state;
		//Search/ Tao ra array Robot moi tu dong robot.
		const filteredRobots = robots.filter(robots => {
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		console.log(robots);
			// Scroll can call/use children
			return (
				<div className='tc'>
				<h1> RoboFriends </h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundry>
					<CardList robots={filteredRobots}/>
					</ErrorBoundry>
				</Scroll>
				</div>
			);
	}

}

export default App;