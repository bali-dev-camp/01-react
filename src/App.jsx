import { useState } from 'react'
import cn from 'classnames'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 style={{
        width: 100,
        color: 'red',
      }}>
        Vite + React
      </h1>

      <h2 className={cn(styles.cardFooter)}>
        <div className={styles.cardApalah}>
          Test
        </div>
      </h2>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
