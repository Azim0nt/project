import './style.scss';
import Zipper from '../../assets/images/ff.png';
import BookImage from '../../assets/images/Book.png';
import LaptopImage from '../../assets/images/laptop.png';
import PhoneImage from '../../assets/images/phone.png'; 
import MoneyPhone from '../../assets/images/money.png'
function Home() {
    return (
        <>
            <div className="home-body">
                <div className="home">
                    <div>
                        <div className="left">
                            <span><p id='first'>Создание и продвижение</p>
                                <p id='last'>сайтов в Москве</p> </span>
                            <span>
                                <p id='p-1'>Закройте вопрос с клиентами раз и навсегда</p>

                            </span>
                            <span className="span-1">
                                <img src={Zipper} alt="Zipper" /><span><p>Делаем <span id="mark">красивые и современные сайты </span> </p>
                                    <p>для  привличение клиентов в ваш бизнес</p>  </span>
                            </span>
                            <button id='btn'>
                                Оставить заявку  <br />
                                и получить КП
                            </button>
                            <img id='book' src={BookImage} alt="" />
                            <img id='laptop' src={LaptopImage} alt="" />
                            <img id='phone' src={PhoneImage} alt="" />
                            <img id='money' src={MoneyPhone} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;