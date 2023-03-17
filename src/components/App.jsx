import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { Navbar } from './Navbar/Navbar.jsx';
import { UserRoutes } from './UserRoutes';
import { PersistGate } from 'redux-persist/integration/react';
import { AuthLayout } from './AuthLayout/AuthLayout';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter>
            <Navbar />
            <UserRoutes />
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  );
}

export default App;