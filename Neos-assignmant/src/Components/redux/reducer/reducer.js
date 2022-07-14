import { actionType } from '../actiontype/actiontype'
const initState = {
  todo: [],
  deletetodo: [],
}

export const Addreducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionType.ADD_NOTES:
      return {
        ...state,
        todo: [...state.todo, payload],
      }
    case actionType.DELETE_NOTES:
      return {
        ...state,
        todo: payload,
      }
    default:
      return state
  }
}

const init = {
  deletetodo: [],
}

export const DeleteReducer = (state = init, { type, payload }) => {
  console.log(payload)
  switch (type) {
    case actionType.ADD_DELETE_NOTES:
      return {
        ...state,
        deletetodo: [...state.deletetodo, payload],
      }
    default:
      return state
  }
}
