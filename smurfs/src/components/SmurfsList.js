import React from 'react'
import { connect } from 'react-redux'

const SmurfsList = props => {
  console.log(props.smurfs)
  return (
    <div>
      <h1>all smurfs</h1>
      {props.smurfs.map(smurf => (
        <div key={smurf.id}>
          <h1>{smurf.name}</h1>
        </div>
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
