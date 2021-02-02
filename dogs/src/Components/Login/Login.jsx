import React from 'react'
import styles from './Login.module.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../UserContext';
import NofFound from '../NofFound';

const Login = () => {
  const {login} = React.useContext(UserContext);

  if(login === true) <Navigate to="/conta"/>

  return (
    <section className={styles.login} >
      <div className={styles.forms}>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="criar" element={<LoginCreate/>}/>
        <Route path="perdeu" element={<LoginPasswordLost/>}/>
        <Route path="resetar" element={<LoginPasswordReset/>}/>
        <Route path="*" element={<NofFound/>} />
      </Routes>
      </div>
    </section>
  )
}

export default Login
