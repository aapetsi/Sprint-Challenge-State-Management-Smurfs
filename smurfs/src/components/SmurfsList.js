import React from 'react'
import SmurfCard from './SmurfCard'
import { connect } from 'react-redux'

const SmurfsList = props => {
  console.log(props.smurfs)
  return (
    <div>
      <h1>all smurfs</h1>
      {props.error && <p>{props.error}</p>}
      {props.smurfs.map(smurf => (
        <SmurfCard
          key={smurf.id}
          name={smurf.name}
          id={smurf.id}
          age={smurf.age}
          height={smurf.height}
        />
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error
})

export default connect(
  mapStateToProps,
  null
)(SmurfsList)
