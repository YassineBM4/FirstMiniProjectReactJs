import React from "react";
import { Link } from "react-router-dom";
import style from '../styles/LoginForm.module.css'
import background from '../assets/background.jpeg'

function LoginForm() {
  return (
    <div className={style.super} style={{ backgroundImage: `url(${background})` }}>
      <div className={style.login}>
        <form action="#" className={style.form}>
          <h1>Sign In</h1>
          <div className={style.input}>
            <input type="text" placeholder="username" required />
          </div>
          <div className={style.input}>
            <input type="password" placeholder="********" required />
          </div>
          <div className={style.remember}>
            <Link to='#'>Forgot password</Link>
          </div>
          <button type="submit">Login</button>
          <div className={style.register}>
            <p>Don't have an account ? <Link to='/SignUp'>Sign up here</Link> </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
