import React, {useState} from 'react';
import '../../styles/Modal.css'
import '../../styles/CreateOmp.css'
import apiClient from "../../api";

const CreateOmp = ({get, active, setActive}) => {
    const [date, setDate] = useState('');
    const [dep, setDep] = useState('');
    const [arr, setArr] = useState('');
    const [omvd, setOmvd] = useState('');
    const [number, setNumber] = useState('');
    const [type, setType] = useState('');
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

    const addNewOmp = (e) => {
        e.preventDefault();

        const info = {
            "date": date,
            "arrivalTime": arr,
            "departureTime": dep,
            "omvd": omvd,
            "criminalCaseNumber": number,
            "crimeType": type,
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
            .post('/omps', info)
            .then((response) => {
                setActive(false);
                get();
            })
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
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            className='add-input'
                            type='date'
                        />
                        <div className='add-text'>
                            Время отправления
                        </div>
                        <input
                            value={dep}
                            onChange={e => setDep(e.target.value)}
                            className='add-input'
                            type='time'
                        />
                        <div className='add-text'>
                            Время прибытия
                        </div>
                        <input
                            value={arr}
                            onChange={e => setArr(e.target.value)}
                            className='add-input'
                            type='time'
                        />
                        <div className='add-text'>
                            Название омвд
                        </div>
                        <input
                            value={omvd}
                            onChange={e => setOmvd(e.target.value)}
                            className='add-input'
                            type='text'
                        />
                        <div className='add-text'>
                            Номер дела
                        </div>
                        <input
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                            className='add-input'
                            type='text'
                        />
                        <div className='add-text'>
                            Тип преступления
                        </div>
                        <input
                            value={type}
                            onChange={e => setType(e.target.value)}
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
                <button className='send-button' onClick={addNewOmp}>Сохранить</button>
            </div>
        </div>
    );
};

export default CreateOmp;
