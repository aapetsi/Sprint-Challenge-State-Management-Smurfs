import React from 'react'
import SmurfCard from './SmurfCard'
import { connect } from 'react-redux'

const SmurfsList = props => {
  console.log(props.smurfs)
  return (
    <div>
      <h1>all smurfs</h1>
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
  smurfs: state.smurfs
})

export default connect(
  mapStateToProps,
  null
)(SmurfsList)
