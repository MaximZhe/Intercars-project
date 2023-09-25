import Menu from '../../components/Header/Menu/Menu';
import './SalesPage.scss';

import { SalesPageListData, sliderRoutesInternational } from '../../constant/constant'
import ItemSalesPage from './ItemSalesPage/ItemSalesPage';
import RouteItem from '../../components/RouteItem/RouteItem';
import ButtonRoutes from '../../components/UI/Button/ButtonRoutes/ButtonRoutes';
import Button from '../../components/UI/Button/Button';
import { ReactComponent as ArrowRight } from '@assets/icons/arrow-right-blue.svg';
import { useState } from 'react';
import Breadcrumbs from '@/components/UI/Breadcrumbs/Breadcrumbs';

const SalesPage = () => {
    const [visibleItems, setVisibleItems] = useState(4);
    const itemsPerPage = 4; 

    const handleShowMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + itemsPerPage);
    };
    return (
        <>
            <Menu className='menu_theme_blue' />
            <section className='sales'>
                <div className='container'>
                    <div className='sales__wrapper'>
                        <div className='sales__content'>
                            <Breadcrumbs/>
                            

                            <h1 className='sales__title'>
                                Выгодные предложения Intercars
                            </h1>
                            {SalesPageListData.slice(0, visibleItems).map((item) => (
                                <ItemSalesPage key={item.id} dataItem={item} />
                            ))}
                            
                            <Button disabled={SalesPageListData.length > visibleItems ? false : true} 
                            type='button'
                            onClick={handleShowMore}
                            className={`sales__btn ${SalesPageListData.length > visibleItems ? '' : 'disabled'}`}>
                                <p className='sales__btn-text'>Показать еще</p>
                                <ArrowRight className='sales__icon' />
                            </Button>
                            
                        </div>
                        <div className='sales__promo'>
                            {sliderRoutesInternational.slice(0, 2).map((item) => (

                                <RouteItem key={item.id} data={item} className={'sales-route'} />

                            ))}
                            
                            <ButtonRoutes to={'/'} title={'Другие популярные маршруты'} className={'sales__more'} />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default SalesPage;