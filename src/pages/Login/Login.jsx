import { useForm } from 'react-hook-form';
import Panda from '../../components/Panda/Panda';
import ButtonLogIn from '../../components/ButtonLogIn/ButtonLogIn';
import './Login.scss';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Panda />
      <form className="formLogin" onSubmit={handleSubmit}>
        <h1 className="title">Playlist Login</h1>
        <div className="form-group">
          <input
            {...register('username', { required: true })}
            type="text"
            className="form-control"
          />
          <label className="form-label">Username</label>
          {errors.username?.type === 'required' && (
            <p className="error">This field is required</p>
          )}
        </div>
        <div className="form-group">
          <input
            {...register('password', { required: true })}
            type="password"
            className="form-control"
          />
          <label className="form-label">Password</label>
          {errors.password?.type === 'required' && (
            <p className="error">This field is required</p>
          )}
          <ButtonLogIn errors={errors} handleSubmit={handleSubmit} />
        </div>
      </form>
    </>
  );
}

export default Login;
