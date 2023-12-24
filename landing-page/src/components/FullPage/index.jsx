import './style.scss';
import Home from '../Home';
import Catalog from '../Catalog';
import Price from '../Price';
import Portfolio from '../Portfolio';
import About_me from '../About-me';
function FullPage() {
    return ( 
        <>
        <Home/>
        <Catalog/>
        <Price/>
        <Portfolio/>
        <About_me />
        </>
     );
}

export default FullPage;