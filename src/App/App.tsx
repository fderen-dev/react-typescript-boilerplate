import React from 'react'
import gear from '../statics/icons/gear.svg'
import './App.scss'

const App: React.FunctionComponent = () => (
  <div className="app">
    <div className="examplary-container">
      <img src={gear} />
      <h1>React-typescript-boilerplate</h1>
    </div>
  </div>
)

export default App
