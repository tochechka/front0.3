import React, {useState} from 'react';
import '../../styles/Omp.css'
import ChangeOmp from "./ChangeOmp";
import DeleteOmp from "./DeleteOmp";

const OmpItem = (props) => {
    const [modalActive, setModalActive] = useState(false);
    const [deleteActive, setDeleteActive] = useState(false);
    const dispatched = props.omp.dispatched ? "V" : "X";
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
    const others = props.omp.withdrawalsOther ? "V" : "X";

    function date() {
        const localDate = new Date(props.omp.date);
        const localTimeString = localDate.toLocaleDateString();
        return localTimeString;
    }

    return (
        <div className='omp'>
            <div className='omp-row'>
                <div>
                    <strong>№ {props.omp.criminalCaseNumber}. | {props.omp.omvd} | Время оправки: {props.omp.departureTime} | Время прибытия: {props.omp.arrivalTime}
                        | {date()} | Тип преступления: {props.omp.crimeType} | {dispatched} </strong>
                </div>
                <div style={{marginBottom: 10}}>
                    <button onClick={() => setModalActive(true)} style={{marginRight: 10}}>Изменить</button>
                    <button onClick={() => setDeleteActive(true)}>Удалить</button>
                </div>
            </div>
            <div className='omp-row'>
                <strong>Рук следы {arm} | Обуви следы {shoe} | Взл оруд сл {hack} | Трас другие {tras} | Оруж + боепр {wep} | Пули, гильзы {bullet} |
                    Микрочастицы {mic} | Наркотики {drugs} | ВВ и ВУ {bb} | Пожарно-тех {fire} | Биологич {bio} | Другие {others}
                </strong>
            </div>
            <ChangeOmp
                active={modalActive}
                setActive={setModalActive}
                id={props.omp.id}
                number={props.omp.criminalCaseNumber}
                omvd={props.omp.omvd}
                dep={props.omp.departureTime}
                arr={props.omp.arrivalTime}
                date={props.omp.date}
                type={props.omp.crimeType}
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
