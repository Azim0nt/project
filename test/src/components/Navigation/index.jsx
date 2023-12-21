import './style.scss'
import { Outlet, NavLink } from 'react-router-dom';
function Navigation() {
        
    return ( 
        <div className='nav-body'>
            <div className="nav">
                
                <div className="middle">
                    <ul>
                        <li><NavLink to={'/'}>Главная</NavLink></li>
                        <li><NavLink to={'/about'}>О нас</NavLink></li>
                    </ul>
                </div>
                <div className="right">

                    <ul>

                    <li id='regist'><NavLink to={'/regist'}>Registration</NavLink> </li>
                    <li id='login'><NavLink to={'/login'}>Login</NavLink> </li>
                    </ul>
                </div>
            </div>
            <div id="outlet">
                <Outlet/>
            </div>
        </div>
     );
}

export default Navigation;