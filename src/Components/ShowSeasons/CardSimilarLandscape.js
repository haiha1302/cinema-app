import { Link } from "react-router-dom";
import styled from "styled-components"
import { poster, posterNotAvailableLandscape } from '../../utils/contants'

const CardSimilarLandscapeStyle = styled.div`
    margin: 0 5px;
    display: flex;
    flex-direction: column;

    .img-landscape {
        border-radius: 10px;
    }

    .title-landscape {
        font-size: 20px;
    }

    :hover {
        color: red;
    }  
`

const CardSimilarLandscape = (props) => {
    return (
            <Link 
                to={`/tv/${props.id}/season=${props.season_number}/episode=${props.episode_number}`}
                className="text-decoration-none text-light"
            >
                <CardSimilarLandscapeStyle>
                    <img 
                        src={props.still_path ? `${poster}${props.still_path}` : posterNotAvailableLandscape}
                        alt="poster"
                        className="img-landscape"
                    />
                    <span className="title-landscape">Episode {props.episode_number}</span>
                </CardSimilarLandscapeStyle>
            </Link>
    )
}

export default CardSimilarLandscape
