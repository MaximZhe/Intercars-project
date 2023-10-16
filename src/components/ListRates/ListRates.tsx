import { FC, useEffect, useState } from 'react';
import ListRatesItem from '../ListRatesItem/ListRatesItem';
import './ListRates.scss';
import { useAppSelector } from '@/hooks/redux';
import SearchForm, { IRouteData } from '../SearchForm/SearchForm';
import Breadcrumbs from '../UI/Breadcrumbs/Breadcrumbs';
import axios from 'axios';
import { IItemCarrierRoutes, IItemRoutes } from '@/types/types';
import ListRatesFilterButtons from '../ListRatesFilterButtons/ListRatesFilterButtons';
import moment from 'moment';
import { useMatchMedia } from '@/hooks/useMatchMedia';


export interface IRoute {
    CarrierRoutes: IItemCarrierRoutes[];
}
const ListRates: FC = () => {

  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  console.log(isMobile, isTablet, isDesktop)
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
    const [routes, setRoutes] = useState<IItemRoutes[]>([]);
    const [isSortPrice, setIsSortPrice] = useState(false);
    const [isSortTimeDepart, setIsSortTimeDepart] = useState(false);
    const [isSortTimeArrive, setIsSortTimeArrive] = useState(false);
    const [isSortTimeFull, setIsSortTimeFull] = useState(false);
    const { dataRoute } = useAppSelector(state => state.dataRouteReduser);
    useEffect(() => {
        const fetchDynamicRoutes = async (id: string) => {
        try {
          const da = {
            "SearchId": id,
          };
          const response = await axios.post('/api/v1/routes/search', da);
          const dat = response.data;
          setRouteData(dat);
          setRoutes(dat.Result.CarrierRoutes.map((item: { Routes: any; }) => item.Routes).flat())
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
    const sortedRoutesPriceBest = (routes: any[]) => {
      return routes.map(item => item.Price[2].Ptar).sort((a, b) => a - b);
    }
    const sortedRoutesPrice = () => {
      setIsSortPrice(prev => !prev);
      if(isSortPrice){
        const newArrayRoutes = [...routesArray].sort((a, b) => a.Price[2].Ptar - b.Price[2].Ptar);
        setRoutes(newArrayRoutes);
        
      }else{
        const newArrayRoutes = [...routesArray].sort((a, b) => a.Price[2].Ptar - b.Price[2].Ptar).reverse();
        setRoutes(newArrayRoutes);
      }
    }
    const sortedRoutesTimeDepart = () => {
      setIsSortTimeDepart(prev => !prev)
      if(isSortTimeDepart){
        const newArrayRoutes = [...routesArray].sort((a, b) => a.TimeDepart.localeCompare(b.TimeDepart));
        setRoutes(newArrayRoutes);
        
      }else{
        const newArrayRoutes = [...routesArray].sort((a, b) => b.TimeDepart.localeCompare(a.TimeDepart));
        setRoutes(newArrayRoutes);
      }
    }
    function formatedTime (time:string) {
const newTime = moment(time, 'HH:mm').format('HH');
return parseInt(newTime)
    }
    const sortedRoutesTimeArrive = () => {
      setIsSortTimeArrive(prev => !prev)
      if(isSortTimeArrive){
        const newArrayRoutes = [...routesArray].sort((a, b) => a.TimeArrive.localeCompare(b.TimeArrive));
        setRoutes(newArrayRoutes);
        
      }else{
        const newArrayRoutes = [...routesArray].sort((a, b) => b.TimeArrive.localeCompare(a.TimeArrive));
        setRoutes(newArrayRoutes);
      }
    }
    const sortedRoutesTimeFull = () => {
      setIsSortTimeFull(prev => !prev)
      if(isSortTimeFull){
        const newArrayRoutes = [...routesArray].sort((a, b) => { const hoursComparison = a.Hour.localeCompare(b.Hour);
          if (hoursComparison !== 0) {
            return hoursComparison;
          }
          return a.Minuts.localeCompare(b.Minuts);
        });
        setRoutes(newArrayRoutes);
        
      }else{
        const newArrayRoutes = [...routesArray].sort((a, b) => { const hoursComparison = b.Hour.localeCompare(a.Hour);
          if (hoursComparison !== 0) {
            return hoursComparison;
          }
          return b.Minuts.localeCompare(a.Minuts);
        });
        setRoutes(newArrayRoutes);
      }
    }
    const sortedPrices = sortedRoutesPriceBest(routesArray) 
    console.log(routes)
    
    return (
        <section className='rates'>
            <SearchForm className='rates__form' />
            <div className='container'>
                <div className='rates__wrapper'>
                  <div className='rates__header'>
                    {!isMobile ? <Breadcrumbs /> : null }
                    <div className='rates__filter'>
                      <ListRatesFilterButtons onClick={sortedRoutesTimeDepart} isSort={isSortTimeDepart} title={'Время отправления'}/>
                      <ListRatesFilterButtons onClick={sortedRoutesTimeArrive} isSort={isSortTimeArrive} title={'Время прибытия'}/>
                      <ListRatesFilterButtons onClick={sortedRoutesTimeFull} isSort={isSortTimeFull} title={'Время в пути'}/>
                      <ListRatesFilterButtons onClick={sortedRoutesPrice} title={'Стоимость'} isSort={isSortPrice}/>
                    </div>
                  </div>
                    
                    <div className='list'>
                        {routes.length < 1 ? <p>Нет подходящих рейсов, выберите другую дату или маршрут</p> : null}
                        {routes.map((data) => (
                            <ListRatesItem key={data.Id} data={data} sortedPrices={sortedPrices} />
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ListRates;