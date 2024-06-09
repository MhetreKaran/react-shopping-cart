import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
       <Header />
      <Routes>
        <Route extact path='/' element={<Home />}/>
        <Route  path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
