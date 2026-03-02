import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';


export const authService = "http://localhost:5000";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="540131442119-rnepenl98kli7csj5ort6t4plr0qtbq2.apps.googleusercontent.com">
       <App />
    </GoogleOAuthProvider>;
  </StrictMode>,
)
