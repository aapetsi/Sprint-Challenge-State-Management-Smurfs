import axios from 'axios'
import { GET_SMURFS, ADD_SMURF, DELETE_SMURF } from './types'

export const getSmurfs = () => dispatch => {
  axios
    .get('/smurfs')
    .then(res => {
      dispatch({
        type: GET_SMURFS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err.response)
    })
}

export const addSmurf = smurfData => dispatch => {
  axios
    .post('/smurfs', smurfData)
    .then(res => {
      const newSmurf = res.data.filter(
        smurf => smurf.name === smurfData.name
      )[0]
      newSmurf.height = `${newSmurf.height}cm`
      dispatch({
        type: ADD_SMURF,
        payload: newSmurf
      })
    })
    .catch(err => {
      console.log(err.response)
    })
}

export const deleteSmurf = smurfData => dispatch => {
  axios.delete(`/smurfs/${smurfData.id}`).then(res => {
    dispatch({
      type: DELETE_SMURF,
      payload: smurfData
    })
  })
}
