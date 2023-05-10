import React, {useState} from 'react';
import '../../styles/Omp.css';
import DeleteCrExp from "./DeleteCrExp";
import ChangeCrExp from "./ChangeCrExp";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const CrSingleExp = ({get, crimeExp, remove}) => {
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
            <div className='omp-row'>
                <div>
                    <strong>Название омвд: {crimeExp.omvd}. | {date()} | Фамимлия преступника: {crimeExp.suspectLastname} | Тип экспертизы: {crimeExp.expertiseType}</strong>
                </div>
                <div>
                    <button onClick={openModal} style={{marginRight: 10}}>Изменить</button>
                    <button onClick={() => setDeleteActive(true)}>Удалить</button>
                </div>
            </div>
            <ChangeCrExp
                active={modalActive}
                setActive={setModalActive}
                get={get}
                id={crimeExp.id}
                ompId={crimeExp.ompId}
                omp={modOmp}
                omvd={crimeExp.omvd}
                date={crimeExp.date}
                lastName={crimeExp.suspectLastname}
                type={crimeExp.expertiseType}
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
