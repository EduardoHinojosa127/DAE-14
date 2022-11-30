import Index from './pages/Index';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
import Regisgter from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
        <Route path='/register' element={<Regisgter/>}></Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;