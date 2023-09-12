import './App.scss';
import Header from './components/Header/Header';
import AppRoute from './components/AppRoute/AppRoute'
function App() {

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
