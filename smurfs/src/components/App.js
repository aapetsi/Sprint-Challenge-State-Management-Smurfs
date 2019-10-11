import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import SmurfsList from './SmurfsList'
import { getSmurfs } from '../actions/smurfs'
import AddSmurf from './AddSmurf'
class App extends Component {
  componentDidMount () {
    this.props.dispatch(getSmurfs())
  }

  render () {
    return (
      <div className='App'>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <AddSmurf />
        <SmurfsList />
      </div>
    )
  }
}

export default connect(
  null,
  null
)(App)
