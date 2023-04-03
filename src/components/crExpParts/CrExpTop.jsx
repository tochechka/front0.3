import React from 'react';
import {useNavigate} from "react-router-dom";

const CrExpTop = ({get}) => {
    const history = useNavigate();

    function back() {
        return history('/menu')
    };

    return (
        <div>
            <div className='top-container'>
                <div>
                    <input
                        type='text'
                        placeholder='Поиск'
                    />
                </div>
                <div style={{marginRight: '20px'}}>
                    <button className='top-button'> Добавить новую экспертизу </button>
                    <button className='top-button' onClick={back}> Назад </button>
                    <button className='top-button'> Выйти </button>
                </div>
            </div>
            <hr className='line'/>
        </div>
    );
};

export default CrExpTop;
