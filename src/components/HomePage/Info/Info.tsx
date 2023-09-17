import BusImage from '../../../assets/images/Bus.png';
import { Link } from 'react-router-dom';
import './Info.scss';

const Info = () => {
    return (
        <section className='info'>
            <div className='container'>
                <div className='info__wrapper'>
                    <img src={BusImage} width={626} height={348} alt=''
                        className='info__img' />
                    <div className='info__content'>
                        <h2 className='info__title'>
                            Путешествуйте с Intercars
                        </h2>
                        <p className='info__text'>
                            Здесь вы можете купить билет на 
                            автобус, который довезет вас до 
                            нужного места. Делайте покупки 
                            по низким ценам.
                        </p>
                        <p className='info__text'>
                            На сайте представлены тысячи 
                            маршрутов, периодически 
                            появляются уникальные предложения. Бронируйте места в автобусах и выкупайте их по низкой цене.
                        </p>
                        <Link to='' className='info__link'>
                            Забронировать билет на автобус
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;