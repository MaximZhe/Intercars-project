
import wifi from '../../assets/icons/Wi-Fi.svg';
import air from '../../assets/icons/Air Cond.svg';
import usb from '../../assets/icons/USB.svg';

const ListItemIcons = () => {
    return (
        <div className='list-item-icons'>
            <div className='list-item-icons__item'>
              <img src={wifi} alt='' />
            </div>
            <div className='list-item-icons__item'>
              <img src={air} alt='' />
            </div>
            <div className='list-item-icons__item'>
              <img src={usb} alt='' />
            </div>
          </div>
    );
};

export default ListItemIcons;