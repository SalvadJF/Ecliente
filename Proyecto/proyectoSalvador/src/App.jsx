import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Compra from "./pages/Compra";
import Recibo from "./pages/Recibo";
import './app.css'

function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='compra' element={<Compra />}/>
        <Route path='recibos' element={<Recibo />}/>
      </Routes>
    <Footer />
  </Router>
  );
}

export default App;
