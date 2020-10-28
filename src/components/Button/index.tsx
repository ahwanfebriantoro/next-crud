import { ReactChildren } from 'react'
import styles from './Button.module.scss'

interface propsType {
  children: ReactChildren
  onClick: FunctionConstructor
}

const Button = (props) => {
  const { children, onClick } = props
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
