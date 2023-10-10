import { FC } from 'react';
import Button from '../UI/Button/Button';
import arrow from '../../assets/icons/Arrow static blue.svg';

import './ListRatesItem.scss';

import { WindowScreenUser } from '../../utils/windowScreen';
import { SwitchClassImg } from '../../utils/classStyleTranfer';

import { IItemRoutes , ITariffData } from '../../types/types';
import ListItemIcons from '../ListItemIcons/ListItemIcons';
import moment from 'moment';
import { formatedDate } from '@/utils/formatedDateRates';

interface ItemRatesProps {
  data: IItemRoutes;
  sortedPrices: number[];
}
const ListRatesItem: FC<ItemRatesProps> = ({ data, sortedPrices }) => {
  
  const width = WindowScreenUser()
const transfer = 0;
  const spentClassBackground = SwitchClassImg(width, transfer);
  const defaultDate = moment(new Date()).format();
  const newDate = formatedDate(defaultDate);
console.log(sortedPrices[0])
  const formatedPrice = (price:number) => {
      return Math.floor(price);
  }
  return (
    <div className={`list-item ${sortedPrices[0] === data.Price[2].Ptar ? 'list-item--best' : ''} `}>
      <div className='list-item-offer--mobail'>
        <p className='list-item-offer__company'>Intercars</p>
        {sortedPrices[0] === data.Price[2].Ptar ?
          <div className={`list-item-offer__best` }>
            <p className='list-item-offer__text'>Лучшая цена</p>
          </div> : null
        }
      </div>
      <div className='list-item__wrapper'>
        <div className='list-item-info'>
          <div className='list-item-info__top'>
            <div className='list-item__data text-left'>
              <p className='list-item__date'>{data.DateDepart}</p>
              <div className='list-item__time'>{data.TimeDepart}</div>
            </div>
            <div className='list-item-spent'>
              <p className='list-item-spent__time'>В пути: {data.Hour}ч {data.Minuts}мин</p>
              {transfer !== 0 ?
                <div className='list-item-spent__transfer'>
                  <span>{transfer} </span>пересадка</div> : null
              }
              <div className={`list-item-spent__img ${spentClassBackground}`} ></div>
            </div>
            <div className='list-item__data text-right'>
              <p className='list-item__date '>{data.DateArrive}</p>
              <div className='list-item__time'>{data.TimeArrive}</div>
            </div>
          </div>
          <>
            <div className={`list-item-spent__img--mobail ${transfer !== 0 ? 'list-item-spent__img--mobail-transfer' : ''}`}></div>
          </>
          <div className='list-item-info__bottom'>
            <div className='list-item__place'>
              <p className='list-item__city text-left'>{data.City1}</p>
              <p className='list-item__adress text-left'>{data.DepartName}</p>
            </div>
            <div className='list-item-company'>
              <p className='list-item-company__title'>Перевозчик</p>
              <p className='list-item-company__name'>{data.CarrierName}</p>
            </div>
            <div className='list-item__place'>
              <p className='list-item__city text-right'>{data.City2}</p>
              <p className='list-item__adress text-right'>{data.ArriveName}</p>
            </div>
          </div>
        </div>
        <div className='list-item-details'>
          <button type='button' className='list-item-details__btn'>
            Детали маршрута
            <img src={arrow} className='list-item-details__icon' alt='' />
          </button>
          <ListItemIcons />
        </div>
        <div className='list-item-details-component'>
          <div className='list-item-details-component__list'>
            <div className='list-item-details-component__item'>
              <div className='list-item-details-component__data'>
                <p className='list-item-details-component__time'>
                  22:45
                </p>
                <p className='list-item-details-component__date'>
                  {newDate}
                </p>
              </div>
              <div className='list-item-details-component__adress'>
                <p className='list-item-details-component__city'>
                  Минск
                </p>
                <p className='list-item-details-component__street'>
                  Центральный автовокзал, ул. Бобруйская, 6
                </p>
              </div>
            </div>
            <div className='list-item-details-component__item'>
              <div className='list-item-details-component__data'>
                <p className='list-item-details-component__time'>
                  01:30
                </p>
                <p className='list-item-details-component__date'>
                  {newDate}
                </p>
              </div>
              <div className='list-item-details-component__adress'>
                <p className='list-item-details-component__city'>
                  Брест
                </p>
                <p className='list-item-details-component__street'>
                  Остановка общественного транспорта ТЦ "Корона" (ул. Московская, 210)
                </p>
              </div>
            </div>
            <div className={`list-item-details-component__item ${transfer !== 0 ? 'start-transfer' : ''}`}>
              <div className= 'list-item-details-component__data'>
                <p className='list-item-details-component__time'>
                  07:30
                </p>
                <p className='list-item-details-component__date'>
                  {newDate}
                </p>
              </div>
              <div className='list-item-details-component__adress'>
                <p className='list-item-details-component__city'>
                  Варшава
                </p>
                <p className='list-item-details-component__street'>
                  Автовокзал Заходни,"Иерусалимские ворота 144" 20 м. от главного входа.
                </p>
              </div>
            </div>
            <div className={`list-item-details-component__item ${transfer !== 0 ? 'end-transfer' : ''}`}>
              <div className='list-item-details-component__data'>
                <p className='list-item-details-component__time'>
                  01:30
                </p>
                <p className='list-item-details-component__date'>
                  {newDate}
                </p>
              </div>
              <div className='list-item-details-component__adress'>
                <p className='list-item-details-component__city'>
                  Варшава
                </p>
                <p className='list-item-details-component__street'>
                  Автовокзал Заходни
                </p>
              </div>
            </div>
            <div className='list-item-details-component__item'>
              <div className='list-item-details-component__data'>
                <p className='list-item-details-component__time'>
                  07:00
                </p>
                <p className='list-item-details-component__date'>
                  {newDate}
                </p>
              </div>
              <div className='list-item-details-component__adress'>
                <p className='list-item-details-component__city'>
                  Берлин
                </p>
                <p className='list-item-details-component__street'>
                  Bus Station (ZOB) "Am Funkturm" on Masurenallee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='list-item-order'>
        <div className='list-item-offer'>
          <p className='list-item-offer__company'>{data.CarrierName}</p>
          {sortedPrices[0] === data.Price[2].Ptar ?
            <div className='list-item-offer__best'>
              <p className='list-item-offer__text'>Лучшая цена</p>
            </div> : null
          }
        </div>
        <div className='list-item-order__inner'>
          <p className='list-item-order__price'>{data.Price[2].Ptar ? formatedPrice(data.Price[2].Ptar) : null} {data.Price[2].CurrencyName}</p>
          <div className='list-item-places--mobail'>
            <p className='list-item-places__free'>Осталось мест: {data.FreePlace} </p>
            <p className='list-item-places__stock'>Aкционных мест: {}</p>
          </div>
        </div>
        <Button type='button' className='list-item-order__btn'>
          Выбрать билет
        </Button>
        <div className='list-item-places'>
          <p className='list-item-places__free'>Осталось мест: {data.FreePlace} </p>
          <p className='list-item-places__stock'>Aкционных мест: {} </p>
        </div>
      </div>
    </div>
  );
};

export default ListRatesItem;