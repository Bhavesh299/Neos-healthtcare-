import { legacy_createStore as createstore } from 'redux'
import { combineReducers } from 'redux'
import { Addreducer, DeleteReducer } from '../reducer/reducer'

const rootReducer = combineReducers({Addreducer, DeleteReducer})

export const store = createstore(
   rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)


