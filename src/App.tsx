import { useEffect, useState } from 'react'
import './App.scss'
import Button from './components/UI/Button/Button'
import axios from 'axios'
import { ITariffData } from './types/types'



import ListRates from './components/ListRates/ListRates';
import Header from './components/Header/Header'
import AppRoute from './components/AppRoute/AppRoute'
function App() {
  
  return (
    <>
    <Header/>
    <AppRoute/>
    <div className='main'>
      <div className='container'>
        <div>
          
          
        </div>
      </div>
    </div>
    </>
    
  )
}

export default App
