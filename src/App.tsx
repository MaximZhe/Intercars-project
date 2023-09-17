import './App.scss';
import Header from './components/Header/Header';
import AppRoute from './components/AppRoute/AppRoute'
import { WindowScreenUser } from './utils/windowScreen';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { setWidthWindow } from './redux/slice/widthWindowSlice';

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
      <Header />
      <div className='main'>
        <AppRoute />
      </div>
    </>

  )
}

export default App
