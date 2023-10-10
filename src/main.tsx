import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import { YMaps } from '@pbe/react-yandex-maps';
import { setupStore } from './redux/store/store.ts';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <YMaps query={{apikey:'4085e0a8-92c5-498b-8730-25f196bc54ea'}}>
            <Provider store={store}>
                <App />
            </Provider>
        </YMaps>
    </BrowserRouter>

)
