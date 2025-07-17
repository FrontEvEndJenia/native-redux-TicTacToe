import React, { useState, useEffect } from 'react'
import styles from './field.module.css'
import { store } from '../../redux/store'
import {
	setCurrentPlayer,
	setField,
	setIsDraw,
	setIsGameEnded,
} from '../../redux/actions'
import { WIN_PATTERNS } from '../../constants/win-patterns'

export const Field = () => {
	const [_, update] = useState({})

	useEffect(() => {
		const unsubscribe = store.subscribe(() => update({}))
		return () => unsubscribe()
	}, [])

	const { field, isDraw, isGameEnded, currentPlayer } = store.getState()

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
		if (field[absoluteIndex] !== '' || isGameEnded || isDraw) return

		const updatedField = [...field]
		updatedField[absoluteIndex] = currentPlayer
		store.dispatch(setField(updatedField))

		const isWinner = getWinner(updatedField)
		if (isWinner) {
			store.dispatch(setIsGameEnded(true))
			return
		}

		if (isDrawCheck(isWinner, updatedField)) {
			store.dispatch(setIsDraw(true))
			return
		}

		store.dispatch(setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'))
	}

	return (
		<div className={styles.board}>
			{[0, 1, 2].map((row) => (
				<div key={row} className={styles['board-row']}>
					{[0, 1, 2].map((col) => {
						const cellIndex = row * 3 + col
						return (
							<button
								key={cellIndex}
								className={styles.cell}
								onClick={() => handleClick(cellIndex)}
								disabled={
									isGameEnded || isDraw || field[cellIndex] !== ''
								}
							>
								{field[cellIndex]}
							</button>
						)
					})}
				</div>
			))}
		</div>
	)
}
