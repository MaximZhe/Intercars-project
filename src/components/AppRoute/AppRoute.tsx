import { Routes, Route, Navigate} from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage';
import SalesPage from '../../pages/SalesPage/SalesPage';
import RulesPage from '../../pages/RulesPage/RulesPage';
import PayPage from '../../pages/PayPage/PayPage';
import AppLayout from '../AppLayout/AppLayout';
import SingleSalesPage from '@/pages/SingleSalesPage/SingleSalesPage';



const AppRoute = () => {
    return (
        <Routes>
          <Route path="/Home/" element={<AppLayout /> }>
          
            <Route index element={<HomePage />} />
            <Route path='sales' element={<SalesPage />} />
            <Route path='sales/:id' element={<SingleSalesPage/>}/>
            <Route path='rules' element={<RulesPage />} />
            <Route path='pay' element={<PayPage />} />
          </Route>
        </Routes>
    );
};

export default AppRoute;