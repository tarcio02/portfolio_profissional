// Adicione a importação do React
import React from 'react'
// Adicione a importação do ReactDOM para manipulação do DOM
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Use ReactDOM.createRoot para indicar de onde vem a função
ReactDOM.createRoot(document.getElementById('root')).render(
  // Use React.StrictMode para indicar de onde vem o componente
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)