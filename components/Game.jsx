import React from 'react'
import styles from './game.module.css'
import { useState } from 'react'
import { Field } from './Field'
import { Information } from './Information '
import PropTypes from 'prop-types'

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState(Array(9).fill(''))

	const resetGame = () => {
		setField(Array(9).fill(''))
		setCurrentPlayer('X')
		setIsGameEnded(false)
		setIsDraw(false)
	}

	return (
		<GameLayout
			resetGame={resetGame}
			isDraw={isDraw}
			setIsDraw={setIsDraw}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			fieldsArray={field}
			setField={setField}
		/>
	)
}

export const GameLayout = ({
	resetGame,
	isDraw,
	setIsDraw,
	isGameEnded,
	setIsGameEnded,
	currentPlayer,
	setCurrentPlayer,
	fieldsArray,
	setField,
}) => {
	return (
		<>
			<div className={styles['game']}>
				<div className={styles['status']}>
					<Information
						isDraw={isDraw}
						isGameEnded={isGameEnded}
						currentPlayer={currentPlayer}
					/>
				</div>
				<Field
					fieldsArray={fieldsArray}
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
					setField={setField}
					isGameEnded={isGameEnded}
					setIsGameEnded={setIsGameEnded}
					isDraw={isDraw}
					setIsDraw={setIsDraw}
				/>
				<button className={styles['reset-btn']} onClick={resetGame}>
					Новая игра
				</button>
			</div>
		</>
	)
}

GameLayout.propTypes = {
	resetGame: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	fieldsArray: PropTypes.array,
	setField: PropTypes.func,
}
