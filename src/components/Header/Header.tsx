import logo from '../../assets/icons/Logo.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as SupportIcon } from '../../assets/icons/support.svg'
import './Header.scss'
import LanguagePanel from './LanguagePanel/LanguagePanel';

const Header = () => {
    return (
        <header className='header' >
            <div className='container-fluid'>
                <div className='header__wrapper'>
                    <a href='' className='header-logo'>
                        <img src={logo} width={225} height={32} alt='' />
                    </a>
                    <div className='user'>
                        <UserIcon className='user__icon' />
                        <p className='user__text'>Личный кабинет</p>
                    </div>
                    <div className='support'>
                        <SupportIcon className='support__icon' />
                        <div className='support__content'>
                            <p className='support__title'>
                                Служба поддержки
                            </p>
                            <p className='support__text'> С 9:00 до 22:00</p>
                        </div>
                        <div className='support__content'>
                            <a href="tel:+74993508016" className="support__phone">
                                +7 499 350 80 16
                            </a>
                            <a href="tel:+88007777415" className="support__phone">
                                +8 800 777 74 15
                            </a>
                        </div>
                    </div>
                    <LanguagePanel />
                </div>
            </div>
        </header>
    );
};

export default Header;