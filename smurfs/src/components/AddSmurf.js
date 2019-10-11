import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../actions/smurfs'

const AddSmurf = props => {
  const [smurf, setSmurf] = useState({ name: '', age: '', height: '' })
  const handleChange = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.dispatch(addSmurf(smurf))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name='name'
          type='text'
          value={smurf.name}
          placeholder='name'
        />
        <input
          onChange={handleChange}
          name='age'
          type='number'
          value={smurf.age}
          placeholder='age'
        />
        <input
          onChange={handleChange}
          name='height'
          type='number'
          value={smurf.height}
          placeholder='height'
        />
        <button>Add smurf</button>
      </form>
    </div>
  )
}

export default connect(
  null,
  null
)(AddSmurf)
