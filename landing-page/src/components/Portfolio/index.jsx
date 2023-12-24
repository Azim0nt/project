import './style.scss';
import Portfolio_Image_1 from '../../assets/images/Строй-материалы 1.png';
import Portfolio_Image_2 from '../../assets/images/Игровое-оборудование 1.png';
import Portfolio_Image_3 from '../../assets/images/Сантехника 2.png';
import Portfolio_Image_4 from '../../assets/images/Мебель 2.png';
import Portfolio_Image_5 from '../../assets/images/Раковины 1.png';
import Portfolio_Image_6 from '../../assets/images/Ремонт-тракторов 1.png';
import Portfolio_Image_7 from '../../assets/images/Столешницы 2.png';
import Portfolio_Image_8 from '../../assets/images/электрик 1.png';
import Portfolio_Image_9 from '../../assets/images/гравировка 1.png';
import Portfolio_Image_10 from '../../assets/images/магазин-оборуд 1.png';
import Portfolio_Image_11 from '../../assets/images/дом 1.png';
import Portfolio_Image_12 from '../../assets/images/изоляция 1.png';
// import Portfolio_Image_ from '../../assets/images/';
function Portfolio() {
    return (
        <div className='portfolio-body'>
            <div className="portfolio">
                <p id="title">Разработали и воплотили в <br /> жизнь более 200 сайтов</p>
                <div className="projects">
                    <p>Проекты:</p> <button id="landing-btn">Лендинг</button><button id="many-pages">Многостраничный сайт</button><button id="online-store">Интернет-магазин</button>
                </div>
                <div className="portfolio-images">
                    <div className="images">
                    <img src={Portfolio_Image_1} alt="" />
                    <img src={Portfolio_Image_2} alt="" />
                    <img src={Portfolio_Image_3} alt="" />
                    <img src={Portfolio_Image_4} alt="" />
                    <img src={Portfolio_Image_5} alt="" />
                    <img src={Portfolio_Image_6} alt="" />
                    <img src={Portfolio_Image_7} alt="" />
                    <img src={Portfolio_Image_8} alt="" />
                    <img src={Portfolio_Image_9} alt="" />
                    <img src={Portfolio_Image_10} alt="" />
                    <img src={Portfolio_Image_11} alt="" />
                    <img src={Portfolio_Image_12} alt="" />
                    </div>
                </div>
                <div className="btn">

                <button id="btn">
                Загрузить еще
                </button>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;