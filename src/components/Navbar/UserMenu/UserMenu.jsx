import css from "../UserMenu/userMenu.module.css";
import { getUser } from '../../../redux/auth/auth-selector';
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "redux/auth/auth-operations";
import { RiContactsBookFill } from 'react-icons/ri';

export const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutUser());
  }

  return (
    <div className={css.container}>
      <RiContactsBookFill className={css.logo} />
      <p className={css.logoTitle}>Phonebook</p>
      <div className={css.wrapper}>
        <p className={css.email}>{email}</p>
        <button onClick={onLogout} className={css.btn} type="submit">
          Logout
        </button>
      </div>
    </div>
  );
}