import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Error from "./pages/Error"
import Navbar from './components/main/Navbar';
import Footer from './components/main/Footer';
function App() {

  return (
    
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/" element={<Homepage />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
