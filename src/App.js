import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './Component/Create';
import Update  from './Component/Update';
import Post from './Post/Post';
import Web from './Post/Post';
import CreatePost from './Post/CreatePost';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home /> } ></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/edit/:id" element={<Update />}></Route>
      <Route path="/users/:id" element={<Post /> }></Route>
      <Route path="/post/:id" element={<CreatePost />}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
