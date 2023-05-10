import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import CreateCrExp from "./CreateCrExp";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const CrExpTop = ({get}) => {
    const history = useNavigate();
    const [modalActive, setModalActive] = useState(false);
    const [omp, setOmp] = useState([])
    const axiosPrivate = useAxiosPrivate();

    const openModal = () => {
        axiosPrivate
            .get('/omps')
            .then((response) => {
                setModalActive(true);
                setOmp(response.data.content);
            })
    }

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
                    <button className='top-button' onClick={openModal}> Добавить новую экспертизу </button>
                </div>
            </div>
            <hr className='line'/>
            <CreateCrExp
                get={get}
                omp={omp}
                active={modalActive}
                setActive={setModalActive}
            />
        </div>
    );
};

export default CrExpTop;
