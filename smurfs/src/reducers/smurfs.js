import { GET_SMURFS, ADD_SMURF } from '../actions/types'

const initialState = {
  smurfs: []
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
        smurfs: [...state.smurfs, action.payload]
      }
    default:
      return state
  }
}
