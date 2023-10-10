import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ITariffData } from '../../types/types';
import ListRates from '../ListRates/ListRates';
import './SearchForm.scss';
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg';
import { ReactComponent as ArrowForm } from '../../assets/icons/arrow-form.svg';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setDataRoute } from '@/redux/slice/getRoutesSlice';
import { fetchCityDeparture } from '@/redux/actions/fetchCityDeparture';
import { fetchCityArrival } from '@/redux/actions/fetchCityArrival';
const initialStateResult = {
    Id: 0,
    Name: '',
    Coordinates: {
        Latitude: '',
        Longitude: ''
    }
}
const initialStateRoute = {
    Result: {
        CarrierRoutes: [],
        CityArrival: 0,
        CityDeparture: 0,
        Date: '',
        Id: '',
        IsActive: false,
        IsDynamic: false,
        SaveDate: ''
    },
    Error: null
}
interface ICityDataProps {
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
interface IFetchDataRoutes {
    SearchId?: string,
    CityDeparture: number,
    CityArrival: number,
    Date: string,
    Carriers?: number[],
    IsDynamic?: boolean,
    Lang?: string

}
interface IRouteData {
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

    const [cityDepartureValue, setCityDepartureValue] = useState<string>('');
    const [cityArrivalValue, setCityArrivalValue] = useState<string>('');
    const [cityDepartureData, setCityDepartureData] = useState<ICityDataProps>({
        Result: [initialStateResult],
        Error: null
    });
    const [cityArrivalData, setCityArrivalData] = useState<ICityDataProps>({
        Result: [initialStateResult],
        Error: null
    });
    const [routeData, setRouteData] = useState<IRouteData>({
        Result: {
            CarrierRoutes: [],
            CityArrival: 0,
            CityDeparture: 0,
            Date: '',
            Id: '',
            IsActive: false,
            IsDynamic: false,
            SaveDate: ''
        },
        Error: null
    })
    const [idDynamic, setIdDynamic] = useState<string>('')
    const [isActiveRoute, setIsActiveRoute] = useState<boolean>(true)
    const defaultCityForm = {
        Minsk: 'Минск',
        Mosсow: 'Москва'
    }
    const defaultDateForm = {
        Today: 'Сегодня',
        Tomorrow: 'Завтра'
    }
    const TodayDate = new Date();
    const defaultDate = moment(TodayDate).format('DD.MM.YYYY');
    const defaultNextDate = moment(TodayDate).add(1, 'd').format('DD.MM.YYYY');


    const [date, setDate] = useState(defaultDate)

    const [isCalendarShow, setCalendarShow] = useState(false)
    const [isButtonClicked, setButtonClicked] = useState(false);

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
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
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
        try {
            const fetchDate = moment(date).format('YYYY-DD-MM')
            const datas: IFetchDataRoutes = {
                CityDeparture: cityDepartureData.Result[0].Id,
                CityArrival: cityArrivalData.Result[0].Id,
                Date: fetchDate,
                IsDynamic: true,
            };

            const response = await axios.post('/api/v1/routes/search', datas);
            const dat = response.data;

            setIdDynamic(dat.Result.Id);
            setRouteData(dat);
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
        setIdDynamic('');
    }

    useEffect(() => {
        if (routeData.Result.IsActive) {
            const fetchDynamicRoutes = async (id: string) => {
                try {
                    const da = {
                        "SearchId": id,
                    };

                    const response = await axios.post('/api/v1/routes/search', da);
                    const dat = response.data;
                    setRouteData(dat);

                    if (!dat.Result.IsActive) {
                        setRouteData(dat);
                        console.log(routeData)
                        console.log(dat.Result.IsActive)
                        clearInterval(timer);
                        dispatch(setDataRoute(dat));
                        navigate('/Home/list-result-routes', { state: 'Главная/Поиск билетов' });
                    }

                } catch (error) {
                    console.error('Ошибка при отправке данных на сервер:', error);
                }
            };

            const timer = setInterval(async () => {
                await fetchDynamicRoutes(routeData.Result.Id);
            }, 2000);

            return () => {
                clearInterval(timer);
            };
        }
    }, [routeData]);
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
                    <button className='form-search__btn-submit' type='button' onClick={handleSubmit}>Найти билеты</button>
                </div>

            </form>
        </>

    );
};

export default SearchForm;