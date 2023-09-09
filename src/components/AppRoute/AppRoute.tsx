import { Routes, Route} from 'react-router-dom'
import HomePage from '../HomePage/HomePage';
import SalesPage from '../SalesPage/SalesPage';
import RulesPage from '../RulesPage/RulesPage';
import PayPage from '../PayPage/PayPage';
const AppRoute = () => {
    return (
        <Routes>
            <Route path='/Intercars/' element={<HomePage/>}/>
            <Route path='/sales' element={<SalesPage/>}/>
            <Route path='/rules' element={<RulesPage/>}/>
            <Route path='/pay' element={<PayPage/>}/>
        </Routes>
    );
};

export default AppRoute;