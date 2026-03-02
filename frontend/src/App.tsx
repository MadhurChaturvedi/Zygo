import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import {Toaster} from "react-hot-toast";

function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster />
   </BrowserRouter>
   </>
  )
}

export default App