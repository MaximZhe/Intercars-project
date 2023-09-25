import { Link } from 'react-router-dom';
import { ReactComponent as ArrowDown } from '../../../assets/icons/Arrow Icon.svg'
import { ReactComponent as UserIcon } from '../../../assets/icons/user.svg';
import './Menu.scss'
import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setLanguageValue} from '@/redux/slice/languageSlice';

interface IMenuProps{
    className?: string
}

const Menu:FC<IMenuProps> = ({className}) => {
    const { widthWindow } = useAppSelector(state => state.widthWindowReduser);
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const { language } = useAppSelector(state => state.languageReduser);
    const { isShow } = useAppSelector(state => state.stateMobileMenuReduser);
    const dispatch = useAppDispatch();
    return (
        <div className={`nav ${!isShow ? 'hide' : 'show'} ${className ? className : ''} `}>
            <div className='container'>
                
                    <div className={`user user--mobail`}>
                        <UserIcon className='user__icon' />
                        <p className='user__text'>Личный кабинет</p>
                    </div>
                <nav className='menu'>
                    <div className='menu__wrapper'>
                        <button className={`menu__item ${isOpenDropdown ? 'active' : ''}`}
                            type='button'
                            onMouseEnter={() => setIsOpenDropdown(true)}
                            onMouseLeave={() => setIsOpenDropdown(false)}>Акции и новости
                            <ArrowDown className='menu__icon' />
                        </button>
                        <div className='menu-dropdown'
                            onMouseEnter={() => setIsOpenDropdown(true)}
                            onMouseLeave={() => setIsOpenDropdown(false)}>
                            <Link to='/Home/sales' state={'Главная/Акции'} className='menu-dropdown__link'>
                                Акции
                            </Link>
                            <Link to='' className='menu-dropdown__link'>
                                Новости
                            </Link>
                            <Link to='' className='menu-dropdown__link'>
                                Программа лояльности
                            </Link>
                        </div>
                    </div>
                    <Link className='menu__item' to='/'>Сотрудничество</Link>
                    <Link className='menu__item' to='/pay'>Оплата</Link>
                    <Link className='menu__item' to='/'>Правила</Link>
                </nav>
                
                    <div className="dropdown-menu dropdown-menu--mobail">
                        <button type='button'
                            className={`dropdown-item ${language=== 'RUS' ? 'active' : ''}`}
                            onClick={() => dispatch(setLanguageValue('RUS'))}>
                            RUS
                        </button>
                        <button type='button'
                            className={`dropdown-item ${language === 'EN' ? 'active' : ''}`}
                            onClick={() => dispatch(setLanguageValue('EN'))}>
                            EN
                        </button>
                        <button type='button'
                            className={`dropdown-item ${language === 'PL' ? 'active' : ''}`}
                            onClick={() => dispatch(setLanguageValue('PL'))}>
                            PL
                        </button>
                    </div> 
            </div>

        </div>
    );
};

export default Menu;