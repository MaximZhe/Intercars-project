import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SocialButtons from '../UI/SocialButtons/SocialButtons';
import Application from './Application/Application';
import './Footer.scss';
import { IRouteItem } from '../../types/types';
import { ReactComponent as ArrowIcon } from '@assets/icons/Arrow Icon.svg';
import PaymentOption from '../UI/PaymentOption/PaymentOption';
import ButtonRoutes from '../UI/Button/ButtonRoutes/ButtonRoutes';
import EmailContacts from '../ContactsItemsLinks/EmailContacts.scss/EmailContacts';
import PhoneContacts from '../ContactsItemsLinks/PhoneContacts/PhoneContacts';

interface IRoutesList {
    routes: IRouteItem[],
}

const Footer: FC<IRoutesList> = ({ routes }) => {
    const location = useLocation();
    const [isOpenRoutes, setIsOpenRoutes] = useState(false);
    const [isOpenInfo, setIsOpenInfo] = useState(false);
    
    return (
        <footer className="footer">
            <div className='container-fluid'>
                {location.pathname === '/Intercars-project/list-result-routes' ? null : <Application />}
                
                <div className='footer__wrapper'>
                    <div className='footer__top'>
                        <div className="footer-contacts">
                            <h3 className="footer__title">
                                Контакты
                            </h3>
                            <ul className='footer__list  footer-contacts__list'>
                                <li className='footer-contacts__item'>
                                    <PhoneContacts className={'footer-contacts__phone'}
                                    children={['+7 499 350 80 16','+8 800 777 74 15']}/>
                                </li>
                                <li className='footer-contacts__item'>
                                    125167, г. Москва,
                                    Пр-т Ленинградский, д.37/3
                                </li>
                                <li className='footer-contacts__item'>
                                    <EmailContacts href={'mailto:direction@intercars.ru&body=Здравствуйте?subject=вопрос'} 
                                    className={'footer-contacts__email'} children={'direction@intercars.ru'}/>  
                                </li>
                            </ul>
                            <SocialButtons
                                className={'footer-social'}
                                telegram={'https://'}
                                twitter={'https://'}
                                vk={'https://'} />
                        </div>
                        <div className={`footer-routes ${isOpenRoutes ? 'active' : ''}`}>
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
                            <ButtonRoutes to={'/'} title={'Все маршруты'} className='footer-routes__more'/>
                        </div>
                        <div className={`footer-nav ${isOpenInfo ? 'active' : ''}`}>
                            <h3 className='footer__title'
                                onClick={() => setIsOpenInfo(prev => !prev)}>
                                Информация
                                <ArrowIcon className={`footer-icon__mobail`} />
                            </h3>
                            <nav className='footer-nav__wrapper'>
                                <ul className='footer__list  footer-nav__menu'>
                                    <li className='footer-nav__item'>
                                        <Link to='/Intercars-project'  className='footer-nav__link'>
                                            Главная
                                        </Link>
                                    </li>
                                    <li className='footer-nav__item'>
                                        <Link to='/Intercars-project/news' state={'Главная/Новости'} className='footer-nav__link'>
                                            Новости
                                        </Link>
                                    </li>
                                    <li className='footer-nav__item'>
                                        <Link to='/' className='footer-nav__link'>
                                            Программа лояльности
                                        </Link>
                                    </li>
                                    <li className='footer-nav__item'>
                                        <Link to='/Intercars-project/promos' state={'Главная/Акции'} className='footer-nav__link'>
                                            Акции
                                        </Link>
                                    </li>
                                    <li className='footer-nav__item'>
                                        <Link to='/' className='footer-nav__link'>
                                            Сотрудничество
                                        </Link>
                                    </li>
                                    <li className='footer-nav__item'>
                                        <Link to='/Intercars-project/rules' state={'Главная/Правила для пассажиров'} className='footer-nav__link'>
                                            Правила
                                        </Link>
                                    </li>
                                    <li className='footer-nav__item'>
                                        <Link to='/Intercars-project/pay' className='footer-nav__link'>
                                            Как оплатить
                                        </Link>
                                    </li>
                                    <li className='footer-nav__item'>
                                        <Link to='/Intercars-project/contacts' state={'Главная/Контакты'} className='footer-nav__link'>
                                            Контакты
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <SocialButtons
                                className={'footer-social mobail'}
                                telegram={'https://'}
                                twitter={'https://'}
                                vk={'https://'} />
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