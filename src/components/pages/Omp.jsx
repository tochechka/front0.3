import React, {useEffect, useState} from 'react';
import '../../styles/Omp.css'
import Header from "../Header";
import OmpList from "../ompParts/OmpList";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import CreateOmp from "../ompParts/CreateOmp";
import Report from "../ompParts/Report";

const Omp = () => {
    const [omps, setOmps] = useState([]);
    const [type, setType] = useState([]);
    const [omvd, setOmvd] = useState([]);
    const [modalActive, setModalActive] = useState(false);
    const [reportActive, setReportActive] = useState(false);
    const axiosPrivate = useAxiosPrivate();

    const getRequest = async () => {
        axiosPrivate
            .get('/omps')
            .then((response) => {
                setOmps(response.data.content)
            })
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

    useEffect(() => {
        getRequest();
        getCrType();
        getOmvd();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const removeOmp = (omp) => {
        axiosPrivate
            .delete(`omps/${omp.id}`)
            .then(() => {
                setOmps(omps.filter(p => p.id !== omp.id))
            })
    }

    return (
        <div>
            <Header/>
            <div style={{display: "flex", paddingTop: 10}}>
                <div className='left-col'>
                    <div align='center'>
                        <span>Действия</span>
                    </div>
                    <button className='action'  onClick={() => setModalActive(true)}>
                        Добавить новую запись
                    </button>
                    <button className='action' onClick={() => setReportActive(true)}>
                        Получить отчет
                    </button>
                </div>
                <div style={{marginLeft: 50}}>
                    <div className='omp-top-text'>Список осмотров мест преступлений</div>
                    <OmpList remove={removeOmp} get={getRequest} omps={omps} type={type} omvd={omvd}/>
                </div>
            </div>
            <CreateOmp
                get={getRequest}
                type={type}
                omvd={omvd}
                active={modalActive}
                setActive={setModalActive}
            />
            <Report
                active={reportActive}
                setActive={setReportActive}
            />
        </div>
    );
};

export default Omp;