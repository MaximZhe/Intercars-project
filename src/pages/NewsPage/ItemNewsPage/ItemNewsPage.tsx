import ButtonRoutes from '@/components/UI/Button/ButtonRoutes/ButtonRoutes';
import { IItemNewsPageProps } from '@/types/types';
import moment from 'moment';
import './ItemNewsPage.scss';
import { useParams } from 'react-router-dom';
import { setDataItem } from '@/redux/slice/singleItemSalesSlice';
import { useAppDispatch } from '@/hooks/redux';


const ItemNewsPage = ({ dataItem }: { dataItem: IItemNewsPageProps }) => {
    const dispatch = useAppDispatch()
    const defaultDate = moment(dataItem.date).format('DD MM YYYY');
    const newMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const monthIndex1 = moment(dataItem.date).format('MM');
    const monthIndex = +monthIndex1 - 1
    const newDate = defaultDate.replace(/(\d{2}) (\d{2}) (\d{4})/, `$1 ${newMonth[monthIndex]} $3`);
    const newDateStart = newDate.slice(0, -5);
    console.log(newDate)
    function formatedMonth(month: any) {
        const newMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    }

    function decodeQueryParam(p: any) {
        return encodeURIComponent(p.replace(/\+/g, " "));
    }
    const encode = decodeQueryParam(dataItem.mainTitle);

    


    return (
        <div className='news-item'>
            <span className='news-item__date'>
                {newDate}
            </span>
            <h2 className='news-item__main-title'>
                {dataItem.mainTitle}
            </h2>
            <ButtonRoutes
                to={`/Home/news/${dataItem.id}`}
                state={`Главная/Новости/${encode}`}
                title={'Подробнее'}
                className={'news-item__more'}
            />
        </div>
    );
};

export default ItemNewsPage;