import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Homepage from "./Homepage"
import Sessions from "./Sessões"
import Lugares from "./Lugares";
import Confirmação from "./Confirmação"

export default function App () {

    //Importar informações da lista de filmes
 
       
            const [filmes, setFilmes] = useState([]);
           

   //console.log(idFilme)

    useEffect(() => {
        const request =  axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        request.then(resposta => {
            setFilmes(resposta.data)
        });
    }, []);
    
    


return (
    <BrowserRouter>
        <div className="top">
            <h1>CINEFLEX</h1>
        </div>
        
        <Routes>

        <Route path="/" element={<Homepage filmes={filmes}/>} />

        <Route path="sessoes/:idFilme" element={<Sessions filmes={filmes}/>}/>

        <Route path="lugares/:idSessao" element={<Lugares filmes={filmes}/>}/>

        <Route path="/sucesso" element={<Confirmação />} /> 
        </Routes>


    </BrowserRouter>
)
}