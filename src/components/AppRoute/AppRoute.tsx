import { Routes, Route, Navigate} from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage';
import SalesPage from '../../pages/SalesPage/SalesPage';
import RulesPage from '../../pages/RulesPage/RulesPage';
import PayPage from '../../pages/PayPage/PayPage';
import AppLayout from '../AppLayout/AppLayout';
import SingleSalesPage from '@/pages/SingleSalesPage/SingleSalesPage';
import NewsPage from '@/pages/NewsPage/NewsPage';
import SingleNewsPage from '@/pages/SingleNewsPage/SingleNewsPage';
import ContactPage from '@/pages/ContactPage/ContactPage';
import RouteDescriptionPage from '@/pages/RouteDescriptionPage/RouteDescriptionPage';
import ListRates from '../ListRates/ListRates';
import SearchResultPage from '@/pages/SearchResultPage/SearchResultPage';



const AppRoute = () => {
    return (
        <Routes>
          <Route path="/Home/" element={<AppLayout /> }>
          
            <Route index element={<HomePage />} />
            <Route path='promos' element={<SalesPage />} />
            <Route path='promos/:id' element={<SingleSalesPage/>}/>
            <Route path='news' element={<NewsPage/>}/>
            <Route path='news/:id' element={<SingleNewsPage/>}/>
            <Route path='rules' element={<RulesPage />} />
            <Route path='pay' element={<PayPage />} />
            <Route path='contacts' element={<ContactPage />} />
            <Route path='route' element={<RouteDescriptionPage />} />
            <Route path='list-result-routes' element={<SearchResultPage/>} />
            
          </Route>
        </Routes>
    );
};

export default AppRoute;