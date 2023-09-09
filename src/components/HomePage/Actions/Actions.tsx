import React from 'react';
import { Link } from 'react-router-dom';
import ActionImg from '../../../assets/images/action-block-icon.png'
import './Actions.scss';
const Actions = () => {
    return (
        <section className='actions'>
            <div className='container'>
                <div className='actions__wrapper'>
                    <div className='actions-content'>
                        <h3 className='actions-content__title'>
                            Акция к 23 февраля!
                        </h3>
                        <p className='actions-content__text'>
                            Скидки Минск-Варшава-Минск
                        </p>
                    </div>
                    <Link className='actions__link' to=''>
                        Узнать подробности
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Actions;