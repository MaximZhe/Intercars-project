import Menu from '../Header/Menu/Menu';
import './SalesPage.scss';
import { Link, useLocation, useMatch } from 'react-router-dom';
import { SalesPageListData } from '../../constant/constant'
import ItemSalesPage from './ItemSalesPage/ItemSalesPage';

const SalesPage = () => {
    const location = useLocation();
    const salesMatch = useMatch('/sales');

    const crumbs = [
        { label: 'Главная', path: '/' },
        { label: 'Акции', path: '/sales' },
    ];
    console.log(SalesPageListData)
    return (
        <>
            <Menu className='menu_theme_blue' />
            <section className='sales'>
                <div className='container'>
                    <div className='crumbs'>
                        {crumbs.map((crumb, index) => (
                            <span className='crumbs__item' key={index}>
                                <Link to={crumb.path} className='crumbs__link'>{crumb.label}</Link>
                                {index < crumbs.length - 1 ? ' | ' : ' '}
                            </span>
                        ))}
                    </div>

                    <h1 className='sales__title'>
                        Выгодные предложения Intercars
                    </h1>
                    {SalesPageListData.map((item) => 
                    <ItemSalesPage key={item.id} dataItem={item}/>
                    )}
                </div>
            </section>
        </>
    );
};

export default SalesPage;