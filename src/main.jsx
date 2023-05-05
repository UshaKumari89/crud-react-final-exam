import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
//import 'react-toastify/dist/ReactToast
import 'react-toastify/dist/ReactToastify.css'
//import  legacy_createStore as createStore from react
import { legacy_createStore as createStore } from 'redux'
//import  provider from react-redux'
import { Provider } from 'react-redux'
//import contactReducer from redux/ContactReducer.js
import contactReducer from './redux/ContactReducer.js'
// import composeWithDevTools from redux tool extension
import { composeWithDevTools } from "redux-devtools-extension"

//create a new store
const store = createStore(contactReducer,composeWithDevTools() )

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
)
