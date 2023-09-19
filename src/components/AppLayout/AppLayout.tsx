
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { routesItems } from '@/constant/constant';

const AppLayout = () => {
    return (
        <>
        <Header/>
        <main>
            <Outlet />
        </main>
        <Footer routes={routesItems}/>
    </>
    );
};

export default AppLayout;