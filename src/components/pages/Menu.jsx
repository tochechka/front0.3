import React from 'react';
import '../../styles/Auth.css';
import {useNavigate} from "react-router-dom";

const Menu = () => {
    const history = useNavigate();

    function omp() {
        return history('/omp')
    };

    function crExp() {
        return history('/expertises/crime')
    }

    function admin() {
        return history('/admin')
    };

    return (
        <div className='auth-container'>
            <div className="log-col">
                <button className="log-button" onClick={omp}>
                    Омп
                </button>
                <button className="log-button" onClick={crExp}>
                    Крим Эксп
                </button>
                <button className="log-button" onClick={admin}>
                    Страница админа
                </button>
            </div>
        </div>
    );
};

export default Menu;
