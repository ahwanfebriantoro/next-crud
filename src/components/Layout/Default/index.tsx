import Header from './Header'
import styles from './Layout.module.scss'

const Default = ({ children }) => (
  <div className={styles.container}>
    <Header />
    {children}
  </div>
)

export default Default
