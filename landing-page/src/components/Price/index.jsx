import './style.scss';
import Image from '../../assets/images/image-11.png';
import Image_1 from '../../assets/images/image-1.png';
import Image_2 from '../../assets/images/image-2.png';
import Image_3 from '../../assets/images/image-3.png';
import Image_4 from '../../assets/images/image-4.png';
import Chevron_2 from '../../assets/images/Chevron-2.svg';
function Price() {
    return (
        <div className='price-body'>
            <div className="price">
                <p id="title"><span>&#x2022;</span> Узнайте <p>стоимость</p>  разработки <br />
                    Вашего сайта
                </p>
                <p id="subtitle">
                Ответьте на несколько простых вопросов
                </p>
                <div className="info">
                    <div className="left">
                        <div className="top">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <div className="line-3"></div>
                        <div className="line-4"></div>
                        </div>
                        <div className="middle">
                            <p id="title">1 из 4 вопросов</p>
                            <p id="subtitle">Что Вы хотите получить?</p>
                            <div className="cards">
                                <div className="card-1">
                                    <img src={Image_1} width={80} height={82} />
                                    <p>Сделать сайт</p>
                                </div>
                                <div className="card-2">
                                    <img src={Image_2} width={80} height={82} />
                                    <p>Сделать сайт</p>
                                </div>
                                <div className="card-3">
                                    <img src={Image_3} width={80} height={82} />
                                    <p>Сделать сайт</p>
                                </div>
                                <div className="card-4">
                                    <img src={Image_4} width={80} height={82} />
                                    <p>Сделать сайт</p>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <button id="btn">
                                Далее <img src={Chevron_2} width={13} height={13} />
                            </button>
                        </div>
                    </div>
                    <div className="right">
                        <img src={Image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Price;