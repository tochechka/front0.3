import React from 'react';
import OmpItem from "./OmpItem";

const OmpList = ({omps, remove, get, omvd, type}) => {

    if (!omps.length) {
        return (
            <h1 style={{textAlign:"center"}}>
                Заявления отсутствуют
            </h1>
        )
    }

    return (
        <div>
            {omps.map(omp =>
                <OmpItem remove={remove} get={get} key={omp.id} omp={omp} omvd={omvd} type={type}/>
            )}
        </div>
    );
};

export default OmpList;
