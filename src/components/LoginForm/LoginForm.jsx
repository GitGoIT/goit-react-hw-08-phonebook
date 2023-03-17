import PropTypes from 'prop-types';
import css from '../LoginForm/loginForm.module.css';
import { useForm } from '../../shared/hooks/useForm';
import { initialState } from './initialState';
import { TextField } from 'shared/TextField/TextField';
import { fields } from './fields';
import { Button } from '../../shared/Button/Button';

export const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={css.container}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField value={password} handleChange={handleChange} {...fields.password} />
      <Button>Login</Button>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
