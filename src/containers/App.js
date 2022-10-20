import React, { Component } from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json()
      })
      .then(users => {
        return this.setState({ robots: users })
      })
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {
    const { robots, search } = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(search)
    })

   return !robots.length ?
      <h1>Loading...</h1> :
     (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox handleSearch={this.handleSearch} />
          <Scroll>
            <ErrorBoundary>
            <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      )
    }
  }


export default App;