import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowRight } from '@assets/icons/arrow-right-blue.svg';
import './ButtonRoutes.scss';

const ButtonRoutes = ({className}: {className:string}) => {
    return (
        <Link to='' className={`button-more ${className}`}>
            Все маршруты
            <ArrowRight className='button-more__icon' />
        </Link>
    );
};

export default ButtonRoutes;