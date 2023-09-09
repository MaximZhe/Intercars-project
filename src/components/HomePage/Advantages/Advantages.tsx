import React from 'react';
import WalletIcon from '../../../assets/icons/wallet-icon.svg';
import TicketIcon from '../../../assets/icons/ticket-icon.svg';
import RoadIcon from '../../../assets/icons/road-icon.svg';
import ComfortIcon from '../../../assets/icons/comfort-icon.svg';
import './Advantages.scss';

const Advantages = () => {
    return (
        <section className='advantages'>
            <div className='container'>
                <div className='advantages__wrapper'>
                    <div className='advantages__item'>
                        <img src={WalletIcon} width={40} height={40} alt='' />
                        <h3 className='advantages__title'>
                            Самые низкие цены
                        </h3>
                        <p className='advantages__text'>
                            Куда бы вы ни отправлялись, вы сможете найти
                            автобусные билет по самой низкой цене. Выбирайте
                            среди
                            тысяч направлений и рейсов, и вы найдете идеальный
                            вариант!
                        </p>
                    </div>
                    <div className='advantages__item'>
                        <img src={TicketIcon} width={40} height={40} alt='' />
                        <h3 className='advantages__title'>
                            Без касс и очередей
                        </h3>
                        <p className='advantages__text'>
                            Не потребуется тратить время на стояние в очередях.
                            Оформить сделку можно в любое время.
                            Воспользуйтесь удобным функционалом,
                            представленным на сайте.
                        </p>
                    </div>
                    <div className='advantages__item'>
                        <img src={RoadIcon} width={40} height={40} alt='' />
                        <h3 className='advantages__title'>
                            Быстрые маршруты
                        </h3>
                        <p className='advantages__text'>
                            При покупке билета выбирайте быстрые маршруты.
                            Добирайтесь в нужные места в определенные сроки и
                            экономьте время.
                            Это самый важный ресурс в наше время.
                        </p>
                    </div>
                    <div className='advantages__item'>
                        <img src={ComfortIcon} width={40} height={40} alt='' />
                        <h3 className='advantages__title'>
                            Комфорт на протяжении всей поездки
                        </h3>
                        <p className='advantages__text'>
                            Транспортные компании обеспечивают высокий уровень
                            комфорта в течение всей поездки.
                            Используется современный транспорт
                            с удобными сидениями.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Advantages;