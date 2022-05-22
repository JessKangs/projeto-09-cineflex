import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function IdFilme () {
    const {idFilme} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

        request.then(resposta => {
           setData(resposta.data)
          
        })

    },[])

    return (data)
}