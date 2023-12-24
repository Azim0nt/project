import './style.scss';
import Home from '../Home';
import Catalog from '../Catalog';
import Price from '../Price';
import Portfolio from '../Portfolio';
function FullPage() {
    return ( 
        <>
        <Home/>
        <Catalog/>
        <Price/>
        <Portfolio/>
        </>
     );
}

export default FullPage;