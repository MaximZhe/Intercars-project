import { FC } from 'react';
import ListRatesItem from '../ListRatesItem/ListRatesItem';
import './ListRates.scss';
import { useAppSelector } from '@/hooks/redux';
import SearchForm from '../SearchForm/SearchForm';
import Breadcrumbs from '../UI/Breadcrumbs/Breadcrumbs';


const ListRates: FC = () => {
    const formatedPrice = (price: number) => {
        return Math.floor(price);
    }
    const { dataRoute } = useAppSelector(state => state.dataRouteReduser);
    const routesArray = dataRoute.Result.CarrierRoutes.map((item: { Routes: any; }) => item.Routes).flat();
    const sortedPrices = routesArray.map(item => item.Price[2].Ptar).sort((a, b) => a - b);
    console.log(routesArray)
    return (
        <section className='rates'>
            <SearchForm className='rates__form' />
            <div className='container'>
                <div className='rates__wrapper'>
                    <Breadcrumbs />
                    <div className='list'>
                        {routesArray.length < 1 ? <p>Нет подходящих рейсов, выберите другую дату или маршрут</p> : null}
                        {routesArray.map((data) => (
                            <ListRatesItem key={data.Id} data={data} sortedPrices={sortedPrices} />
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ListRates;