import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './context/UserContext.jsx'
import { ChatProvider } from './context/ChatContext.jsx'

// UserProvider is used because verify page jb hmne khola and agr use reload kre toh vhi same page khula rhe changes na aae

// const dotenv = require("dotenv")
// dotenv.config();

export const server = process.env.SERVER_STRING;
// export const server = "https://chatbot-backend-euxu.onrender.com"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </UserProvider>
  </StrictMode>
)
