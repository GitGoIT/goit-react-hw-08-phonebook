import css from '../LoginPage/loginPage.module.css';
import { useDispatch } from 'react-redux';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { authorization } from '../../redux/auth/auth-operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(authorization(data));
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Login</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
