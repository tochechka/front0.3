import React, {useEffect, useState} from 'react';
import apiClient from "../../api";
import OmpList from "../ompParts/OmpList";
import Top from "../ompParts/Top";

const Omp = () => {
    const [omps, setOmps] = useState([]);

    const getRequest = async () => {
        apiClient
            .get('/omps')
            .then((response) => {
                setOmps(response.data.content)
                console.log('Загетили')
            })
    }

    useEffect(() => {
        getRequest();
    }, [])

    const removeOmp = (omp) => {
        apiClient
            .delete(`omps/${omp.id}`)
            .then(() => {
                console.log('Удалилось')
                setOmps(omps.filter(p => p.id !== omp.id))
            })
    }

    return (
        <div>
            <Top get={getRequest}/>
            <OmpList remove={removeOmp} get={getRequest} omps={omps}/>
        </div>
    );
};

export default Omp;