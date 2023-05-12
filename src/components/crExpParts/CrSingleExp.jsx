import React, {useState} from 'react';
import '../../styles/Omp.css';
import DeleteCrExp from "./DeleteCrExp";
import ChangeCrExp from "./ChangeCrExp";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const CrSingleExp = ({get, crimeExp, remove, type, omvd}) => {
    const [modalActive, setModalActive] = useState(false);
    const [deleteActive, setDeleteActive] = useState(false);
    const [modOmp, setModOmp] = useState([]);
    const axiosPrivate = useAxiosPrivate();

    function date() {
        const localDate = new Date(crimeExp.date);
        const localTimeString = localDate.toLocaleDateString();
        return localTimeString;
    }

    const openModal = () => {
        axiosPrivate
            .get('/omps')
            .then((response) => {
                setModalActive(true);
                setModOmp(response.data.content);
            })
    }

    return (
        <div className='omp'>
            <p className='omp-top'>
                <p style={{margin: 0}}>Название омвд: {crimeExp.omvd}</p>
                <p style={{margin: 0}}>Дата {date()}</p>
            </p>
            <div className='omp-row'>
                <div>
                    <strong>Фамимлия преступника: {crimeExp.suspectLastname} | Тип экспертизы: {crimeExp.expertiseType}</strong>
                </div>
            </div>
            <div className='omp-row'>
                <button onClick={openModal} className='omp-button' style={{marginRight: 10}}>Изменить</button>
                <button onClick={() => setDeleteActive(true)} className='omp-button'>Удалить</button>
            </div>
            <ChangeCrExp
                active={modalActive}
                setActive={setModalActive}
                get={get}
                id={crimeExp.id}
                ompId={crimeExp.ompId}
                omp={modOmp}
                curOmvd={crimeExp.omvd}
                omvd={omvd}
                date={crimeExp.date}
                lastName={crimeExp.suspectLastname}
                curType={crimeExp.expertiseType}
                type={type}
            />
            <DeleteCrExp
                active={deleteActive}
                setActive={setDeleteActive}
                remove={remove}
                crimeExp={crimeExp}
            />
        </div>
    );
};

export default CrSingleExp;
