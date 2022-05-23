import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Sessions () {

    const {idFilme} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

        request.then(resposta => {
           setData(resposta.data);
          
        })

    },[])


   
    console.log(data)
    
    

    return (

        <>
            <div className="instrucoes">
            <h1>Selecione o horário</h1>
            </div>


        { data.length!==0 ? data.days.map( (session, index) =>  
        <div key={index} className="session-time">
            <h2>{`${session.weekday} - ${session.date}`}</h2>

            <div >
            {session.showtimes.map( (time, index) => <Link to={`/lugares/${time.id}`}>
                <button key={index} className='time-button'>{time.name}</button>
            </Link>)}
            </div>
        </div>): ""} 
        
        
        <div className="status-bottom">
            { <>
            <div className="bottom-movie-card"><img src={data.posterURL} alt="" /></div>
            <h2>{data.title}</h2>
            </> }
        </div>
        </>
       
    )
} 