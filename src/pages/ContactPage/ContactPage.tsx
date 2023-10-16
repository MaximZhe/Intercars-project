import Menu from '@/components/Header/Menu/Menu';
import RouteItem from '@/components/RouteItem/RouteItem';
import Breadcrumbs from '@/components/UI/Breadcrumbs/Breadcrumbs';
import ButtonRoutes from '@/components/UI/Button/ButtonRoutes/ButtonRoutes';
import { sliderRoutesInternational } from '@/constant/constant';

import './ContactPage.scss';
import PhoneContacts from '@/components/ContactsItemsLinks/PhoneContacts/PhoneContacts';
import EmailContacts from '@/components/ContactsItemsLinks/EmailContacts.scss/EmailContacts';
import { Map, Placemark } from '@pbe/react-yandex-maps';
// import CustomBalloonLayout from '@/components/UI/CustomBalloonLayout/CustomBalloonLayout';

// import  MapCity  from '../../assets/icons/cityIcon.svg';
import CustomBalloon from '../../assets/icons/newIconMap.svg'
const ContactPage = () => {
   
    
    return (
        <>
            <Menu className='menu_theme_blue' />
            <section className='contacts'>
                <div className='container'>
                    <div className='contacts__wrapper'>
                        <div className='contacts__content'>
                            <Breadcrumbs />
                            <div className='contacts__container'>
                                <h1 className='contacts__title'>
                                    Контакты 
                                </h1>
                                <div className='contacts-box'>
                                    <h2 className='contacts-box__title-adress'>
                                        Адрес
                                    </h2>
                                    <p className='contacts-box__text'>
                                        125167, г. Москва, Пр-т Ленинградский, д. 37к3
                                    </p>

                                    <Map defaultState={{ center: [55.793632, 37.545087], zoom: 17 }}
                                        className='contacts-box__map' >
                                            
                                        <Placemark
                                            geometry={[55.793632, 37.545087]}
                                            options={{
                                                iconLayout: 'default#image',
                                                iconImageHref: CustomBalloon,
                                                iconImageSize: [60, 68],
                                                iconImageOffset: [-40, -70],
                                                
                                                
                                            }}
                                             />
                                    </Map>


                                    <div className='contacts-box__wrapper'>
                                        <ul className='contacts-box__list'>
                                            <li className='contacts-box__item'>
                                                <PhoneContacts className={'contacts-box__phone'}
                                                    children={['+7 499 350 80 16', '+8 800 777 74 15']} />
                                            </li>
                                            <li className='contacts-box__item'>
                                                <EmailContacts href={'mailto:direction@intercars.ru&body=Здравствуйте?subject=вопрос'}
                                                    className={'contacts-box__email'} children={'direction@intercars.ru'} />
                                            </li>
                                        </ul>
                                        <div className='contacts-box__company'>
                                            ООО «БайерТранс» ОГРН 1037714005680 ИНН 7714294648 КПП 771401001
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='contacts__promo'>
                            {sliderRoutesInternational.slice(0, 2).map((item) => (
                                <RouteItem key={item.id} data={item} className={'contacts-route'} />
                            ))}
                            <ButtonRoutes to={'/'} title={'Другие популярные маршруты'} className={'contacts__more'} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;