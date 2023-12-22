import {Routes, Route, useLocation} from 'react-router-dom';
import  Navigation from './Navigation';
import FullPage from './FullPage';
import Home from './Home';
import Catalog from './Catalog';
function AllComponents(props) {
    const location = useLocation()
    return ( 
        <div>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<FullPage/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/catalog' element={<Catalog/>}/>
                </Route>
            </Routes>
        </div>
     );
}

export default AllComponents;