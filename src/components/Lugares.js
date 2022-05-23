import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Lugares ({ filmes, data }) {

    
    const {idSessao} = useParams();
    const [sits, setSits] = useState([]);
    
    useEffect(() => {
        const request =  axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

        request.then(resposta => {
            setSits(resposta.data.seats)
            
        });
    }, []);

    
    console.log(idSessao)
    console.log(sits)
    

    const [select, setSelect] = useState(false)

    function indisponivel () {
        alert("Este assento não está disponível")
    }

    function condicao () {
         setSelect("selected")
         console.log("EAI")
 }


    const [dnome, setDnome] = useState("");
    const [dcpf, setDcpf] = useState("");
    // let select = 'selected';

    function enviar () { 
        let dados = {
            ids: [],
            name: {dnome},
            cpf: {dcpf}
        }
        console.log(dados)
        console.log(dados.ids)
        axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", dados)

    }

   

    const [idSeats, setIdSeats] = useState([])

    return (
            <>
            
             <div className="instrucoes">
            <h1>Selecione o(s) assento(s)</h1>
            </div>

            <div className="assentos">
                {sits.map( chairs => <div key={chairs.id} onClick={chairs.isAvailable ? condicao : indisponivel} 
                className={chairs.isAvailable ? `assento ${select}` : `assento indisponivel` } >
                    <h1 >{chairs.name}</h1>
                </div>)}
            </div>


            <div className="disponibilidade">
                <div className='bolinha'>
                    <div className={`selected`}></div>
                    <h1>Selecionado</h1>
                </div>

                <div className='bolinha'>
                    <div className={`disponivel`}></div>
                    <h1>Disponível</h1>
                </div>

                <div className='bolinha'>
                    <div className={`indisponivel`}></div>
                    <h1>Indisponível</h1>
                </div>

            </div>

            <div className='form'>
                <form>
                    <label>Nome do comprador:</label>
                    <input onChange={(e) => setDnome(e.target.value)} placeholder="Digite seu nome..."/>

                    <label>CPF do comprador:</label>
                    <input onChange={(e) => setDcpf(e.target.value)} placeholder="Digite seu CPF..."/>
                
                </form>

            </div>

            <Link to="/sucesso"><button onClick={enviar} className='button-seats'>Reservar assento(s)</button></Link>

            {/* <div className="status-bottom">
                <img src={data.posterURL} alt="" />
                <h2>{data.title}</h2>
            </div>  */}

            </>
    )
}
