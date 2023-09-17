
import { Link } from 'react-router-dom';
import ActionIconLine  from '../../../assets/images/actions-bg.png';
import ActionIconLineMobail  from '../../../assets/images/actions-bg-mobail.png';
import './Actions.scss';
import { useAppSelector } from '@/hooks/redux';
const Actions = () => {
    const { widthWindow } = useAppSelector(state => state.widthWindowReduser);
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
                    <div className='actions__img' >
                        <img 
                        src={ActionIconLine} 
                        width={326} 
                        height={140} 
                        alt=''
                        className='actions__img-desktop'/>
                        <img 
                        src={ActionIconLineMobail} 
                        width={204} 
                        height={152} 
                        alt=''
                        className='actions__img-mobail'/>
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