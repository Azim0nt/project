import './style.scss';
import Monitor_1 from '../../assets/images/monitor-1.png'
import Monitor_2 from '../../assets/images/monitor-2.png'
import Monitor_3 from '../../assets/images/monitor-3.png'
function Catalog() {
    return ( 
        <div className='catalog-body'>
            <div className="catalog">
                <p id='head'>Какой тип <p>сайта</p>  Вам нужен?</p>
                <div className="cards">
                    <div className="card-1">
                        <div className="top"><p>Лендинг</p></div>
                        <div className="center">
                            <img src={Monitor_1} width={288} height={212} />
                        </div>
                        <div className="bottom">
                            <div>

                            <p id='first-p'>45 000 руб</p>
                            <p id='last-p'> от <b>35 000</b> руб</p>
                            <button id='btn'>Подробнее</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-2">
                        <div className="top"><p>Многостраничный</p></div>
                        <div className="center">
                            <img src={Monitor_2} width={288} height={212} />
                        </div>
                        <div className="bottom">
                            <div>

                            <p id='first-p'>60 000 руб</p>
                            <p id='last-p'> от <b>45 000 </b> руб</p>
                            <button id='btn'>Подробнее</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-3">
                        <div className="top"><p>Интернет-магазин</p></div>
                        <div className="center">
                            <img src={Monitor_3} width={288} height={212} />
                        </div>
                        <div className="bottom">
                            <div>

                            <p id='first-p'>65 000 руб</p>
                            <p id='last-p'> от <b>49 000</b> руб</p>
                            <button id='btn'>Подробнее</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Catalog;