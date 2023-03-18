import { NavLink } from "react-router-dom"
import { RiContactsBookFill } from 'react-icons/ri';
import css from "../NavbarAuth/navbarAuth.module.css";

export const NavbarAuth = () => {
    return (
      <div className={css.container}>
        <RiContactsBookFill className={css.logo} />
        <p className={css.logoTitle}>Phonebook</p>
        <div className={css.wrapper}>
          <NavLink to="/register" className={css.link}>
            Register
          </NavLink>
          <span className={css.span}>|</span>
          <NavLink to="/login" className={css.link}>
            Login
          </NavLink>
        </div>
      </div>
    );
}