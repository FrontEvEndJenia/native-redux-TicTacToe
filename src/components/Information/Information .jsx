import React from 'react'
import { store } from '../../redux/store'
import { useState, useEffect } from 'react'

export const Information = () => {
	const [_, update] = useState({})

	useEffect(() => {
		const unsubscribe = store.subscribe(() => update({}))
		return () => unsubscribe()
	}, [])

	const { currentPlayer, isDraw, isGameEnded } = store.getState()

	const getStatus = () => {
		if (isDraw) return 'Ничья'
		if (isGameEnded) return `Победа: ${currentPlayer}`
		return `Ходит: ${currentPlayer}`
	}

	return <p>{getStatus()}</p>
}
