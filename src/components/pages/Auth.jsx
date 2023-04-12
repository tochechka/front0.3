import React, {useRef, useState} from 'react';
import '../../styles/Auth.css';
import { useNavigate } from 'react-router-dom';
import apiClient from "../../api";
import axios from "axios";

const Auth = () => {
    const history = useNavigate();
    const [passwordShown, setPasswordShown] = useState(false);
    const loginRef = useRef(null);
    const passRef = useRef(null);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }

    function auth() {
        const login = loginRef.current.value;
        const password = passRef.current.value;

        apiClient
            .post('', {}, {auth: {username: login, password: password}, withCredentials: true})
            .then(() => {
                console.log(login)
                console.log(password)
                console.log('Authenticated');
                history('/menu')
            })
            .catch((error) => {
                if(error.response.status === 404){
                    console.log("я свой рот ебал")
                    console.log(error.response.status)
                    history('/menu')
                }
            });
    }

    function fuck() {
        axios.create()
            .post('http://109.62.134.146:8666/secured/213', {}, {auth: {username: "tuchechka", password: "12345678"}, withCredentials: true})
            .then(() => {
                console.log('Authenticated');
            })
            .catch((error) => {
                if(error.code !== 401){
                    console.log("я свой рот ебал")
                    console.log(error)
                }
            });
    }

    return (
        <div>
            <div className='auth-container'>
                <div className="log-col">
                    <h5 className="item">Логин</h5>
                    <input
                        ref={loginRef}
                        className="element"
                        placeholder="Логин"
                    />
                    <h5 className="item">Пароль</h5>
                    <input
                        ref={passRef}
                        className="element"
                        type={passwordShown ? 'text' : 'password'}
                        placeholder="пароль"
                    />
                    <input type='checkbox' onClick={togglePassword}/> Показать пароль
                    <button className="log-button" onClick={auth}>
                        Входная кнопка
                    </button>
                    <button onClick={fuck}>fuck me</button>
                </div>
            </div>
        </div>
    );
};

export default Auth;
