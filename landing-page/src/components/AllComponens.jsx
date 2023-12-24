import {Routes, Route, useLocation} from 'react-router-dom';
import  Navigation from './Navigation';
import FullPage from './FullPage';
import Home from './Home';
import Catalog from './Catalog';
import Price from './Price';
import NoPage from './NoPage';
import Portfolio from './Portfolio';
import About_me from './About-me';
import Order from './Order';
function AllComponents(props) {
    const location = useLocation()
    return ( 
        <div>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<FullPage/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/catalog' element={<Catalog/>}/>
                    <Route path='/price' element={<Price/>}/>
                    <Route path='/portfolio' element={<Portfolio />}/>
                    <Route path='/about-me' element={<About_me />}/>
                    <Route path='/order' element={<Order />}/>

                    <Route path='*' element={<NoPage/>}/>
                </Route>
            </Routes>
        </div>
     );
}

export default AllComponents;