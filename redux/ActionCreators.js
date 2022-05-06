import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl'

export const fetchCats = () => (dispatch) => {
  dispatch(catsLoading())

  return fetch(baseUrl + 'cats')
    .then(
      (response) => {
        if (response.ok) {
          return response
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`,
          )
          error.response = response
          throw error
        }
      },
      (error) => {
        const errMess = new Error(error.message)
        throw errMess
      },
    )
    .then((response) => response.json())
    .then((cats) => dispatch(addCats(cats)))

    .catch((error) => dispatch(catsFailed(error.message)))
}

export const catsLoading = () => ({
  type: ActionTypes.CATS_LOADING,
})

export const catsFailed = (errMess) => ({
  type: ActionTypes.CATS_FAILED,
  payload: errMess,
})

export const addCats = (cats) => ({
  type: ActionTypes.ADD_CATS,
  payload: cats,
})

export const addFavorite = (catId) => ({
  type: ActionTypes.ADD_FAVORITE,
  payload: catId,
})

export const postFavorite = (catId) => (dispatch) => {
  dispatch(addFavorite(catId))
}
