import React from 'react';
import CrSingleExp from "./CrSingleExp";

const CrExpList = ({get, crimeExps, remove}) => {

    if (!crimeExps.length) {
        return (
            <h1 style={{textAlign:"center"}}>
                Заявления отсутствуют
            </h1>
        )
    }

    return (
        <div>
            {crimeExps.map(crimeExp =>
                <CrSingleExp remove={remove} get={get} key={crimeExp.id} crimeExp={crimeExp}/>
            )}
        </div>
    );
};

export default CrExpList;
