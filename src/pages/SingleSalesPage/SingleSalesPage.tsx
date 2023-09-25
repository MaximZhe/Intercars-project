import Menu from '@/components/Header/Menu/Menu';
import RouteItem from '@/components/RouteItem/RouteItem';
import Breadcrumbs from '@/components/UI/Breadcrumbs/Breadcrumbs';
import ButtonRoutes from '@/components/UI/Button/ButtonRoutes/ButtonRoutes';
import { sliderRoutesInternational } from '@/constant/constant';
import './SingleSalesPage.scss';
import { useAppSelector } from '@/hooks/redux';
import { useParams } from 'react-router-dom';


const SingleSalesPage = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <>
            <Menu className='menu_theme_blue' />
            <section className='sales-single'>
                <div className='container'>
                    <div className='sales-single__wrapper'>
                        <div className='sales-single__content'>
                            <Breadcrumbs/>
                            <div className='sales-single__item'>
                                <h1 className='sales-single__title'>

                                </h1>
                            </div>
                        </div>
                        <div className='sales-single__promo'>
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

export default SingleSalesPage;