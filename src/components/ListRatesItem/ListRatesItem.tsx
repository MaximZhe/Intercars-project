import { FC} from 'react';
import Button from '../UI/Button/Button';
import arrow from '../../assets/icons/Arrow Icon.svg';

import './ListRatesItem.scss';

import { WindowScreenUser } from '../../utils/windowScreen';
import { SwitchClassImg } from '../../utils/classStyleTranfer';

import { ITariffData } from '../../types/types';
import ListItemIcons from '../ListItemIcons/ListItemIcons';

interface ItemRatesProps {
  data: ITariffData;
  sortedPrices: number[];
}
const ListRatesItem: FC<ItemRatesProps> = ({ data, sortedPrices }) => {
  const width = WindowScreenUser()

  const spentClassBackground =SwitchClassImg(width, data.transfer);

  return (
    <div className={`list-item ${sortedPrices[0] === data.price ? 'list-item--best' : ''} `}>
      <div className='list-item-offer--mobail'>
        <p className='list-item-offer__company'>Intercars</p>
        {sortedPrices[0] === data.price ?
          <div className='list-item-offer__best'>
            <p className='list-item-offer__text'>Лучшая цена</p>
          </div> : null
        }
      </div>
      <div className='list-item__wrapper'>
        <div className='list-item-info'>
          <div className='list-item-info__top'>
            <div className='list-item__data text-left'>
              <p className='list-item__date'>20 АПР, чт</p>
              <div className='list-item__time'>{data.time.start}</div>
            </div>
            <div className='list-item-spent'>
              <p className='list-item-spent__time'>В пути: {data['travel time'].hours}ч {data['travel time'].minutes}мин</p>
              {data.transfer !== 0 ?
                <div className='list-item-spent__transfer'>
                  <span>{data.transfer} </span>пересадка</div> : null
              }
              <div className={`list-item-spent__img ${spentClassBackground}`} ></div>
            </div>
            <div className='list-item__data text-right'>
              <p className='list-item__date '>22 АПР, сб</p>
              <div className='list-item__time'>{data.time.finish}</div>
            </div>
          </div>
          <>
            <div className={`list-item-spent__img--mobail ${data.transfer !== 0 ? 'list-item-spent__img--mobail-transfer' : ''}`}></div>
          </>
          <div className='list-item-info__bottom'>
            <div className='list-item__place'>
              <p className='list-item__city text-left'>{data.city.start}</p>
              <p className='list-item__adress text-left'>{data.station.start}</p>
            </div>
            <div className='list-item-company'>
              <p className='list-item-company__title'>Перевозчик</p>
              <p className='list-item-company__name'>{data.company}</p>
            </div>
            <div className='list-item__place'>
              <p className='list-item__city text-right'>{data.city.finish}</p>
              <p className='list-item__adress text-right'>{data.station.finish}</p>
            </div>
          </div>
        </div>
        <div className='list-item-details'>
          <button type='button' className='list-item-details__btn'>
            Детали маршрута
            <img src={arrow} alt='' />
          </button>
          <ListItemIcons/>
        </div>
      </div>
      <div className='list-item-order'>
        <div className='list-item-offer'>
          <p className='list-item-offer__company'>Intercars</p>
          {sortedPrices[0] === data.price ?
            <div className='list-item-offer__best'>
              <p className='list-item-offer__text'>Лучшая цена</p>
            </div> : null
          }
        </div>
        <div className='list-item-order__inner'>
          <p className='list-item-order__price'>{data.price} RUB</p>
          <div className='list-item-places--mobail'>
            <p className='list-item-places__free'>Осталось мест: {data['number of seats']} </p>
            <p className='list-item-places__stock'>Aкционных мест: {data['sale of seats']}</p>
          </div>
        </div>
        <Button type='button' className='list-item-order__btn'>
          Выбрать билет
        </Button>
        <div className='list-item-places'>
          <p className='list-item-places__free'>Осталось мест: {data['number of seats']} </p>
          <p className='list-item-places__stock'>Aкционных мест: {data['sale of seats']} </p>
        </div>
      </div>
    </div>
  );
};

export default ListRatesItem;