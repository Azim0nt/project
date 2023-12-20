import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home'
import About from './About';
function AllComponents(props) {
    const location = useLocation()
    return ( 
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home />}/>
                 <Route path='/home' element={<Home />}/>   
                 <Route path='/about' element={<About />}/>   
            </Route>
        </Routes>
     );
}

export default AllComponents;