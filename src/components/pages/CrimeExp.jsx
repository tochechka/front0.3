import React, {useEffect, useState} from 'react';
import CrExpList from "../crExpParts/CrExpList";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Header from "../Header";
import CreateCrExp from "../crExpParts/CreateCrExp";

const CrimeExp = () => {
    const [crimeExps, setCrimeExps] = useState([]);
    const [modalActive, setModalActive] = useState(false);
    const [omp, setOmp] = useState([]);
    const [omvd, setOmvd] = useState([]);
    const [type, setType] = useState([]);
    const axiosPrivate = useAxiosPrivate();

    const openModal = () => {
        axiosPrivate
            .get('/omps')
            .then((response) => {
                setModalActive(true);
                setOmp(response.data.content);
            })
    }

    const getCrExp = () => {
        axiosPrivate
            .get('/expertises/crime')
            .then((response) => {
                setCrimeExps(response.data.content)
                console.log(response.data.content)
                console.log('Загетили')
            })
    }

    const getOmvd = async () => {
        axiosPrivate
            .get('/directories/OMVD/items')
            .then((response) => {
                setOmvd(response.data)
                console.log(response.data)
            })
    }

    const getExpType = async () => {
        axiosPrivate
            .get('/directories/EXPERTISE_TYPE/items')
            .then((response) => {
                setType(response.data)
                console.log(response.data)
            })
    }

    const removeCrExp = (crimeExp) => {
        axiosPrivate
            .delete(`/expertises/crime/${crimeExp.id}`)
            .then(() => {
                console.log('Удалилось')
                setCrimeExps(crimeExps.filter(p => p.id !== crimeExp.id))
            })
    }

    useEffect(() => {
        getCrExp();
        getOmvd();
        getExpType();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Header/>
            <div style={{display: "flex", paddingTop: 10}}>
                <div className='left-col'>
                    <div align='center'>
                        <span>Действия</span>
                    </div>
                    <button className='action'  onClick={openModal}>
                        Добавить новую экспертизу
                    </button>
                </div>
                <div style={{marginLeft: 50}}>
                    <div className='omp-top-text'>Список криминалистических экспертиз</div>
                    <CrExpList remove={removeCrExp} get={getCrExp} crimeExps={crimeExps}/>
                </div>
            </div>
            <CreateCrExp
                get={getCrExp}
                omp={omp}
                omvd={omvd}
                type={type}
                active={modalActive}
                setActive={setModalActive}
            />
        </div>
    );
};

export default CrimeExp;
