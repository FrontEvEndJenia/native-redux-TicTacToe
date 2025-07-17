import React from 'react'
import styles from './game.module.css'
import { Field } from '../Field/Field'
import { Information } from '../Information/Information '
import { store } from '../../redux/store'
import { useState, useEffect } from 'react'
import { reset } from '../../redux/actions'

export const Game = () => {
	const [_, update] = useState({})

	useEffect(() => {
		const unsubscribe = store.subscribe(() => update({}))
		return () => unsubscribe()
	}, [])

	const resetGame = () => {
		store.dispatch(reset())
	}

	return (
		<>
			<div className={styles['game']}>
				<div className={styles['status']}>
					<Information />
				</div>
				<Field />
				<button className={styles['reset-btn']} onClick={resetGame}>
					Новая игра
				</button>
			</div>
		</>
	)
}
