import './style.scss';
import Home from '../Home';
import Catalog from '../Catalog';
import Price from '../Price';
import Portfolio from '../Portfolio';
import About_me from '../About-me';
import Order from '../Order';
import Footer from '../Footer';
function FullPage() {
    return ( 
        <>
        <Home/>
        <Catalog/>
        <Price/>
        <Portfolio/>
        <About_me />
        <Order />
        <Footer/>
        </>
     );
}

export default FullPage;