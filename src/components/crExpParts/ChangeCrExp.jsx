import React, {useState} from 'react';
import '../../styles/CreateOmp.css'
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const ChangeCrExp = ({id, get, curOmvd, curType, date, active, setActive, omp, lastName, ompId, type, omvd}) => {
    const [modOmvd, setModOmvd] = useState(curOmvd);
    const [modOmp, setModOmp] = useState(ompId);
    const [modDate, setModDate] = useState(date);
    const [modLastName, setModLastName] = useState(lastName);
    const [modTYpe, setModType] = useState(curType);
    const axiosPrivate = useAxiosPrivate();

    const putExp = (e) => {
        e.preventDefault();

        const info = {
            'id': id,
            'ompId': modOmp,
            'omvd': modOmvd,
            'date': modDate,
            'suspectLastname': modLastName,
            'expertiseType': modTYpe
        }

        axiosPrivate
            .put(`/expertises/crime/${id}`, info)
            .then(() => {
                setActive(false);
                get();
            })
            .catch(() => {
            });
    }

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className='add-box'>
                    <div className='add-text'>
                        Название омвд
                    </div>
                    <select
                        onChange={e => setModOmvd(e.target.value)}
                    >
                        <option disabled value=''>Название омвд</option>
                        {omvd.map(om =>
                            <option key={om.value} value={om.value}>
                                {om.value}
                            </option>
                        )}
                    </select>
                    <div className='add-text'>
                        Номер ОМП
                    </div>
                    <select
                        onChange={e => setModOmp(e.target.value)}
                    >
                        <option disabled value=''>Номер овмд</option>
                        {omp.map(o =>
                            <option key={o.id} value={o.id}>
                                {o.criminalCaseNumber}
                            </option>
                        )}
                    </select>
                    <div className='add-text'>
                        Дата
                    </div>
                    <input
                        value={modDate}
                        onChange={e => setModDate(e.target.value)}
                        className='add-input'
                        type='date'
                    />
                    <div className='add-text'>
                        Фамимлия преступника
                    </div>
                    <input
                        value={modLastName}
                        onChange={e => setModLastName(e.target.value)}
                        className='add-input'
                        type='text'
                    />
                    <div className='add-text'>
                        Тип экспертизы
                    </div>
                    <select
                        onChange={e => setModType(e.target.value)}
                    >
                        <option disabled value=''>Тип экспеотизы</option>
                        {type.map(t =>
                            <option key={t.value} value={t.value}>
                                {t.value}
                            </option>
                        )}
                    </select>
                </div>
                <button style={{marginTop: 20}} onClick={putExp} className='change-button'> Сохранить </button>
            </div>
        </div>
    );
};

export default ChangeCrExp;
