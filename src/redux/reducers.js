export const initialState = {
	field: Array(9).fill(''),
	currentPlayer: 'X',
	isDraw: false,
	isGameEnded: false,
}

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case 'SET_CURRENT_PLAYER': {
			return { ...state, currentPlayer: payload }
		}
		case 'SET_FIELD': {
			return { ...state, field: payload }
		}
		case 'SET_IS_DRAW': {
			return { ...state, isDraw: payload }
		}
		case 'SET_IS_GAME_ENDED': {
			return { ...state, isGameEnded: payload }
		}

		case 'RESET_GAME':
			return initialState
		default:
			return state
	}
}
