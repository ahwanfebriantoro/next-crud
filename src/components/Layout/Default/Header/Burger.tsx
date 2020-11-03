import { useState } from 'react'
import styles from './Header.module.scss'
import csx from 'classnames'

interface BurgerProps {
  isActive: boolean
  toggle: VoidFunction
}

const Burger = (props: BurgerProps) => {
  const { isActive, toggle } = props
  return (
    <div
      className={csx(
        styles.burgerContainer,
        isActive && styles.activeBurgerContainer
      )}
      onClick={() => toggle()}
    >
      <div className={styles.burgerStick} />
      <div className={styles.burgerStick} />
      <div className={styles.burgerStick} />
    </div>
  )
}

export default Burger
