import { FC, useEffect, useState } from 'react';
import ListRatesItem from '../ListRatesItem/ListRatesItem';
import './ListRates.scss';
import { useAppSelector } from '@/hooks/redux';
import SearchForm, { IRouteData } from '../SearchForm/SearchForm';
import Breadcrumbs from '../UI/Breadcrumbs/Breadcrumbs';
import axios from 'axios';
import { IItemCarrierRoutes } from '@/types/types';


export interface IRoute {
    CarrierRoutes: IItemCarrierRoutes[];
}
const ListRates: FC = () => {
    const formatedPrice = (price: number) => {
        return Math.floor(price);
    }
    const [routeData, setRouteData] = useState<IRouteData>({
        Result: {
            CarrierRoutes: [],
            CityArrival: 0,
            CityDeparture: 0,
            Date: '',
            Id: '',
            IsActive: false,
            IsDynamic: false,
            SaveDate: ''
        },
        Error: null
    })
    const [routes, setRoutes] = useState<IRoute>({
        CarrierRoutes: [], 
    })
    const { data } = useAppSelector(state => state.cityFormDataReduser);
    const { dataRoute } = useAppSelector(state => state.dataRouteReduser);
    useEffect(() => {
        const fetchDynamicRoutes = async (id: string) => {
        try {
          const da = {
            "SearchId": id,
          };
          const response = await axios.post('/api/v1/routes/search', da);
          const dat = response.data;
          console.log(dat);
          setRouteData(dat);
          const routesArray = dat.Result.CarrierRoutes.map((item: { Routes: any; }) => item.Routes).flat();
          setRoutes(routesArray);
          console.log(routesArray.length)
          
          
        } catch (error) {
          console.error('Ошибка при отправке данных на сервер:', error);
        }
      };
      fetchDynamicRoutes(dataRoute.Result.Id);
      if (routeData.Result.IsActive) {
        const timer = setInterval(async () => {
          await fetchDynamicRoutes(routeData.Result.Id);
        }, 2000);
    
        return () => {
          clearInterval(timer);
        };
      }
    },[dataRoute, routeData.Result.IsActive])
    
   
    const routesArray = routeData.Result.CarrierRoutes.map((item: { Routes: any; }) => item.Routes).flat();
    const sortedPrices = routesArray.map(item => item.Price[2].Ptar).sort((a, b) => a - b);
    console.log(routeData)
    console.log(routes.CarrierRoutes)
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