import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Compra from "./pages/Compra";
import './app.css'

function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='compra' element={<Compra />}/>
      </Routes>
    <Footer />
  </Router>
  );
}

export default App;
