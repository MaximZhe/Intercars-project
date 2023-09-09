import { Link } from 'react-router-dom';
import { ReactComponent as ArrowDown } from '../../../assets/icons/Arrow Icon.svg'

import './Menu.scss'
const Menu = () => {
    return (
        <div className='nav'>
            <div className='container'>
                <nav className='menu'>
                    <button className='menu__item' type='button'>Акции и новости
                        <ArrowDown className='menu__icon' /></button>
                    <Link className='menu__item' to='/'>Сотрудничество</Link>
                    <Link className='menu__item' to='/'>Оплата</Link>
                    <Link className='menu__item' to='/'>Правила</Link>
                </nav>
            </div>

        </div>
    );
};

export default Menu;