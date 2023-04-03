import React, {useState} from 'react';
import '../../styles/Modal.css'
import '../../styles/CreateOmp.css';
import apiClient from "../../api";

const ChangeOmp = ({active, setActive, id, number, omvd, dep, arr, date, type, get, dispatched}) => {
    const [modNumber, setModNumber] = useState(number);
    const [modOmvd, setModOmvd] = useState(omvd);
    const [modDep, setModDep] = useState(dep);
    const [modArr, setModArr] = useState(arr);
    const [modDate, setModDate] = useState(date);
    const [modType, setModType] = useState(type);
    const [arm, setArm] = useState(false);
    const [shoe, setShoe] = useState(false);
    const [hack, setHack] = useState(false);
    const [tras, setTras] = useState(false);
    const [wep, setWep] = useState(false);
    const [bullet, setBullet] = useState(false);
    const [mic, setMic] = useState(false);
    const [drugs, setDrugs] = useState(false);
    const [bb, setBb] = useState(false);
    const [fire, setFire] = useState(false);
    const [bio, setBio] = useState(false);

    const toggleArm = () => {setArm(!arm);}

    const toggleShoe = () => {setShoe(!shoe);}

    const toggleHack = () => {setHack(!hack);}

    const toggleTras = () => {setTras(!tras);}

    const toggleWep = () => {setWep(!wep);}

    const toggleBullet = () => {setBullet(!bullet);}

    const toggleMic = () => {setMic(!mic);}

    const toggleDrugs = () => {setDrugs(!drugs);}

    const toggleBb = () => {setBb(!bb);}

    const toggleFire = () => {setFire(!fire);}

    const toggleBio = () => {setBio(!bio);}

    function changeOmp(e) {
        e.preventDefault();

        const info = {
            "date": modDate,
            "arrivalTime": modArr,
            "departureTime": modDep,
            "omvd": modOmvd,
            "criminalCaseNumber": modNumber,
            "crimeType": modType,
            "dispatched": dispatched,
            "withdrawalsHandprints": arm,
            "withdrawalsShoeTracks": shoe,
            "withdrawalsHackingTracks": hack,
            "withdrawalsTracologicalOther": tras,
            "withdrawalsWeaponsAndAmmunition": wep,
            "withdrawalsBulletsAndShell": bullet,
            "withdrawalsMicroparticles": mic,
            "withdrawalsDrugs": drugs,
            "withdrawalsBbWu": bb,
            "withdrawalsFireTechnical": fire,
            "withdrawalsBiological": bio,
            "withdrawalsOther": true
        }

        apiClient
            .put(`/omps/${id}`, info)
            .then(() => {
                console.log("Изменилось");
                console.log(info);
                setActive(false);
                get();
            })
            .catch(() => {
                console.log(info)
            });
    }

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className='add-row'>
                    <div className='add-box'>
                        <div className='add-text'>
                            Дата Выезда
                        </div>
                        <input
                            value={modDate}
                            onChange={e => setModDate(e.target.value)}
                            className='add-input'
                            type='date'
                        />
                        <div className='add-text'>
                            Время отправления
                        </div>
                        <input
                            value={modDep}
                            onChange={e => setModDep(e.target.value)}
                            className='add-input'
                            type='time'
                        />
                        <div className='add-text'>
                            Время прибытия
                        </div>
                        <input
                            value={modArr}
                            onChange={e => setModArr(e.target.value)}
                            className='add-input'
                            type='time'
                        />
                        <div className='add-text'>
                            Название омвд
                        </div>
                        <input
                            value={modOmvd}
                            onChange={e => setModOmvd(e.target.value)}
                            className='add-input'
                            type='text'
                        />
                        <div className='add-text'>
                            Номер дела
                        </div>
                        <input
                            value={modNumber}
                            onChange={e => setModNumber(e.target.value)}
                            className='add-input'
                            type='text'
                        />
                        <div className='add-text'>
                            Тип преступления
                        </div>
                        <input
                            value={modType}
                            onChange={e => setModType(e.target.value)}
                            className='add-input'
                            type='text'
                        />
                    </div>
                    <div className='add-box'>
                        <div className='check-input' onClick={toggleArm}>Рук следы <input type='checkbox'/></div>
                        <div className='check-input' onClick={toggleShoe}>Обуви следы <input type='checkbox'/></div>
                        <div className='check-input' onClick={toggleHack}>Взл оруд сл <input type='checkbox'/></div>
                        <div className='check-input' onClick={toggleTras}>Трас другие <input type='checkbox'/></div>
                        <div className='check-input' onClick={toggleWep}>Оруж + боепр <input type='checkbox'/></div>
                        <div className='check-input' onClick={toggleBullet}>Пули, гильзы <input type='checkbox'/></div>
                        <div className='check-input' onClick={toggleMic}>Микрочастицы <input type='checkbox'/></div>
                        <div className='check-input' onClick={toggleDrugs}>Наркотики <input type='checkbox'/></div>
                        <div className='check-input' onClick={toggleBb}>ВВ и ВУ <input type='checkbox'/></div>
                        <div className='check-input' onClick={toggleFire}>Пожарно-тех <input type='checkbox'/></div>
                        <div className='check-input' onClick={toggleBio}>Биологич <input type='checkbox'/></div>
                    </div>
                </div>
                <button className='send-button' onClick={changeOmp}>Сохранить</button>
            </div>
        </div>
    );
};

export default ChangeOmp;
