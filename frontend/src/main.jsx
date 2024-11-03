import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './context/UserContext.jsx'

// UserProvider is used because verify page jb hmne khola and agr use reload kre toh vhi same page khula rhe changes na aae

export const server = "http://localhost:5000"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>
)
