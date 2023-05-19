import React, {useState} from 'react';
import '../../styles/Omp.css'
import ChangeOmp from "./ChangeOmp";
import DeleteOmp from "./DeleteOmp";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const OmpItem = (props) => {
    const [modalActive, setModalActive] = useState(false);
    const [deleteActive, setDeleteActive] = useState(false);
    const [type, setType] = useState([]);
    const [omvd, setOmvd] = useState([]);
    const arm = props.omp.withdrawalsHandprints ? "V" : "X";
    const shoe = props.omp.withdrawalsShoeTracks ? "V" : "X";
    const hack = props.omp.withdrawalsHackingTracks ? "V" : "X";
    const tras = props.omp.withdrawalsTracologicalOther ? "V" : "X";
    const wep = props.omp.withdrawalsWeaponsAndAmmunition ? "V" : "X";
    const bullet = props.omp.withdrawalsBulletsAndShell ? "V" : "X";
    const mic = props.omp.withdrawalsMicroparticles ? "V" : "X";
    const drugs = props.omp.withdrawalsDrugs ? "V" : "X";
    const bb = props.omp.withdrawalsBbWu ? "V" : "X";
    const fire = props.omp.withdrawalsFireTechnical ? "V" : "X";
    const bio = props.omp.withdrawalsBiological ? "V" : "X";
    const axiosPrivate = useAxiosPrivate();

    function date() {
        const localDate = new Date(props.omp.date);
        const localTimeString = localDate.toLocaleDateString();
        return localTimeString;
    }

    const getCrType = async () => {
        axiosPrivate
            .get('/directories/CRIME_TYPE/items')
            .then((response) => {
                setType(response.data)
            })
    }

    const getOmvd = async () => {
        axiosPrivate
            .get('/directories/OMVD/items')
            .then((response) => {
                setOmvd(response.data)
            })
    }

    const openModal = () => {
        getOmvd();
        getCrType();
        setModalActive(true)
    }

    return (
        <div className='omp'>
            <p className='omp-top'>
                <p style={{margin: 0}}>№ {props.omp.criminalCaseNumber}</p>
                <p style={{margin: 0}}>Дата {date()}</p>
            </p>
            <div className='omp-row'>
                <div>
                    <div>Данные о выезде</div>
                    <strong>Название ОМВД: {props.omp.omvd} | Время оправки: {props.omp.departureTime} | Время прибытия: {props.omp.arrivalTime} | Тип
                        преступления: {props.omp.crimeType}
                    </strong>
                </div>
            </div>
            <div className='omp-row'>
                <div>
                    <div>Найденные улики</div>
                    <strong>Рук следы {arm} | Обуви следы {shoe} | Взл оруд сл {hack} | Трас другие {tras} | Оруж + боепр {wep} | Пули, гильзы {bullet} |
                        Микрочастицы {mic} | Наркотики {drugs} | ВВ и ВУ {bb} | Пожарно-тех {fire} | Биологич {bio}
                    </strong>
                </div>
            </div>
            <div className='omp-row'>
                <button onClick={openModal} className='omp-button' style={{marginRight: 10}}>Изменить</button>
                <button onClick={() => setDeleteActive(true)} className='omp-button'>Удалить</button>
            </div>
            <ChangeOmp
                active={modalActive}
                setActive={setModalActive}
                id={props.omp.id}
                number={props.omp.criminalCaseNumber}
                curOmvd={props.omp.omvd}
                omvd={omvd}
                dep={props.omp.departureTime}
                arr={props.omp.arrivalTime}
                date={props.omp.date}
                curType={props.omp.crimeType}
                type={type}
                get={props.get}
                dispatched={props.omp.dispatched}
            />
            <DeleteOmp
                active={deleteActive}
                setActive={setDeleteActive}
                remove={props.remove}
                omp={props.omp}
            />
        </div>
    );
};

export default OmpItem;
