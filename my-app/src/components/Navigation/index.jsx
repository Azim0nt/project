import './style.scss'
import { Outlet, NavLink } from 'react-router-dom';
function Navigation() {
        
    return ( 
        <div className='nav-body'>
            <div className="nav">
                <div className="left">
                <NavLink to={'/'}>
                    <h1>Logo</h1>
                </NavLink>
                </div>
                <div className="middle">
                    <ul>
                        <li><NavLink to={'/home'}>Главная</NavLink></li>
                        <li><NavLink to={'/about'}>О нас</NavLink></li>
                    </ul>
                </div>
                <div className="right">
                    <button id='regist'>Registration</button>
                    <button id='login'>Login</button>
                </div>
            </div>
            <div id="outlet">
                <Outlet/>
            </div>
        </div>
     );
}

export default Navigation;