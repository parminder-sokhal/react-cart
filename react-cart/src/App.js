import './styles/app.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import {Home, Cart, Header} from './components';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    <Toaster/>
    </BrowserRouter>
  );
}

export default App;
