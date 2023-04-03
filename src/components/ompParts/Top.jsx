import React, {useState} from 'react';
import '../../styles/Top.css'
import CreateOmp from "../ompParts/CreateOmp";
import Report from "../ompParts/Report";
import {useNavigate} from "react-router-dom";

const Top = ({get}) => {
    const history = useNavigate();
    const [modalActive, setModalActive] = useState(false);
    const [reportActive, setReportActive] = useState(false);

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
                    <button className='top-button' onClick={() => setModalActive(true)}> Добавить новую запись </button>
                    <button className='top-button' onClick={() => setReportActive(true)}> Получить отчет </button>
                    <button className='top-button' onClick={back}> Назад </button>
                    <button className='top-button'> Выйти </button>
                </div>
            </div>
            <hr className='line'/>
            <CreateOmp
                get={get}
                active={modalActive}
                setActive={setModalActive}
            />

            <Report
                active={reportActive}
                setActive={setReportActive}
            />
        </div>
    );
};

export default Top;
