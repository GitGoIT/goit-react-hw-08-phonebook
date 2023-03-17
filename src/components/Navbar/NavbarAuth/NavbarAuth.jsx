import { NavLink } from "react-router-dom"
import css from "../NavbarAuth/navbarAuth.module.css";

export const NavbarAuth = () => {
    return (
      <div className={css.container}>
        <p className={css.logo}>Phonebook</p>
        <div>
        <NavLink to="/register" className={css.link}>Register</NavLink>
        <NavLink to="/login" className={css.link}>Login</NavLink>
        </div>
      </div>
    );
}