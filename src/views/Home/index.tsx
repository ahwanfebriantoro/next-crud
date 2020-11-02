import Button from '../../components/Button'
import styles from './Home.module.scss'
import Link from 'next/link'

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to my boot</h1>
      <Link href="/component">
        <Button>This Is Button</Button>
      </Link>
    </div>
  )
}

export default Home
