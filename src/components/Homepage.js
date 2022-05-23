import { Link } from "react-router-dom";

export default function Homepage ({filmes}) {
        console.log(filmes)
    return (
        <>

            <div className="instrucoes">
                <h1>Selecione o filme</h1>
            </div>

            <div className="render-filmes">
                {filmes.map((poster,index) => <Link to={`/sessoes/${poster.id}`}><div key={index} className="movie-card">
                    <img key={index} src={poster.posterURL} alt="poster"/>
                    </div></Link> )}
            
            </div>

        </>
    )
}