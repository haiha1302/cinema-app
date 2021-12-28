import { poster, posterNotAvailable } from "../../utils/contants"
import styled from "styled-components"

const SeasonsStyle = styled.div`
    margin: 5px;
    min-height: 30px;
    border-radius: 5px;
    background-color: #181818;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 5px;
    border: 1px solid white;

    :hover {
        color: red;
    }

    .img-season {
        max-width: 60px;
        border-radius: 6px;
    }
`

const CardDropdown = (props) => {
    return (
        <SeasonsStyle
            onClick={props.setToggle}
            className="accordion-visible"
        >
            <img 
                src={props.poster_path ? `${poster}${props.poster_path}` : posterNotAvailable}
                alt='poster'
                className='img-season'
            />
            <div className='ms-3'>
                <span className='fs-4'>{props.name}</span>
                <p>{props.episode_count} Episodes</p>
            </div>
        </SeasonsStyle>
    )
}

export default CardDropdown
