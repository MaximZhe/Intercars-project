import { FC } from 'react';
import wifi from '../../assets/icons/Wi-Fi.svg';
import air from '../../assets/icons/Air Cond.svg';
import usb from '../../assets/icons/USB.svg';
import { IItemBusOptions } from '@/types/types';


interface IBusOptions {
  options: IItemBusOptions[]
}
const ListItemIcons: FC<IBusOptions> = ({ options }) => {
  return (
    <div className='list-item-icons'>
      {options[0].IsEnabled ?
        <div className='list-item-icons__item'>
          <img src={wifi} alt='' />
        </div>
        : null}
        {options[1].IsEnabled ?
        <div className='list-item-icons__item'>
          <img src={usb} alt='' />
        </div>
        : null}
        {options[2].IsEnabled ?
        <div className='list-item-icons__item'>
          <img src={wifi} alt='' />
        </div>
        : null}
        {options[3].IsEnabled ?
        <div className='list-item-icons__item'>
          <img src={wifi} alt='' />
        </div>
        : null}
        {options[4].IsEnabled ?
        <div className='list-item-icons__item'>
          <img src={wifi} alt='' />
        </div>
        : null}
        {options[5].IsEnabled ?
        <div className='list-item-icons__item'>
          <img src={wifi} alt='' />
        </div>
        : null}
        {options[6].IsEnabled ?
        <div className='list-item-icons__item'>
          <img src={air} alt='' />
        </div>
        : null}
    </div>
  );
};

export default ListItemIcons;