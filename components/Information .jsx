import React from 'react'
import PropTypes from 'prop-types'

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	const getStatus = () => {
		if (isDraw) return 'Ничья'
		if (isGameEnded) return `Победа: ${currentPlayer}`
		return `Ходит: ${currentPlayer}`
	}

	return <InformationLayout getStatus={getStatus()} />
}

Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
}

export const InformationLayout = ({ getStatus }) => {
	return <p>{getStatus}</p>
}

InformationLayout.propTypes = {
	getStatus: PropTypes.func,
}
