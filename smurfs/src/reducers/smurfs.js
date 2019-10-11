import {
  GET_SMURFS,
  ADD_SMURF,
  DELETE_SMURF,
  SET_ERROR
} from '../actions/types'

const initialState = {
  smurfs: [],
  error: ''
}

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload]
      }
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        error: ''
      }
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload.id)
      }

    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
