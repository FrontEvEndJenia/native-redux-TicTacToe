import { appReducer } from './reducers'
import { createStore } from 'redux'

// export const createStore = (appReducer) => {
// 	let state
// 	const subscribers = []

// 	return {
// 		dispatch(action) {
// 			state = appReducer(state, action)
// 			subscribers.forEach((sub) => sub())
// 		},
// 		subscribe(callback) {
// 			subscribers.push(callback)
// 		},
// 		getState() {
// 			return state
// 		},
// 	}
// }

export const store = createStore(appReducer)
store.dispatch({ type: 'ddd' })
