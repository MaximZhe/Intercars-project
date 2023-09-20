import { Routes, Route} from 'react-router-dom'
import HomePage from '../HomePage/HomePage';
import SalesPage from '../SalesPage/SalesPage';
import RulesPage from '../RulesPage/RulesPage';
import PayPage from '../PayPage/PayPage';
import AppLayout from '../AppLayout/AppLayout';


const AppRoute = () => {
    return (
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path='sales' element={<SalesPage />} />
            <Route path='rules' element={<RulesPage />} />
            <Route path='pay' element={<PayPage />} />
          </Route>
        </Routes>
    );
};

export default AppRoute;