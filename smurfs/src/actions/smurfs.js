import axios from 'axios'
import { GET_SMURFS, ADD_SMURF } from './types'

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
      const newSmurf = res.data.filter(smurf => smurf.name === smurfData.name)[0]
      dispatch({
        type: ADD_SMURF,
        payload: newSmurf
      })
    })
    .catch(err => {
      console.log(err.response)
    })
}
