import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <div className="flex space-x-4 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="h-24 w-24 animate-spin-slow" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl font-bold text-primary mb-4">Nutrisco App</h1>
      <div className="nutrisco-card p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4">
        <button
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="text-muted-foreground text-sm">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-accent-foreground mt-8">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
