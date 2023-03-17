import PropTypes from 'prop-types';
import css from '../RegisterForm/registerForm.module.css';
import { useForm } from '../../shared/hooks/useForm';
import { initialState } from './initialState';
import { TextField } from 'shared/TextField/TextField';
import { fields } from './fields';
import { Button } from '../../shared/Button/Button';

export const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={css.container}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Register</Button>
    </form>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
