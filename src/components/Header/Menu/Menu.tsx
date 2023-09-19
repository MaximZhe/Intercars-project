import { Link } from 'react-router-dom';
import { ReactComponent as ArrowDown } from '../../../assets/icons/Arrow Icon.svg'
import { ReactComponent as UserIcon } from '../../../assets/icons/user.svg';
import './Menu.scss'
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setLanguageValue} from '@/redux/slice/languageSlice';

const Menu = () => {
    const { widthWindow } = useAppSelector(state => state.widthWindowReduser);
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const { language } = useAppSelector(state => state.languageReduser);
    const { isShow } = useAppSelector(state => state.stateMobileMenuReduser);
    const dispatch = useAppDispatch();
    return (
        <div className={`nav ${!isShow ? 'hide' : 'show'} `}>
            <div className='container'>
                {widthWindow < 600 ?
                    <div className={`user ${widthWindow < 600 ? 'mobail' : ''} `}>
                        <UserIcon className='user__icon' />
                        <p className='user__text'>Личный кабинет</p>
                    </div> : null}
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
                            <Link to='' className='menu-dropdown__link'>
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
                {widthWindow < 600 ?
                    <div className="dropdown-menu mobail">
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
                    </div> : null}
            </div>

        </div>
    );
};

export default Menu;