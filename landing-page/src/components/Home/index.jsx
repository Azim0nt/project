import './style.scss';
import Zipper from '../../assets/images/ff.png';
import Image from '../../assets/images/Image.png';
import Chevron from '../../assets/images/Chevron.svg';
function Home() {
    return (
        <>
            <div className="home-body">
                <div className="home">
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

                    </div>
                    <div className="right">
                        <img src={Image} alt="" width={545} height={554} />
                        <div className="info">
                            <div className="first">
                                <div>
                                    <img src={Chevron} width={25} height={24} />
                                </div>
                                <div className="line">
                                    <div></div>
                                </div>
                                <div>
                                    <img id='img-b' src={Chevron} width={25} height={24} />

                                </div>
                            </div>
                        </div>
                        <div className="info-str">
                            <p>
                                “Меняется изображение проектов <br />
                                на мониторе и телефоне, стрелками <br />
                                можно листать, чтобы не ждать <br />
                                изменения изображения. На <br />
                                последующих главных экранов <br />
                                страниц такая же механика” <br />
                            </p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;