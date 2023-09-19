import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IDataItem {
    data: {
        id: number,
        value: string,
        price: number
    }
}

const RouteItem: FC<IDataItem> = ({ data }) => {
    return (
        <Link to='' className='slider__item slider-size' data-item={`${data.id}`} >
            <div className='slider__content'>
                <p className='slider__name'>{data.value}</p>
                <p className='slider__price'>от <span>{data.price}RUB</span></p>
            </div>
        </Link>
    );
};

export default RouteItem;