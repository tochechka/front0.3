import React, {useState} from 'react';
import '../../styles/Modal.css'
import '../../styles/Table.css'

const Report = ({active, setActive}) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className="pdf-container">
                    Введите с какое и по какое число необходимо составить отчет
                    <div className='sub-container'>
                        <div>
                            С
                            <input
                                style={{marginLeft: 10}}
                                value={from}
                                onChange={e => setFrom(e.target.value)}
                                type='date'
                            />
                        </div>
                        <div>
                            По
                            <input
                                style={{marginLeft: 10}}
                                value={to}
                                onChange={e => setTo(e.target.value)}
                                type='date'
                            />
                        </div>
                    </div>
                    <a className='fake-button' onClick={() => setActive(false)} href={`https://api.forensicais.xxcf.cf/reports/omp?from=${from}&to=${to}`} target="_blank" rel="noopener noreferrer">
                        Составить отчет
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Report;
