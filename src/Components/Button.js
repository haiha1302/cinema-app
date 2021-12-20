import styled from "styled-components"
import { BsFillPlayCircleFill, BsExclamationCircleFill } from "react-icons/bs";

const Btn = styled.button`
    border: none;
    padding: 10px 25px;
    border-radius: 10px;
    font-weight: bold;
    margin-right: 10px;

    :hover {
        background-color: #dddddd;
    }
`

const Button = (props) => {
    return (
        <Btn>
            {props.name === 'Play Now' ? <BsFillPlayCircleFill /> : <BsExclamationCircleFill />}
            <span className="ms-1">{props.name}</span>
        </Btn>
    )
}

export default Button
