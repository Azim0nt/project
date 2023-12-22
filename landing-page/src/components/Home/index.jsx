import './style.scss';
import Zipper from '../../assets/images/ff.png';
import Image from '../../assets/images/Image.png';
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
                        <img src={Image} alt="" />
                        <div className="info">
                            <div className="first">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" /></svg>
                                </div>
                                <div className="line">
                                    <div></div>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </div>
                            </div>
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