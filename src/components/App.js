import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Homepage from "./Homepage"
import Sessions from "./Sessões"

export default function App () {

    //Importar informações da lista de filmes
 
            const {idFilme} = useParams();
            const [filmes, setFilmes] = useState([]);
           

   console.log(idFilme)

    useEffect(() => {
        const request =  axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        request.then(resposta => {
            setFilmes(resposta.data)
        });
    }, []);
    
    //Importar informações da lista de sessões


return (
    <BrowserRouter>
        <div className="top">
            <h1>CINEFLEX</h1>
        </div>
        
        <Routes>

        <Route path="/" element={<Homepage filmes={filmes}/>} />
        <Route path="/api/v5/cineflex/movies/:idFilme/showtimes" element={<Sessions id={idFilme} filmes={filmes}/>}/> 

        </Routes>


    </BrowserRouter>
)
}