import styles from './Header.module.scss'
import Burger from './Burger'
import { useState } from 'react'
import csx from 'classnames'

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const toggle = () => {
    setIsActive(!isActive)
  }
  return (
    <div
      className={csx(styles.container, isActive && styles.activeContainer)}
    >
      <Burger isActive={isActive} toggle={toggle} />
    </div>
  )
}

export default Header
