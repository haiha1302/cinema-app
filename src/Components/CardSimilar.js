import { poster } from "../utils/contants"
import styled from "styled-components"
import { Link } from "react-router-dom"

const StyleCardSimilar = styled.div`
    .link {
        margin: 5px;
        background-color: #02080f;
        border: 1px solid white;
        border-radius: 4px;
        color: #FFFFFF;
    }

    .img {
        width: 25%;
        border-radius: 8px;
    }
     
    .link:hover {
        color: red;
    }
`

const CardSimilar = (props) => {
    return (
        <StyleCardSimilar className="w-90">
            <Link 
                to={`/movie/${props.id}`} 
                className="d-flex justify-content-start align-items-center text-decoration-none link">
                <img 
                    src={`${poster}${props.poster_path}`} 
                    alt="img" 
                    className="img"    
                />
                <div className="ms-2">{props.title}</div>
            </Link>
        </StyleCardSimilar>
    )
}

export default CardSimilar
