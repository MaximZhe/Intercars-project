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
const SearchForm = ({ className }: { className: string }) => {
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
    const [departure, setDeparture] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState(defaultDate);

    const [isCalendarShow, setCalendarShow] = useState(false)
    const [isButtonClicked, setButtonClicked] = useState(false);
    const [tariffData, setTariffData] = useState<ITariffData[]>([])

    const handleDepartureChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setDeparture(e.target.value);
    };

    const handleDestinationChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setDestination(e.target.value);
    };

    const handleDateChange = (selectedDate: any) => {
        const newDate = moment(selectedDate).format('DD.MM.YYYY');
        console.log(newDate)
        setDate(newDate);
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Отправка запроса на сервер с параметрами departure, destination и date
    //     // и обработка полученного списка элементов
    //     const results = []; // Результаты запроса с сервера
    //     setItems(results);
    // };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataToSend = {
                    departure
                    
                };
                const apiURL = 'http://api.intercars-tickets.com/api/v1/GetByName?name=Minsk';
const proxyURL = 'https://cors-anywhere.herokuapp.com/';
                const response = await axios.get('http://api.intercars-tickets.com/api/v1/GetByName',{
     
                });
                // const response = await axios.post('http://api.intercars-tickets.com/api/v1/GetByName?name=Minsk', dataToSend);
                console.log(response)
                setTariffData(response.data);
                // const response = await axios.get('https://raw.githubusercontent.com/MaximZhe/Intercars/main/data.json');
                // const response = await axios.get('https://raw.githubusercontent.com/MaximZhe/Intercars/main/data.json');
                //const response = await axios.get('http://localhost:5173/Intercars/data/data.json');
                //const data = response.data;
                //console.log(data);
                //setTariffData(data);
                

            } catch (error) {
                console.error('Ошибка при отправке данных на сервер:', error);
            }
        };
        if (isButtonClicked) {
            fetchData();
        }
    }, [isButtonClicked])
    const handleSubmit = () => {
        setButtonClicked(true);
        console.log(departure,
            destination,
            date)
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
                            value={departure}
                            onChange={handleDepartureChange}
                            placeholder='Пункт отправления'
                        />
                        <ArrowForm width={33} height={32} className='form-search__image' />
                    </div>

                    <div className='form-search__sample'>
                        <p className='form-search__text'>Например:</p>
                        <button className='form-search__btn' type='button' onClick={() => setDeparture(defaultCityForm.Minsk)}>{defaultCityForm.Minsk}</button>
                        <button className='form-search__btn' type='button' onClick={() => setDeparture(defaultCityForm.Mosсow)}>{defaultCityForm.Mosсow}</button>
                    </div>
                </div>

                <div className='form-search__wrapper'>
                    <label className='form-search__label'>Куда</label>

                    <input
                        className='form-search__input'
                        id="destination"
                        name='destination'
                        type="text"
                        value={destination}
                        onChange={handleDestinationChange}
                        placeholder='Пункт назначения'
                    />
                    <div className='form-search__sample'>
                        <p className='form-search__text'>Например:</p>

                        <button className='form-search__btn' type='button' onClick={() => setDestination(defaultCityForm.Minsk)}>{defaultCityForm.Minsk}</button>
                        <button className='form-search__btn' type='button' onClick={() => setDestination(defaultCityForm.Mosсow)}>{defaultCityForm.Mosсow}</button>
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
                                onChange={handleDateChange}
                                value={TodayDate}
                            />
                        </div>
                        : null}

                </div>
                <div className='form-search__wrapper'>
                    <button className='form-search__btn-submit' type='button' onClick={handleSubmit}>Найти билеты</button>
                </div>

            </form>
            <ListRates datas={tariffData} />
        </>

    );
};

export default SearchForm;