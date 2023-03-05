
// useAxios hook

import { useState, useEffect } from 'react';
import Axois from '../services/axiosConfig';


const useAxios = ({ url, method, body = null, headers = null }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        Axois[method](url, JSON.parse(headers), JSON.parse(body))
            .then((res) => {
                setResponse(res.data.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [method, url, body, headers]);

    return { response, error, loading };
};

export default useAxios;