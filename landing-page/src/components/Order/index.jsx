import './style.scss';
import Orange from '../../assets/images/orange.png';
import OrangeHead from '../../assets/images/orange head.png';
import Person from '../../assets/images/person.svg';
import Call from '../../assets/images/call.svg';
import Catalog from '../../assets/images/catalog.png';
function Order() {
    return (
        <div className='order-body'>
            <div className='order'>
                <p id="title">Заказывая сайт, Вы получаете </p>
                <div className="cards">
                    <div className="card-1">
                        <p id="left">1</p>
                        <p id="right">Современный и удобный <br /> сайт для ваших клиентов</p>
                    </div>
                    <div className="card-2">
                        <p id="left">2</p>
                        <p id="right">Удобное управление сайтом</p>
                    </div>
                    <div className="card-3">
                        <p id="left">3</p>
                        <p id="right">Надежное и уважительное <br /> сотрудничество</p>
                    </div>
                    <div className="card-4">
                        <p id="left">4</p>
                        <p id="right">Домен сайта в подарок</p>
                    </div>
                </div>
                <img src={Orange} alt="" id="orange" />
                <img src={OrangeHead} alt="" id="orangeHead" />
            </div>
            <div className="order-main">
                <p id="title-m">
                    Вам <p> нужен современный красивый сайт</p>, <br />который будет приносить клиентов?
                </p>
                <span id='dot'>&#x2022;</span>
                <div className="form">
                    <p id="title">Заполните форму</p>
                    <p id="subtitle">и моментально получите КП <br /> на разработку Вашего сайта</p>
                    <div className="name"><img src={Person} alt="" /><input type="text" id="name" placeholder='Введите Ваше имя' /></div>
                    <div className="number"><img src={Call} alt="" /><input type="text" id='number' placeholder='+7 (_ _ _) _ _ _ - _ _ - _ _' /></div>
                    <button id='btn'>Отправить</button>
                    <p id='footer-p'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000" class="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022" />
                    </svg> Нажимая, соглашаюсь на обработку персональных данных</p>
                </div>
                <img src={Catalog} id='catalog' alt="" />
            </div>
        </div>
    );
}

export default Order;