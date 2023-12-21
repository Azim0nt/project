import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import NoPage from './components/NoPage';
import Regist from './components/Regist';
import Login from './components/Login';
function AllComponents(props) {
    const location = useLocation()
    return ( 
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home />}/>
                 <Route path='/home' element={<Home />}/>   
                 <Route path='/about' element={<About />}/>   
                 <Route path='/regist' element={<Regist />}/>   
                 <Route path='/login' element={<Login />}/>   
                 <Route path='*' element={<NoPage/>}/>   
            </Route>
        </Routes>
     );
}

export default AllComponents;