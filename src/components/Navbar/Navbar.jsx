import css from '../Navbar/navbar.module.css';
import { useSelector } from 'react-redux';
import { NavbarAuth } from './NavbarAuth/NavbarAuth';
import { UserMenu } from './UserMenu/UserMenu';
import { isUserLogin } from '../../redux/auth/auth-selector';

export const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
      <div className={css.container}>
          {!isLogin && <NavbarAuth/>}
          {isLogin && <UserMenu/>}
      </div>
  );
};
