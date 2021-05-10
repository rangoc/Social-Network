import React from 'react';
import ReactDOM from 'react-dom';
import { AuthContextProvider } from 'context/AuthContext';
// components
import App from 'App';

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.querySelector('#root')
);
