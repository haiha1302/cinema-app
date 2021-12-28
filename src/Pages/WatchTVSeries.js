import { useState, useEffect } from "react"
import Frame from "../Components/Frame"
import http from '../utils/http'
import styled from "styled-components"
import { useParams } from "react-router-dom"
import Seasons from '../Components/DropdownSeasons/Seasons'

const StyleWatch = styled.div`
    .main-watch {
        display: flex;
        margin: 100px 0;
    }
    
    .seasons {
        height: 800px;
        background-color: #02080f;
        margin-left: 10px;
        overflow: auto;
        border: 1px solid white;
        border-radius: 8px;
    }
` 

const WatchTVSeries = () => {
    const params = useParams()
    const [detailsData, setDetailsData] = useState([])

    const fetchDetailsTVSeries = async () => {
        const data = await http.get(`/${params.type}/${params.id}`, {
            params: {
                language: "en-US",
            },
        })
        setDetailsData(data.data)
    }
    
    useEffect(() => {
        fetchDetailsTVSeries()
    }, [])

    return (
        <StyleWatch className="d-flex container">
             <div className="main-watch container">
                <div className="col-9">
                    <div>
                        <Frame 
                            type='tv'
                            id={params.id}
                            season_id={params.season_id}
                            episode_id={params.episode_id}
                        />
                    </div>
                    <div className="text-light">
                        <div className="fs-1">{detailsData.name}</div>
                        <p className="fst-italic">{detailsData.tagline}</p>
                        <div className="fs-5">{detailsData.overview}</div>
                        <div>Release date: {detailsData.release_date}</div>
                    </div>
                </div>
                <div className="col-3 seasons">
                    {
                        detailsData.seasons ? 
                        <Seasons type={params.type} id={params.id} seasons={detailsData.seasons} /> :
                        null
                    }
                </div>
            </div>
        </StyleWatch>
    )
}

export default WatchTVSeries
