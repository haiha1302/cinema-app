import { useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom'
import http from '../utils/http'
import styled from "styled-components"
import Button from "../Components/Button"
import SeasonsTV from "../Components/Shared/SeasonsTV"
import Loading from "../Components/Loading"

const Details = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #02080f;
    
    .big-img-banner {
        height: 50vw;
    }

    .mask-banner {
        height: 50vw;
        width: 100%;
    }

    .banner-info {
        margin: 200px 0 0 100px;
    }
`

const BannerImg = styled.div`
    .banner-img {
        border-radius: 10px;
        bottom: 0;
    }
`

const WatchDetails = () => {
    const params = useParams()
    const [dataDetails, setDataDetails] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchDataDetails = async () => {
        const data = await http.get(`/${params.type}/${params.id}`,
        {
            params: {
                language: "en-US",
            },
        });
        setDataDetails(data.data)
    }
    // console.log(dataDetails);
    useEffect(() => {
        fetchDataDetails()
    }, [])

    useEffect(() =>{
        setTimeout(() => {
            setLoading(false)
        }, 2500);
    })

    return (
        <>
            {
                loading === true ?
                <Loading /> :
                <>
                    <Details>
                        <img
                            src={dataDetails.backdrop_path ? `https://image.tmdb.org/t/p/original/${dataDetails.backdrop_path}` : null}
                            alt="banner"
                            className="big-img-banner w-100 mask absolute top-0"
                        />
                        <div className="mask-banner top-0 position-absolute mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>                
                            <div className="banner-info container d-flex">
                                <BannerImg>
                                    <img
                                        src={dataDetails.poster_path ? `https://image.tmdb.org/t/p/w300${dataDetails.poster_path}` : null}
                                        alt="poster"
                                        className="banner-img"
                                    />
                                </BannerImg>
                                <div className=" text-light ms-4 me-5">
                                    <div>
                                        <Link to={`/${params.type}/${params.id}`}>
                                            <Button name='Play Now' />
                                        </Link>
                                    </div>
                                    <div className="fs-1 fw-bold">{dataDetails.title || dataDetails.name}</div>
                                    <div className="fst-italic fs-6">{dataDetails.tagline}</div>
                                    <div className="fs-4">{dataDetails.overview}</div>
                                    <div className="fs-5 fst-italic">Release Date: {dataDetails.release_date || dataDetails.first_air_date}</div>
                                    <div>Vote: {dataDetails.vote_average}</div>
                                    <div>acctor</div>
                                </div>
                            </div>
                        </div>
                        {
                            dataDetails.seasons ? 
                            <SeasonsTV type={params.type} id={params.id} seasons={dataDetails.seasons} /> :
                            null
                        }
                        
                    </Details>
                </>
            }
        </>
    );
}

export default WatchDetails
