import {useState, useEffect, useRef} from 'react'
import { poster, posterNotAvailable } from '../../utils/contants'
import './SeasonsTV.css'
import styled from 'styled-components'

const AccordionStyle = styled.div`
    background-color: #02080f;
    min-height: 100px;
    padding-top: 50px;

    .accordion {
        max-width: 700px;
        margin: 0 auto;
        border-radius: 10px;
        background-color: #02080f;
        min-height: 200px;
    }   

    .accordion-visible {
        border-radius: 10px;
        background: #7177ca;
        width: 100%;
        color: #fff;
        cursor: pointer;
        border: 1px solid #474d9b;;
        display: flex;
        ${'' /* justify-content: left; */}
        align-items: center;
        padding: 5px ;
    }

    .img-episode {
        max-width: 150px;
        border-radius: 6px;
    }
`

const SeasonsTV = (props) => {
    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState();
    const refHeight = useRef()

    const seasons = props.seasons
    console.log(seasons);

    useEffect(() => {
        console.log(refHeight);
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])
    const toggleState = () => {
        setToggle(!toggle)
    }

    console.log(toggle);
    return (
        <AccordionStyle>
        <div className="accordion">
            {
                seasons.map(data => {
                    return (
                        <div key={data.seasons_number}>
                            <div
                                onClick={toggleState}
                                className="accordion-visible"
                            >
                                <img 
                                    src={data.poster_path ? `${poster}${data.poster_path}` : posterNotAvailable}
                                    alt='poster'
                                    className='img-episode'
                                />
                                <div className='ms-3'>
                                    <span className='fs-1'>{data.name}</span>
                                    <p>{data.episode_count} Episodes</p>
                                </div>
                            </div>
                        
                            <div 
                            className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
                            style={{height: toggle ? `${heightEl}` : "0px"}}
                            ref={refHeight}
                            >
                                <p aria-hidden={toggle ? "true" : "false"}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, suscipit quae maiores sunt ducimus est dolorem perspiciatis earum corporis unde, dicta quibusdam aut placeat dignissimos distinctio vel quo eligendi ipsam.
                                </p>
                            </div>
                        </div>
                    )
                })
            }

           
            
        </div>
        </AccordionStyle>
    )
}

export default SeasonsTV
