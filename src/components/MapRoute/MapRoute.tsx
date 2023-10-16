import React, { useEffect,} from 'react';

import { Map,Polyline, YMaps,  } from '@pbe/react-yandex-maps';

interface MapProps {
  ymaps: any;
}

const MapRoute:React.FC<MapProps> = ({ ymaps }) => {
  const mapState = { center: [55.751574, 37.573856], zoom: 6 };
  const routePoints = [
    [55.751574, 37.573856], // Москва
    [47.235713, 39.701505], // Ростов-на-Дону
  ];

  useEffect(() => {
    const calculateRoute = () => {
      ymaps.route(routePoints).then((route: any) => {
        const coordinates = route.getPaths().get(0).getCoordinates();
        console.log(coordinates); // Ваши координаты маршрута
      });
    };
    calculateRoute();
  }, []);
  

  return (
    <YMaps query={{ apikey: '4085e0a8-92c5-498b-8730-25f196bc54ea', load: 'package.full' }} >
      <Map state={mapState} width="100%" height="400px">
        <Polyline
          geometry={routePoints}
          options={{
            strokeColor: '#000000',
            strokeWidth: 4,
          }}
        />
      </Map>
    </YMaps>
  );
};

export default MapRoute;


