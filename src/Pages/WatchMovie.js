import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import CardSimilar from "../Components/CardSimilar"
import http from '../utils/http'
import Frame from "../Components/Frame"
import Meta from "../Components/Meta"

const StyleWatch = styled.div`
    .main-watch {
        display: flex;
        margin: 100px 0;
    }
   
    .similar {
        height: 800px;
        background-color: #02080f;
        margin-left: 10px;
        overflow: auto;
        border: 1px solid white;
        border-radius: 8px;
    }
` 

const Watch = () => {
    const params = useParams()
    const [detailsData, setDetailsData] = useState([])
    const [dataSimilar, setDataSimilar] = useState([])

    const fetchDataSimilar = async () => {
        const data = await Promise.all([
            http.get(`/${params.media_type}/${params.id}`, {
                params: {
                    language: "en-US",
                },
            }),
            http.get(`/movie/${params.id}/similar`, {
                params: {
                    language: 'en-US'
                }
            })
        ]) 
        setDetailsData(data[0].data)
        setDataSimilar(data[1].data.results)
    }

    useEffect(() => {
        fetchDataSimilar()
    }, [])

    return (
        <>
            <Meta title={detailsData.title} />
            <StyleWatch className="d-flex container">
                <div className="main-watch container">
                    <div className="col-9">
                        <div>
                            <Frame 
                                media_type='movie'
                                id={params.id}
                            />
                        </div>
                        <div className="text-light">
                            <div className="fs-1">{detailsData.title}</div>
                            <p className="fst-italic">{detailsData.tagline}</p>
                            <div className="fs-5">{detailsData.overview}</div>
                            <div>Release date: {detailsData.release_date}</div>
                        </div>
                    </div>
                    <div className="col-3 similar">
                        {dataSimilar.map(data => {
                            return (
                                <CardSimilar 
                                    key={data.id}
                                    title={data.title}
                                    poster_path={data.poster_path}
                                    id={data.id}
                                />
                            )
                        })}
                    </div>
                </div>
            </StyleWatch>
        </>
    )
}

export default Watch
