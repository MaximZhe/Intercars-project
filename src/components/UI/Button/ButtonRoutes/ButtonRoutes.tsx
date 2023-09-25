import { Link } from 'react-router-dom';
import { ReactComponent as ArrowRight } from '@assets/icons/arrow-right-blue.svg';
import './ButtonRoutes.scss';
import { FC } from 'react';
interface IButtonRoutesProps {
    className:string,
    title:string,
    to:string,
    state?:string,
    onClick?:() => void,
}
const ButtonRoutes:FC<IButtonRoutesProps> = ({className, title, to, state,onClick}) => {
    return (
        <Link to={to} state={state} className={`button-more ${className}`} onClick={onClick}>
            {title}
            <ArrowRight className='button-more__icon' />
        </Link>
    );
};

export default ButtonRoutes;