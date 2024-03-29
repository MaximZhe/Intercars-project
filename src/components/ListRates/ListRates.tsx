import { FC, useEffect, useState } from 'react';
import ListRatesItem from '../ListRatesItem/ListRatesItem';
import './ListRates.scss';
import { useAppSelector } from '@/hooks/redux';
import SearchForm, { IRouteData } from '../SearchForm/SearchForm';
import Breadcrumbs from '../UI/Breadcrumbs/Breadcrumbs';
import axios from 'axios';
import { IItemCarrierRoutes, IItemRoutes } from '@/types/types';
import ListRatesFilterButtons from '../ListRatesFilterButtons/ListRatesFilterButtons';

import { useMatchMedia } from '@/hooks/useMatchMedia';
// import { setStoregeRoute } from '../../redux/slice/storegeDataRoute';
import { GridLoader } from 'react-spinners';

export interface IRoute {
  CarrierRoutes: IItemCarrierRoutes[];
}
const ListRates: FC = () => {

  const { isMobile} = useMatchMedia();

  // const formatedPrice = (price: number) => {
  //   return Math.floor(price);
  // }
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

 const [loading, setLoading] = useState(true);
  
  const [routes, setRoutes] = useState<IItemRoutes[]>([]);
  const [isSortPrice, setIsSortPrice] = useState(false);
  const [isSortTimeDepart, setIsSortTimeDepart] = useState(false);
  const [isSortTimeArrive, setIsSortTimeArrive] = useState(false);
  const [isSortTimeFull, setIsSortTimeFull] = useState(false);
  const { dataRoute } = useAppSelector(state => state.dataRouteReduser);
  // const { Routes } = useAppSelector(state => state.storegeRouteReduser)

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
        localStorage.setItem("userData", JSON.stringify(dat.Result.CarrierRoutes.map((item: { Routes: any; }) => item.Routes).flat()));
        // dispatch(setStoregeRoute(dat.Result.CarrierRoutes.map((item: { Routes: any; }) => item.Routes).flat()));
        setLoading(routeData.Result.IsActive)
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
        setLoading(false)
      };
    }
  }, [dataRoute, routeData.Result.IsActive])
console.log(loading)
console.log(routeData.Result.IsActive)
  useEffect(() => {
    // Сохраняем данные в localStorage


    // Получаем данные из localStorage
    const savedData = localStorage.getItem("userData");

    // Проверяем, сохранены ли данные
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      // console.log("Данные успешно загружены из localStorage:", parsedData);
      setRoutes(parsedData);
      setLoading(false)
    } else {
      console.log("Данные не найдены в localStorage");
    }
  }, []);
  // const routesArray = routes.map((item: { Routes: any; }) => item.Routes).flat();
  const sortedRoutesPriceBest = (routes: any[]) => {
    return routes.map(item => item.Price[2].Ptar).sort((a, b) => a - b);
  }
  const sortedRoutesPrice = () => {
    setIsSortPrice(prev => !prev);
    if (isSortPrice) {
      const newArrayRoutes = [...routes].sort((a, b) =>
      {
        if (a.Price[2].Ptar && b.Price[2].Ptar) {
          return a.Price[2].Ptar - b.Price[2].Ptar;
        }
        return 0;
      } );
      setRoutes(newArrayRoutes);

    } else {
      const newArrayRoutes = [...routes].sort((a, b) => 
      {
        if (a.Price[2].Ptar && b.Price[2].Ptar) {
          return a.Price[2].Ptar - b.Price[2].Ptar;
        }
        return 0;
      }).reverse();
      setRoutes(newArrayRoutes);
    }
  }
  const sortedRoutesTimeDepart = () => {
    setIsSortTimeDepart(prev => !prev)
    if (isSortTimeDepart) {
      const newArrayRoutes = [...routes].sort((a, b) => {
        if (a.TimeDepart && b.TimeDepart) {
          return a.TimeDepart.localeCompare(b.TimeDepart);
        }
        return 0;
      });
      setRoutes(newArrayRoutes);

    } else {
      const newArrayRoutes = [...routes].sort((a, b) => {
        if (b.TimeDepart && a.TimeDepart) {
          return b.TimeDepart.localeCompare(a.TimeDepart);
        }
        return 0;
      });
      setRoutes(newArrayRoutes);
    }
  }
  // function formatedTime(time: string) {
  //   const newTime = moment(time, 'HH:mm').format('HH');
  //   return parseInt(newTime)
  // }
  const sortedRoutesTimeArrive = () => {
    setIsSortTimeArrive(prev => !prev)
    if (isSortTimeArrive) {
      const newArrayRoutes = [...routes].sort((a, b) => {
        if (a.TimeArrive && b.TimeArrive) {
          return a.TimeArrive.localeCompare(b.TimeArrive);
        }
        return 0;
      });
      setRoutes(newArrayRoutes);

    } else {
      const newArrayRoutes = [...routes].sort((a, b) => {
        if (b.TimeArrive && a.TimeArrive) {
          return b.TimeArrive.localeCompare(a.TimeArrive);
        }
        return 0;
      });
      setRoutes(newArrayRoutes);
    }
  }
  const sortedRoutesTimeFull = () => {
    setIsSortTimeFull(prev => !prev)
    if (isSortTimeFull) {
      const newArrayRoutes = [...routes].sort((a, b) => {
        if (a.Hour && b.Hour) {
          const hoursComparison = a.Hour.localeCompare(b.Hour);
          if (hoursComparison !== 0) {
            return hoursComparison;
          }
        }
        return a.Minuts.localeCompare(b.Minuts);
      });
      setRoutes(newArrayRoutes);

    } else {
      const newArrayRoutes = [...routes].sort((a, b) => {
        
          if (b.Hour && a.Hour) {
            const hoursComparison = b.Hour.localeCompare(a.Hour);
            if (hoursComparison !== 0) {
              return hoursComparison;
            }
          }
          return b.Minuts.localeCompare(a.Minuts);
      });
      setRoutes(newArrayRoutes);
    }
  }
  const sortedPrices = sortedRoutesPriceBest(routes)
  return (
    <section className='rates'>
      <SearchForm className='rates__form' />
      <div className='container'>
        <div className='rates__wrapper'>
          <div className='rates__header'>
            {!isMobile ? <Breadcrumbs /> : null}
            <div className='rates__filter'>
              <ListRatesFilterButtons onClick={sortedRoutesTimeDepart} isSort={isSortTimeDepart} title={'Время отправления'} />
              <ListRatesFilterButtons onClick={sortedRoutesTimeArrive} isSort={isSortTimeArrive} title={'Время прибытия'} />
              <ListRatesFilterButtons onClick={sortedRoutesTimeFull} isSort={isSortTimeFull} title={'Время в пути'} />
              <ListRatesFilterButtons onClick={sortedRoutesPrice} title={'Стоимость'} isSort={isSortPrice} />
            </div>
          </div>

          <div className='list'>
            <GridLoader color={'#0243A6'} loading={loading} size={10}/>
            {!loading && routes.length < 1 ? <p>Нет подходящих рейсов, выберите другую дату или маршрут</p> : null}
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