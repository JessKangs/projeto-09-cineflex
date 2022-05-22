import { Link } from "react-router-dom";

export default function Homepage ({filmes}) {
        console.log(filmes)
    return (
        <>

            {filmes.map(poster => <Link to={`/api/v5/cineflex/movies/${poster.id}/showtimes`}><div className="movie-card">
                <img src={poster.posterURL} alt="poster"/>
                </div></Link> )}
            

        </>
    )
}