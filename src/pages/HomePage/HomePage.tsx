
import Menu from '../../components/Header/Menu/Menu';
import SearchForm from '../../components/SearchForm/SearchForm';
import './HomePage.scss';

import Actions from './Actions/Actions';
import Info from './Info/Info';
import Advantages from './Advantages/Advantages';
import Accordion from './FAQ/FAQ';


import Slider from '../../components/UI/Slider/Slider';
import {accordionItemsLeft,accordionItemsRight } from '@/constant/constant';

const HomePage = () => {
    return (
        <div >
            <div className='offer'>
                <div className='offer__wrapper'>
                    <Menu />
                    <div className='container'>
                        <div className='offer__inner'>
                            <h1 className='offer__title'>
                                Автобусные билеты по лучшим ценам
                            </h1>
                            <SearchForm className='offer__form' />
                        </div>
                    </div>
                </div>
            </div>
            <Slider title={'Популярные маршруты'} className={'slider-routes'}/>
            <Actions />
            <Info />
            <Advantages />
            <Accordion
                itemsLeft={accordionItemsLeft}
                itemsRight={accordionItemsRight} />
            
        </div>
    );
};

export default HomePage;