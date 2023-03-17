import css from "../RegisterPage/registerPage.module.css"
import { useDispatch } from "react-redux";
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { registration } from "../../redux/auth/auth-operations";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = (data) => {
    dispatch(registration(data));
  }
    return (
      <div className={css.container}>
        <h1 className={css.title}>Register</h1>
        <RegisterForm onSubmit={handleSignup} />
      </div>
    );
}

export default RegisterPage;