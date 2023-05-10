import React, {useState} from 'react';
import '../../styles/Modal.css'
import '../../styles/Report.css'
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Report = ({active, setActive}) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const axiosPrivate = useAxiosPrivate();

    // const report = (e) => {
    //     e.preventDefault();
    //     axiosPrivate
    //         .get(`/reports/omp?from=${from}&to=${to}`)
    //         .then((response) => {
    //             window.open(response.data);
    //         })
    //         .catch(() => {
    //         });
    // }

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className="report-container">
                    <p className='report-text'>Введите с какое и по какое число необходимо составить отчет</p>
                    <div>
                        <div className='sub-container'>
                            С
                            <input
                                style={{marginLeft: 10}}
                                value={from}
                                onChange={e => setFrom(e.target.value)}
                                type='date'
                            />
                        </div>
                        <div className='sub-container'>
                            По
                            <input
                                style={{marginLeft: 10}}
                                value={to}
                                onChange={e => setTo(e.target.value)}
                                type='date'
                            />
                        </div>
                    </div>
                    <a className='fake-button' onClick={() => setActive(false)}
                       href={`https://api.forensicais.xxcf.cf/reports/omp?from=${from}&to=${to}`} target="_blank" rel="noopener noreferrer">
                        Gjkexbnm jnxtn
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Report;
