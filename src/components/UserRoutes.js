import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from 'shared/Loader/Loader';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

const  HomePage  = lazy(() => import('../pages/HomePage/HomePage'));
const  RegisterPage  = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const ContactsPage  = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const LoginPage  = lazy(() => import('../pages/LoginPage/LoginPage'));

export const UserRoutes = () => {
    return (
      <Suspense
        fallback={<Loader/>}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route> 
          <Route element={<PrivateRoute />}>
               <Route path="/contacts" element={<ContactsPage />} />
          </Route>
         </Routes>
      </Suspense>
    );
};