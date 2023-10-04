import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './Component/Create';
import Update  from './Component/Update';
import Web from './Component/Web';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home /> } ></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/edit/:id" element={<Update />}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
