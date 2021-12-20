import { poster } from "../utils/contants"
import styled from "styled-components"

const StyleCardSimilar = styled.div`
    margin: 5px;
    background-color: #02080f;
    border: 1px solid white;
    border-radius: 4px;
    color: #FFFFFF;

    .img {
        width: 25%;
        border-radius: 8px;
    }
     
    :hover {
        color: red;
    }
`

const CardSimilar = (props) => {
    return (
        <StyleCardSimilar className="w-90 d-flex">
            <img 
                src={`${poster}${props.poster_path}`} 
                alt="img" 
                className="img"    
            />
            <div className="ms-2 mt-3">{props.title}</div>
        </StyleCardSimilar>
    )
}

export default CardSimilar
