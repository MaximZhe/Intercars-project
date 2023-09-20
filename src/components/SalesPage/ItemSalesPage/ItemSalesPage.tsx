import { IItemSalesPageProps } from '@/types/types';
import moment from 'moment';
import 'moment/locale/ru'
import { FC } from 'react';
import { Link } from 'react-router-dom';



const ItemSalesPage = ({dataItem} : {dataItem: IItemSalesPageProps} ) => {
    


    const defaultDate = moment(dataItem.date).format('DD.MMMM.YYYY');

    // const defaultNextDate = moment(TodayDate).add(1, 'd').format('DD.MM.YYYY');
    console.log(defaultDate)
    return (
        <div className='sales-item'>
            <span className='sales-item__date'>
                
            </span>
            <h2 className='sales-item__title'>

            </h2>
            <p className='sales-item__text'>

            </p>
            <p className='sales-item__start-date'>

            </p>
            <Link to='' className='sales-item__more'>

            </Link>

        </div>
    );
};

export default ItemSalesPage;