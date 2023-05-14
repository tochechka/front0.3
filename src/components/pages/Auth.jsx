import React, {useRef, useState, useEffect} from 'react';
import '../../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import apiClient from "../../api";
import useAuth from "../hooks/useAuth";

const Auth = () => {
    const {setAuth} = useAuth();
    const history = useNavigate();
    const loginRef = useRef();
    const errRef = useRef();
    const [passwordShown, setPasswordShown] = useState(false);
    const [login, setLogin] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        loginRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [login, pwd])

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }

    const auth1 = async (e) => {
        e.preventDefault();

        const info = {
            'login': login,
            'password': pwd
        }

        apiClient
            .post('/auth/login', info)
            .then((response) =>{
                const access_token = response.data.access_token;
                localStorage.refresh_token = response.data.refresh_token;
                setAuth({login, pwd, access_token});
                history('/omp')
            })
            .catch((error) => {
                if(!error?.response) {
                    setErrMsg('Нет ответа от сервера');
                } else if (error.response?.status === 400) {
                    setErrMsg('Отсутствует логин или пароль');
                } else if (error.response?.status === 401) {
                    setErrMsg('Неправильные логин или пароль');
                } else {
                    setErrMsg('Неудалось войти');
                }
                errRef.current.focus();
            });
    }

    return (
        <div className='auth-container'>
            <div className="log-col">
                <h1>Вход</h1>
                <p ref={errRef} aria-live='assertive'>
                    {errMsg}
                </p>
                <h5 className="item">Логин</h5>
                <input
                    className="element"
                    type='text'
                    id='login'
                    ref={loginRef}
                    autoComplete='off'
                    onChange={(e) => setLogin(e.target.value)}
                    value={login}
                    required
                />
                <h5 className="item">Пароль</h5>
                <input
                    className="element"
                    type={passwordShown ? 'text' : 'password'}
                    id='password'
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <input type='checkbox' onClick={togglePassword}/> Показать пароль
                <button className="log-button" onClick={auth1}>
                    Вход
                </button>
            </div>
        </div>
    );
};

export default Auth;
