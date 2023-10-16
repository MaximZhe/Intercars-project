import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './SearchForm.scss';
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg';
import { ReactComponent as ArrowForm } from '../../assets/icons/arrow-form.svg';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch} from '@/hooks/redux';
import { setDataRoute } from '@/redux/slice/getRoutesSlice';
import { defaultCityForm, defaultDateForm } from '@/constant/constant';

const initialStateResultCity = {
    Id: 0,
    Name: '',
    Coordinates: {
        Latitude: '',
        Longitude: ''
    }
}

export interface ICityDataProps {
    Result: [
        {
            Id: number,
            Name: string,
            Coordinates: {
                Latitude: string,
                Longitude: string
            }
        }
    ],
    Error: null
}
export interface IFetchDataRoutes {
    SearchId?: string,
    CityDeparture: number,
    CityArrival: number,
    Date: string,
    Carriers?: number[],
    IsDynamic?: boolean,
    Lang?: string
}
export interface IRouteData {
    Result: {
        CarrierRoutes: [],
        CityArrival: number,
        CityDeparture: number
        Date: string,
        Id: string,
        IsActive: boolean,
        IsDynamic: boolean,
        SaveDate: string
    },
    Error: null
}
const SearchForm = ({ className }: { className: string }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [cityDepartureValue, setCityDepartureValue] = useState<string>('');
    const [cityArrivalValue, setCityArrivalValue] = useState<string>('');
    const [cityDepartureData, setCityDepartureData] = useState<ICityDataProps>({
        Result: [initialStateResultCity],
        Error: null
    });
    const [cityArrivalData, setCityArrivalData] = useState<ICityDataProps>({
        Result: [initialStateResultCity],
        Error: null
    });
    const TodayDate = new Date();
    const defaultDate = moment(TodayDate).format('DD.MM.YYYY');
    const defaultNextDate = moment(TodayDate).add(1, 'd').format('DD.MM.YYYY');

    const [date, setDate] = useState(defaultDate);
    const [isCalendarShow, setCalendarShow] = useState(false)
    const [isButtonClicked, setButtonClicked] = useState(false);

    const formatedDateFetch = (date:any) => {
        const formetedDate = moment(date, 'DD.MM.YYYY').format('YYYY-MM-DD');
        return formetedDate
    }
    const handleDepartureChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setCityDepartureValue(e.target.value);
    };

    const handleArrivalChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setCityArrivalValue(e.target.value);
    };

    const handleDateChange = (selectedDate: any) => {
        const newDate = moment(selectedDate).format('DD.MM.YYYY');
        setDate(newDate);
        setCalendarShow(prevState => !prevState);
    };
    useEffect(() => {
        const fetchCityDeparture = async (cityDeparture: string) => {
            try {
                const data = {
                    name: cityDeparture,
                    lang: 'RUS'
                }
                const response = await axios.post('/api/v1/cities/find', data);
                const dat = response.data;
                setCityDepartureData(dat);
            }
            catch (error) {

                console.error('Ошибка при отправке данных на сервер:', error);
            }
        }
        if (cityDepartureValue.length > 3) {
            fetchCityDeparture(cityDepartureValue);
        }
        const fetchCityArrival = async (cityArrival: string) => {
            try {
                const data = {
                    name: cityArrival,
                    lang: 'RUS'
                }
                const response = await axios.post('/api/v1/cities/find', data);
                const dat = response.data;
                setCityArrivalData(dat);
            }
            catch (error) {

                console.error('Ошибка при отправке данных на сервер:', error);
            }
        }
        if (cityArrivalValue.length > 3) {
            fetchCityArrival(cityArrivalValue);
        }
    }, [cityArrivalValue, cityDepartureValue])
    const fetchData = async () => {
        const newDateFormated = formatedDateFetch(date);
        try {
            const datas: IFetchDataRoutes = {
                CityDeparture: cityDepartureData.Result[0].Id,
                CityArrival: cityArrivalData.Result[0].Id,
                Date: newDateFormated,
                IsDynamic: true,
            };
            console.log(datas)
            const response = await axios.post('/api/v1/routes/search', datas);
            const dat = response.data;
            dispatch(setDataRoute(dat));
            navigate('/Intercars-project/list-result-routes', { state: 'Главная/Поиск билетов' });
        } catch (error) {
           
            console.error('Ошибка при отправке данных на сервер:', error);
        } finally {
            setCityDepartureValue('');
            setCityArrivalValue('');
        }
    };

    if (isButtonClicked) {
        fetchData();
        setButtonClicked(false);
    }
    const handleSubmit = () => {
        setButtonClicked(true);
    };
    return (
        <>
            <form className={`form-search ${className}`}>
                <div className='form-search__wrapper'>
                    <label className='form-search__label'>Откуда</label>
                    <div className='form-search__container'>
                        <input className='form-search__input'
                            id="departure"
                            name='departure'
                            type="text"
                            value={cityDepartureValue}
                            onChange={handleDepartureChange}
                            placeholder='Пункт отправления'
                        />
                        <ArrowForm width={33} height={32} className='form-search__image' />
                    </div>

                    <div className='form-search__sample'>
                        <p className='form-search__text'>Например:</p>
                        <button className='form-search__btn' type='button' onClick={() => setCityDepartureValue(defaultCityForm.Minsk)}>{defaultCityForm.Minsk}</button>
                        <button className='form-search__btn' type='button' onClick={() => setCityDepartureValue(defaultCityForm.Mosсow)}>{defaultCityForm.Mosсow}</button>
                    </div>
                </div>

                <div className='form-search__wrapper'>
                    <label className='form-search__label'>Куда</label>

                    <input
                        className='form-search__input'
                        id="arrival"
                        name='arrival'
                        type="text"
                        value={cityArrivalValue}
                        onChange={handleArrivalChange}
                        placeholder='Пункт назначения'
                    />
                    <div className='form-search__sample'>
                        <p className='form-search__text'>Например:</p>

                        <button className='form-search__btn' type='button' onClick={() => setCityArrivalValue(defaultCityForm.Minsk)}>{defaultCityForm.Minsk}</button>
                        <button className='form-search__btn' type='button' onClick={() => setCityArrivalValue(defaultCityForm.Mosсow)}>{defaultCityForm.Mosсow}</button>
                    </div>
                </div>

                <div className='form-search__wrapper'>
                    <label className='form-search__label'>Когда</label>
                    <div className='form-search__container'>
                        <input
                            className='form-search__input'
                            id="date"
                            name='date'
                            type="text"
                            value={date}
                            readOnly
                            onClick={() => setCalendarShow(true)}
                        />
                        <CalendarIcon
                            width={24}
                            height={24}
                            className='form-search__icon'
                            onClick={() => setCalendarShow(prevState => !prevState)}
                        />
                    </div>

                    <div className='form-search__sample'>
                        <p className='form-search__text'>Например:</p>
                        <button className='form-search__btn' type='button' onClick={() => setDate(defaultDate)}>{defaultDateForm.Today}</button>
                        <button className='form-search__btn' type='button' onClick={() => setDate(defaultNextDate)}>{defaultDateForm.Tomorrow}</button>
                    </div>
                    {isCalendarShow ?
                        <div className='form-search__calendar'>
                            <Calendar
                                onClickDay={handleDateChange}
                                value={TodayDate}
                            />
                        </div>
                        : null}
                </div>
                <div className='form-search__wrapper'>
                    <button  className='form-search__btn-submit' type='button' onClick={handleSubmit}>Найти билеты</button>
                </div>
            </form>
        </>
    );
};

export default SearchForm;