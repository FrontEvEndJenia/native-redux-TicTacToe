export const setCurrentPlayer = (currentPlayer) => {
	return {
		type: 'SET_CURRENT_PLAYER',
		payload: currentPlayer,
	}
}

export const setField = (updatedField) => {
	return {
		type: 'SET_FIELD',
		payload: updatedField,
	}
}

export const setIsDraw = (isDraw) => {
	return {
		type: 'SET_IS_DRAW',
		payload: isDraw,
	}
}

export const setIsGameEnded = (isGameEnded) => {
	return {
		type: 'SET_IS_GAME_ENDED',
		payload: isGameEnded,
	}
}

export const reset = () => {
	return {
		type: 'RESET_GAME',
	}
}
