import React, {useState} from 'react';
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const CreateCrExp = ({active, setActive, get, omp, type, omvd}) => {
    const [modOmvd, setModOmvd] = useState('');
    const [modOmp, setModOmp] = useState('');
    const [modDate, setModDate] = useState('');
    const [modLastName, setModLastName] = useState('');
    const [modTYpe, setModType] = useState('');
    const axiosPrivate = useAxiosPrivate();

    const postExp = (e) => {
        e.preventDefault();

            const info = {
                'ompId': modOmp,
                'omvd': modOmvd,
                'date': modDate,
                'suspectLastname': modLastName,
                'expertiseType': modTYpe
            }

        axiosPrivate
            .post('expertises/crime', info)
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
                        <option value=''>Номер омвд</option>
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
                        <option value=''>Название овмд</option>
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
                        <option value=''>Тип экспертизы</option>
                        {type.map(t =>
                            <option key={t.value} value={t.value}>
                                {t.value}
                            </option>
                        )}
                    </select>
                </div>
                <button style={{marginTop: 20}} onClick={postExp} className='change-button'> Сохранить </button>
            </div>
        </div>
    );
};

export default CreateCrExp;