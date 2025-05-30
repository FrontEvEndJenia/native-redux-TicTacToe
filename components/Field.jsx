import React from 'react'
import styles from './field.module.css'
import PropTypes from 'prop-types'

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
]

export const Field = ({
	fieldsArray,
	currentPlayer,
	setField,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
}) => {
	const getWinner = (updatedField) => {
		return WIN_PATTERNS.some(
			([a, b, c]) =>
				updatedField[a] &&
				updatedField[a] === updatedField[b] &&
				updatedField[a] === updatedField[c],
		)
	}

	const isDrawCheck = (isWinner, updatedField) => {
		return updatedField.every((cell) => cell !== '' && !isWinner)
	}

	const handleClick = (absoluteIndex) => {
		if (fieldsArray[absoluteIndex] !== '' || isGameEnded || isDraw) {
			return
		}

		const updatedField = [...fieldsArray]
		updatedField[absoluteIndex] = currentPlayer
		setField(updatedField)

		const isWinner = getWinner(updatedField)
		if (isWinner) {
			setIsGameEnded(true)
			return
		}
		const isDrawCheced = isDrawCheck(isWinner, updatedField)
		if (isDrawCheced) {
			setIsDraw(true)
			return
		}

		currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X')
	}

	const renderCell = (startIndex, endIndex) => {
		return (
			<>
				{fieldsArray
					.filter((i, ind) => ind >= startIndex && ind <= endIndex)
					.map((item, index) => {
						const absoluteIndex = startIndex + index
						return (
							<button
								key={absoluteIndex}
								className={styles['cell']}
								onClick={() => handleClick(absoluteIndex)}
								disabled={isGameEnded || isDraw}
							>
								{item}
							</button>
						)
					})}
			</>
		)
	}

	return <FieldLayout renderCell={renderCell} />
}

Field.propTypes = {
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	fieldsArray: PropTypes.array,
	setField: PropTypes.func,
}

export const FieldLayout = ({ renderCell }) => {
	return (
		<div className={styles['board']}>
			<div className={styles['board-row']}>{renderCell(0, 2)}</div>
			<div className={styles['board-row']}>{renderCell(3, 5)}</div>
			<div className={styles['board-row']}>{renderCell(6, 8)}</div>
		</div>
	)
}

FieldLayout.propTypes = {
	renderCell: PropTypes.func,
}
