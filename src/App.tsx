import './App.scss';
// import Header from './components/Header/Header';
import AppRoute from './components/AppRoute/AppRoute'
import { WindowScreenUser } from './utils/windowScreen';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { setWidthWindow } from './redux/slice/widthWindowSlice';
// import { routesItems } from '@/constant/constant';
// import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import SalesPage from './components/SalesPage/SalesPage';
import RulesPage from './components/RulesPage/RulesPage';
import PayPage from './components/PayPage/PayPage';
import AppLayout from './components/AppLayout/AppLayout';
function App() {
  const { widthWindow } = useAppSelector(state => state.widthWindowReduser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const widthWindow = WindowScreenUser()
    dispatch(setWidthWindow(widthWindow));
    console.log(widthWindow)
  }, [dispatch, widthWindow])

  return (
    <>
      <AppRoute/>
    </>

  )
}

export default App
