import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import SocialButtons from '../UI/SocialButtons/SocialButtons';
import Application from './Application/Application';
import './Footer.scss';
import { IRouteItem } from '../../types/types';
import { ReactComponent as ArrowRight } from '@assets/icons/arrow-right-blue.svg';
import { ReactComponent as ArrowIcon } from '@assets/icons/Arrow Icon.svg';
import PaymentOption from '../UI/PaymentOption/PaymentOption';
interface IRoutesList {
    routes: IRouteItem[],
}

const Footer: FC<IRoutesList> = ({ routes }) => {
    const [isOpenRoutes, setIsOpenRoutes] = useState(false);
    const [isOpenInfo, setIsOpenInfo] = useState(false);
    return (
        <footer className="footer">
            <div className='container-fluid'>
                <Application />
                <div className='footer__wrapper'>
                    <div className='footer__top'>
                        <div className="footer-contacts">
                            <h3 className="footer__title">
                                Контакты
                            </h3>
                            <ul className='footer__list  footer-contacts__list'>
                                <li className='footer-contacts__item'>
                                    <a href='tel:+74993508016' className='footer-contacts__phone'>
                                        +7 499 350 80 16
                                    </a>
                                    <a href='tel:+88007777415' className='footer-contacts__phone'>
                                        +8 800 777 74 15
                                    </a>
                                </li>
                                <li className='footer-contacts__item'>
                                    125167, г. Москва,
                                    Пр-т Ленинградский, д.37/3
                                </li>
                                <li className='footer-contacts__item'>
                                    <a href='mailto:direction@intercars.ru&body=Здравствуйте?subject=вопрос' className='footer-contacts__email'>
                                        direction@intercars.ru
                                    </a>
                                </li>
                            </ul>
                            <SocialButtons
                                className={'footer-social'}
                                telegram={'https://'}
                                twitter={'https://'}
                                vk={'https://'} />
                        </div>
                        <div className='footer-routes'>
                            <h3 className='footer__title'
                                onClick={() => setIsOpenRoutes(prev => !prev)}>
                                Маршруты
                                <ArrowIcon className={`footer-icon__mobail ${isOpenRoutes ? 'active' : ''}`} />
                            </h3>
                            <ul className='footer__list footer-routes__list'>
                                {routes.map((item) =>
                                    <li key={item.id} className='footer-routes__item'>
                                        <Link to={`/route/${item.id}`} className='footer-routes__link'>{item.value}</Link>
                                    </li>)}
                            </ul>
                            <Link to='' className='footer-routes__more'>
                                Все маршруты
                                <ArrowRight className='footer-routes__icon' />
                            </Link>
                        </div>
                        <div className='footer-nav'>
                            <h3 className='footer__title'
                                onClick={() => setIsOpenRoutes(prev => !prev)}>
                                Информация
                                <ArrowIcon className={`footer-icon__mobail ${isOpenInfo ? 'active' : ''}`} />
                            </h3>
                            <nav className='footer-nav__wrapper'>
                                <ul className='footer__list  footer-nav__menu'>
                                    <li className='footer-nav__item'>
                                        <Link to='/' className='footer-nav__link'>
                                            Главная
                                        </Link>
                                    </li>
                                    <li className='footer-nav__item'>
                                        <Link to='/' className='footer-nav__link'>
                                            Новости
                                        </Link>
                                    </li>
                                    <li className='footer-nav__item'>
                                        <Link to='/' className='footer-nav__link'>
                                            Программа лояльности
                                        </Link>
                                    </li>
                                    <li className='footer-nav__item'>
                                        <Link to='/' className='footer-nav__link'>
                                            Акции
                                        </Link>
                                    </li>
                                    <li className='footer-nav__item'>
                                        <Link to='/' className='footer-nav__link'>
                                            Сотрудничество
                                        </Link>
                                    </li>
                                    <li className='footer-nav__item'>
                                        <Link to='/' className='footer-nav__link'>
                                            Правила
                                        </Link>
                                    </li>
                                    <li className='footer-nav__item'>
                                        <Link to='/' className='footer-nav__link'>
                                            Как оплатить
                                        </Link>
                                    </li>
                                    <li className='footer-nav__item'>
                                        <Link to='/' className='footer-nav__link'>
                                            Контакты
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className='footer__bottom'>
                        <div className='footer-company'>
                            <p className='footer-company__text'>
                                © 2023, OOO «БайерТранс»
                            </p>
                            <p className='footer-company__text'>
                                Российская Федерация, г.Москва, Пр-т Ленинградский, д. 37/3, ИНН 7 714 294 648
                            </p>
                        </div>
                        <PaymentOption className='footer-payment'/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;