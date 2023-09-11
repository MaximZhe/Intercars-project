import { Link } from 'react-router-dom';
import TwoPhoneImage from '../../../assets/images/two-phone-icon.png'
import './Application.scss'
const Application = () => {
    return (
        <div className='applications'>
            <div className='applications__container'>
                <div className='applications__wrapper'>
                    <h2 className='applications__title'>
                        Путешествовать удобнее
                        с приложением <span>Intercars</span>
                    </h2>
                    <div className='applications-links mobail'>
                        <Link to='' className='applications-links__item'></Link>
                        <Link to='' className='applications-links__item'></Link>
                    </div>
                </div>
                <div 
                 className='applications__img' ></div>
                <div className='applications-links'>
                    <Link to='' className='applications-links__item'></Link>
                    <Link to='' className='applications-links__item'></Link>
                </div>
            </div>
        </div>
    );
};

export default Application;