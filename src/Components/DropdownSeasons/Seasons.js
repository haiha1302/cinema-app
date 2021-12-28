import {Fragment, useState} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'
import CardDropdown from './CardDropdown'
import CardEpisodeDropdown from './CardEpisodeDropdown'

const AccordionStyle = styled.div`
    background-color: #02080f;
    ${'' /* min-height: 50px; */}
    padding-top: 0px;
    cursor: pointer;

    .accordion {
        max-width: 700px;
        margin: 0 auto;
        border-radius: 10px;
        background-color: #02080f;
        min-height: 200px;
    }   

    .img-episode {
        max-width: 150px;
        border-radius: 6px;
    }
`

const SeasonsTV = (props) => {
    const [toggle, setToggle] = useState(null)
    
    return (
        <AccordionStyle>
        {
            props.seasons.map(data => {
                return (
                    <Fragment key={data.season_number}>
                        <CardDropdown
                            poster_path={data.poster_path}
                            name={data.name}
                            episode_count={data.episode_count}
                            setToggle={() => {
                                toggle === data.season_number ? setToggle(null) : setToggle(data.season_number)
                            }}
                            season_number={data.season_number}
                        />

                        <AnimatePresence>
                            {
                                toggle === data.season_number && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{
                                            height: 'auto',
                                            transition: {
                                                duration: 0.5
                                            }
                                        }}
                                        exit={{ height: 0 }}    
                                        className='overflow-hidden'
                                    >
                                        <CardEpisodeDropdown id={props.id} season_number={data.season_number} />
                                    </motion.div>
                                )
                            }
                        </AnimatePresence>
                    </Fragment>
                )
            })
        }
        </AccordionStyle>
    )
}

export default SeasonsTV
