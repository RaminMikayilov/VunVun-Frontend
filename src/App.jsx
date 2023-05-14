import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Error from "./pages/Error"
import Navbar from './components/main/Navbar';
import Footer from './components/main/Footer';
import BeOwner from './pages/BeOwner'
function App() {

  return (
    <div className="App">
      <Router> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/elanver" element={<BeOwner />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
