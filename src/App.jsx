import {BrowserRouter, Route, Routes,Link} from 'react-router-dom';
import Login from './Login';
import About from './About';
import Signup from './Signup';

function Header(){
  return(
    <ul>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/signup">Signup</Link></li>
    </ul>
  )
}
function App(){
  return(
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;