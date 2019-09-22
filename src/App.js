import React, { Component } from 'react';
import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';
import {usersJSON} from './data';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      sortBy: "",
      users: usersJSON
    }

  }
  // complete the comparators
	compareByAge({age}, b) {
		return age-b.age;
	}

	compareByName({name}, b) {
		if(name>b.name) return 1;
		else if(name<b.name) return -1;
		else return 0;
	}

	compareByPoints({points}, b) {
		return points-b.points;	
	}

	compareByRank({rank}, b) {
		return rank-b.rank;
	}

  handleClickAge() {
    const {users} = this.state;
    console.log('rank')
    const newUsers = users.sort((a,b) => this.compareByAge(a,b));
		console.log(newUsers)
		this.setState({users:newUsers})
  }

  handleClickName() {
    const {users} = this.state;
    console.log('rank')
    const newUsers = users.sort((a,b) => this.compareByName(a,b));
		console.log(newUsers)
		this.setState({users:newUsers})
  }

  handleClickPoints() {
    const {users} = this.state;
    console.log('rank')
    const newUsers = users.sort((a,b) => this.compareByPoints(a,b));
		console.log(newUsers)
		this.setState({users:newUsers})
  }

  handleClickRank() {
    const {users} = this.state;
    console.log('rank')
    const newUsers = users.sort((a,b) => this.compareByRank(a,b));
		console.log(newUsers)
		this.setState({users:newUsers})
  }

  render() {
    const {users} = this.state;
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age ageSort={()=> this.handleClickAge()}></Age>
          <Name nameSort={() =>this.handleClickName()}></Name>
          <Points scoreSort={()=>this.handleClickPoints()}></Points>
          <Rank rankSort={()=>this.handleClickRank()}></Rank>
          <Table users={users}></Table>
        </div>
      </div>
    );
  }
}

