import './style.scss';
import Logo from '../../assets/images/logo_grans_2 2.png';
import { Outlet, NavLink } from 'react-router-dom';
function Footer() {
    return (
        <>
            <Outlet />
            <div className='footer-body'>
                <NavLink to={'/'}><img src={Logo} alt='' /></NavLink>
                <div className="footer">
                    <div className="left">
                        <p>+7(495) 123 34 45</p>
                        <p>info@granss.ru</p>
                    </div>
                    <div className="left-middle">
                        <NavLink to={'/home'}>
                            <p>Главная</p>
                        </NavLink>
                        <NavLink to={'/catalog'}>
                            <p>Каталог сайтов</p>
                        </NavLink>
                    </div>
                    <div className="right-middle">
                        <NavLink to={'/price'}>
                            <p>Цена сайта</p>
                        </NavLink>
                        <NavLink to={'/portfolio'}>
                            <p>Работы</p>
                        </NavLink>
                    </div>
                    <div className="right">
                        <NavLink to={'/about-me'}>
                            <p>Обо мне</p>
                        </NavLink>
                        <NavLink to={'/order'}>
                            <p>Заказать</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;