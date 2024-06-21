import React from "react";
import { Link } from "react-router-dom";
import style from '../styles/LoginForm.module.css'
import background from '../assets/background.jpeg'

function LoginForm() {
  return (
    <div className={style.super} style={{ backgroundImage: `url(${background})` }}>
      <div className={style.login}>
        <form action="#" className={style.form}>
          <h1>Sign Up</h1>
          <div className={style.input}>
            <input type="email" placeholder="e-mail address" required />
          </div>
          <div className={style.input}>
            <input type="text" placeholder="username" required />
          </div>
          <div className={style.input}>
            <input type="tel" placeholder="phone number" required />
          </div>
          <div className={style.input}>
            <input type="password" placeholder="********" required />
          </div>
          <button type="submit">Sign up</button>
          <div className={style.register}>
            <p>Already have an account ? <Link to='/LoginForm'>Sign in here</Link> </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
