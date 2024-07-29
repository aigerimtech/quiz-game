import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MyProvider } from './components/MyContext';
import Login from './components/login';
import {Provider} from 'react-redux'
import store from './store/store'
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <MyProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/dashboard" element={
              <PrivateRoute> 
                <Dashboard/>
              </PrivateRoute>
            }/>
            </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </MyProvider>
    </Provider>
    
  </React.StrictMode>
);


reportWebVitals();


