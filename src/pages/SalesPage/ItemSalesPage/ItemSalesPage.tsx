import ButtonRoutes from '@/components/UI/Button/ButtonRoutes/ButtonRoutes';
import { IItemSalesPageProps } from '@/types/types';
import moment from 'moment';
import './ItemSalesPage.scss';

import { formatedDate } from '@/utils/formatedDateRates';


const ItemSalesPage = ({dataItem} : {dataItem: IItemSalesPageProps} ) => {
    const defaultDate = moment(dataItem.date).format('DD MM YYYY');
    const newDate = formatedDate(defaultDate)
    const newDateStart = newDate.slice(0, -5);
    
    function decodeQueryParam(p:any) {
        return encodeURIComponent(p.replace(/\+/g, " "));
      }
    const encode = decodeQueryParam(dataItem.title);
    
    
    return (
        <div className='sales-item'>
            <span className='sales-item__date'>
                {newDate}
            </span>
            <h2 className='sales-item__title'>
                {dataItem.title}
            </h2>
            <p className='sales-item__start-date'>
            Старт акции {newDateStart} в 11:00
            </p>
            <ButtonRoutes 
            to={`/Intercars-project/promos/${dataItem.id}`} 
            state={`Главная/Акции/${encode}`} 
            title={'Подробнее'} 
            className={'sales-item__more'}
            />
        </div>
    );
};

export default ItemSalesPage;

