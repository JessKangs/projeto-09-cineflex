import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Lugares ({ filmes, data }) {

    const [sits, setSits] = useState([]);
    const {idSessao} = useParams();
    
    useEffect(() => {
        const request =  axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        request.then(resposta => {
            console.log(setSits(resposta.data))
            
        });
    }, []);

    
    console.log(idSessao)
    console.log(sits)

    return (
            <>
            
             <div className="instrucoes">
            <h1>Selecione o(s) assento(s)</h1>
            </div>

            <div className="assentos">
                {sits.map( chairs => <div className="assento">
                    <h1>{chairs}</h1>
                </div>)}
            </div>

            <div className="disponibilidade">

            </div>

            <form>
                <label>Nome do comprador:</label>
                <input placeholder="Digite seu nome..."/>

                <label>CPF do comprador:</label>
                <input placeholder="Digite seu CPF..."/>
            
                <button>Reservar assento(s)</button>
            </form>

            {/* <div className="status-bottom">
                <img src={data.posterURL} alt="" />
                <h2>{data.title}</h2>
            </div>  */}

            </>
    )
}