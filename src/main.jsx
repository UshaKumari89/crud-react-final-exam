import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import 'react-toastify/dist/ReactToastify.css';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import contactReducer from './redux/ContactReducer.js';
import { composeWithDevTools } from "redux-devtools-extension";



const store = createStore(contactReducer,composeWithDevTools() )

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>
)
