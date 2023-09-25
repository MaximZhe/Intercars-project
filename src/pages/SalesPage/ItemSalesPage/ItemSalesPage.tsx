import ButtonRoutes from '@/components/UI/Button/ButtonRoutes/ButtonRoutes';
import { IItemSalesPageProps } from '@/types/types';
import moment from 'moment';
import './ItemSalesPage.scss';
import { useParams } from 'react-router-dom';
import { setDataItem } from '@/redux/slice/singleItemSalesSlice';
import { useAppDispatch } from '@/hooks/redux';


const ItemSalesPage = ({dataItem} : {dataItem: IItemSalesPageProps} ) => {
    const dispatch = useAppDispatch()
    const defaultDate = moment(dataItem.date).format('DD MM YYYY');
    const newMonth = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    const monthIndex1 = moment(dataItem.date).format('MM'); 
    const monthIndex = +monthIndex1 - 1
    const newDate = defaultDate.replace(/(\d{2}) (\d{2}) (\d{4})/, `$1 ${newMonth[monthIndex]} $3`);
    const newDateStart = newDate.slice(0, -5);
    console.log(newDate)
    function formatedMonth (month:any) {
        const newMonth = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря']
    }
    
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
            to={`/Home/sales/${dataItem.id}`} 
            state={`Главная/Акции/${encode}`} 
            title={'Подробнее'} 
            className={'sales-item__more'}
            />
        </div>
    );
};

export default ItemSalesPage;

