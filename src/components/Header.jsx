import React, {useState} from 'react';
import '../styles/Header.css'
import logout from '../styles/logout-svgrepo-com.svg'
import {useNavigate} from "react-router-dom";
import useAuth from "./hooks/useAuth";

const Header = () => {
    const [proActive, setProActive] = useState(false);
    const history = useNavigate();
    const {setAuth} = useAuth();

    const out = () => {
        setAuth({});
        return history('/');
    }

    const omp = (e) => {
        setProActive(e.target.id);
        return history('/omp');
    };

    const crExp = (e) => {
        setProActive(e.target.id);
        return history('/expertises/crime')
    }

    return (
        <div className='head'>
            <div align='center' style={{padding: 8}}>
                <span className='top-text'>АИС Криминалистического Учета</span>
            </div>
            <div className='navigate'>
                <div className='element1'>
                    <button
                        id='ОМП'
                        onClick={omp}
                        className={ proActive === 'ОМП' ? 'button-active' : 'button' }
                    >
                        ОМП
                    </button>
                    <button
                        id='Крим. Эксп.'
                        onClick={crExp}
                        className={ proActive === 'Крим. Эксп.' ? 'button-active' : 'button' }
                    >
                        Крим. Эксп.
                    </button>
                </div>
                <div className='element1'>
                    <img src={logout} alt="return" className='icon'/>
                    <span className='text' onClick={out}>Выход</span>
                </div>
            </div>
        </div>
    );
};

export default Header;