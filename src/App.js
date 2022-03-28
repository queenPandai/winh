import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Skills from './Pages/Skills/Skills'
import Works from './Pages/Works/Works'
import Album from './Pages/Album/Album'

function App() {
  return (
    <>
    <Routes>
      <Route>  
      <Route path='/' exact index element={<Home/>}/>     
      <Route path='/About' exact index element={<About/>}/>     
      <Route path='/Contact' exact index element={<Contact/>}/>     
      <Route path='/Skills' exact index element={<Skills/>}/>     
      <Route path='/Works' exact index element={<Works/>}/>     
      <Route path='/Album' exact index element={<Album/>}/>     
      </Route>
    </Routes>
    </>
  );
}

export default App;
