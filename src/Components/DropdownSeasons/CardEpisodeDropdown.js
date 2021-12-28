import { useState, useEffect } from "react"
import styled from "styled-components"
import http from '../../utils/http'
import { poster } from "../../utils/contants"
import Loading from '../Loading'
import { Link } from "react-router-dom"

const EpisodesStyle = styled.div`
    margin: 0px auto;
    border-radius: 10px;
    background-color: #181818;
    color: #fff;
    cursor: pointer;
    border: 1px solid white;
    margin: 5px;

    :hover {
        color: red;
    }

    .episode_img {
        border-radius: 10px;
        padding: 5px;
        max-width: 150px;
    }
`

const CardEpisodeDropdown = (props) => {
    const [dataEpisodes, setDataEpisodes] = useState([])
    const [loading, setLoading] = useState(true)
    
    const fetchDataEpisodes = async () => {
        const data = await http.get(`tv/${props.id}/season/${props.season_number}`, {
            params: {
                language: 'en-US'
            }
        })
        setDataEpisodes(data.data)
    }

    useEffect(() => {
        fetchDataEpisodes()
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1400)
    })

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

    return (
        <div>
            {
                loading === true ?
                <Loading typeLoad='Oval' /> :
                <>
                {
                    dataEpisodes.episodes?.map(episode => {
                        return (
                            <Link 
                                to={`/tv/${props.id}/season=${props.season_number}/episode=${episode.episode_number}`}
                                className="text-decoration-none"
                                key={episode.id}
                            >
                                <EpisodesStyle key={episode.id} className="d-flex align-items-center mt-1">
                                    <img 
                                        src={episode.still_path ? `${poster}${episode.still_path}` : null}
                                        alt="still_img"
                                        className="episode_img"
                                    />
                                    <div className="ms-3">
                                        <span>Episode {episode.episode_number}</span>
                                    </div>
                                </EpisodesStyle>
                            </Link>
                        )
                    })
                }
                </>
            } 
        </div>
    )
}


export default CardEpisodeDropdown
