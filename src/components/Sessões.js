import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Session ({ id, filmes }) {
    
    const [sessoes, setSessoes] = useState([]);

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`)

        request.then(resposta => {
            setSessoes(resposta.data)
        })

    },[])

    console.log(sessoes)

    console.log(id)

    console.log(filmes)

    return (

        <>
            <div className="instrucoes">
            <h1>Selecione o horário</h1>
            </div>


        {sessoes.map(time =>  
        <div className="session-time">
            <h2>{time.weekday}{time.date}</h2>
            <button>{time.name}</button>
        </div>)}
        
        
        <div className="status-bottom">
            <img src="" alt="" />
            <h2>{filmes.title}</h2>
        </div>
        </>
       
    )
} 