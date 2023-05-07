import React from 'react'
import Letter from './Card'
import './App.css'
function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '4em',
    }}>
      <Letter />
      <div style={{
        overflowX: 'hidden',
      }}>
        <h1 style={{
          color: 'red',
          animation: 'led 3s linear infinite',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}>I LOVE YOU</h1>

        <style>
          {`
      @keyframes led {
        from { transform: translateX(-100%); }
        to { transform: translateX(100%); }
      }
    `}
        </style>
      </div>


    </div>
  )
}

export default App
