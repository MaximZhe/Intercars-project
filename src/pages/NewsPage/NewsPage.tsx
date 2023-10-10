import Menu from '../../components/Header/Menu/Menu';
import './NewsPage.scss';

import { NewsPageListData, sliderRoutesInternational } from '../../constant/constant'
import ItemNewsPage from './ItemNewsPage/ItemNewsPage';
import RouteItem from '../../components/RouteItem/RouteItem';
import ButtonRoutes from '../../components/UI/Button/ButtonRoutes/ButtonRoutes';
import Button from '../../components/UI/Button/Button';
import { ReactComponent as ArrowRight } from '@assets/icons/arrow-right-blue.svg';
import { useState } from 'react';
import Breadcrumbs from '@/components/UI/Breadcrumbs/Breadcrumbs';

const NewsPage = () => {
    const [visibleItems, setVisibleItems] = useState(4);
    const itemsPerPage = 4; 

    const handleShowMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + itemsPerPage);
    };
    
    return (
        <>
            <Menu className='menu_theme_blue' />
            <section className='news'>
                <div className='container'>
                    <div className='news__wrapper'>
                        <div className='news__content'>
                            <Breadcrumbs/>
                            

                            <h1 className='news__title'>
                                Новости
                            </h1>
                            {NewsPageListData.slice(0, visibleItems).map((item) => (
                                <ItemNewsPage key={item.id} dataItem={item} />
                            ))}
                            
                            <Button disabled={NewsPageListData.length > visibleItems ? false : true} 
                            type='button'
                            onClick={handleShowMore}
                            className={`news__btn ${NewsPageListData.length > visibleItems ? '' : 'disabled'}`}>
                                <p className='news__btn-text'>Показать еще</p>
                                <ArrowRight className='news__icon' />
                            </Button>
                            
                        </div>
                        <div className='news__promo'>
                            {sliderRoutesInternational.slice(0, 2).map((item) => (

                                <RouteItem key={item.id} data={item} className={'news-route'} />

                            ))}
                            
                            <ButtonRoutes to={'/'} title={'Другие популярные маршруты'} className={'news__more'} />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default NewsPage;