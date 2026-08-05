import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ClickSpark from './components/ClickSpark.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <ClickSpark
        sparkColor="#a78bfa"
        sparkSize={12}
        sparkRadius={22}
        sparkCount={10}
        duration={500}
        easing="ease-out"
        extraScale={1.2}
      />
    </BrowserRouter>
  </StrictMode>,
)
