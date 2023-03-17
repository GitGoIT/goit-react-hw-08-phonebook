import css from "../Button/button.module.css";

export const Button = ({ children, type = "submit" }) => {
    return <button type={type} className={css.btn}>{children}</button>
}
