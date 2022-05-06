import * as ActionTypes from './ActionTypes'

export const favorites = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_FAVORITE:
      console.log('Favorite added')
      if (state.includes(action.payload)) {
        return state
      }
      return state.concat(action.payload)
    default:
      return state
  }
}
