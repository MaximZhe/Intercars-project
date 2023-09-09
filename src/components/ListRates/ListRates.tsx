import { FC } from 'react';
import ListRatesItem from '../ListRatesItem/ListRatesItem';
import './ListRates.scss';
import { ITariffData } from '../../types/types';

interface ListRatesProps {
    datas: ITariffData[];
}
const ListRates: FC<ListRatesProps> = ({ datas }) => {
    const sortedPrices = datas.map(item => item.price).sort((a, b) => a - b);
    return (
        <div className='list'>
            {datas.map((data) => (
                <ListRatesItem key={data.id} data={data} sortedPrices={sortedPrices}/>
            ))}
        </div>
    );
};

export default ListRates;