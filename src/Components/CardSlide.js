import { Link } from 'react-router-dom'
import { poster, posterNotAvailable } from '../utils/contants'
import styled from 'styled-components'

const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin-top: 5px;
    border-radius: 10px;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
    color: white;

    .poster {
        border-radius: 6px;
        width: 100%;
        height: 290px;
        min-height: 100px;
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        transition: all 0.3s ease;
    }

    ${'' /* @media (max-width: 990px) {
        .poster {
            height: 230px;
        }
    }

    @media (max-width: 1200px) {
        .poster {
            height: 250px;
        }
    }

    @media (max-width: 1450px) {
        .poster {
            height: 280px;
        }
    } */}

    .poster:hover {
        transform: scale(1.05);
        border: 1px solid #111;
    }
    
    :hover{
        color: red;
    }
`

const CardSlide = (props) => {
    return (
        <Link to={`/details/${props.media_type}/${props.id}`} className='text-decoration-none link'>
            <CardStyle>
                <img 
                    className='poster' 
                    src={props.poster_path ? 
                    `${poster}${props.poster_path}` : 
                    posterNotAvailable} 
                    alt='poster'
                />
                <b className='w-100 text-align-left pt-2'>{props.title}</b>
            </CardStyle>
        </Link>
    )
}

export default CardSlide
