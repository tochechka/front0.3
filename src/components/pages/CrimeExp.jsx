import React, {useEffect, useState} from 'react';
import apiClient from "../../api";
import CrExpTop from "../crExpParts/CrExpTop";
import CrExpList from "../crExpParts/CrExpList";

const CrimeExp = () => {
    const [crimeExps, setCrimeExps] = useState([]);

    const getCrExp = () => {
        apiClient
            .get('/expertises/crime')
            .then((response) => {
                setCrimeExps(response.data.content)
                console.log(response.data.content)
                console.log('Загетили')
            })
    }

    const removeCrExp = (crimeExp) => {
        apiClient
            .delete(`/expertises/crime/${crimeExp.id}`)
            .then(() => {
                console.log('Удалилось')
                setCrimeExps(crimeExps.filter(p => p.id !== crimeExp.id))
            })
    }

    useEffect(() => {
        getCrExp();
    }, [])

    return (
        <div>
            <CrExpTop get={getCrExp}/>
            <CrExpList remove={removeCrExp} get={getCrExp} crimeExps={crimeExps}/>
        </div>
    );
};

export default CrimeExp;
