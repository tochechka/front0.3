import React, {useState} from 'react';
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const CreateCrExp = ({active, setActive, get, omp}) => {
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
                console.log(info)
            });
    }

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className='add-box'>
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
                    <input
                        value={modTYpe}
                        onChange={e => setModType(e.target.value)}
                        className='add-input'
                        type='text'
                    />
                </div>
                <button style={{marginTop: 20}} onClick={postExp} className='change-button'> Сохранить </button>
            </div>
        </div>
    );
};

export default CreateCrExp;