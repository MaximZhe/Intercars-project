import { FC } from 'react';
import { Link } from 'react-router-dom';
import './RouteItem.scss';

interface IDataItem {
    data: {
        id: number,
        value: string,
        price: number
    },
    className: string
}

const RouteItem: FC<IDataItem> = ({ data, className }) => {
    return (
        <div className={`route-card ${className}`}>
            <Link to='/' className={`route-card__item ${className}__item`} data-item={`${data.id}`} >
                <div className={`route-card__content ${className}__content`}>
                    <p className={`route-card__name ${className}__name`}>{data.value}</p>
                    <p className={`route-card__price ${className}__price`}>от <span>{data.price}RUB</span></p>
                </div>
            </Link>
        </div>

    );
};

export default RouteItem;