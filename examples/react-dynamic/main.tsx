import { createRoot } from 'https://esm.sh/react-dom@19.0.0/client'
import React, { StrictMode } from 'https://esm.sh/react@19.0.0'
import App from './App.tsx'

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
