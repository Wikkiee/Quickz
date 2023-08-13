import Home from "./pages/Home"
import AuthenticatePage from "./pages/AuthenticatePage"
import NotFound from "./pages/NotFoundPage"
import { Route, Routes } from "react-router-dom"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<AuthenticatePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  )
}

export default App
