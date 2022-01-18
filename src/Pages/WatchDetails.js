import { useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom'
import styled from "styled-components"
import Button from "../Components/Button"
import Loading from "../Components/Loading"
import ShowSeasons from "../Components/ShowSeasons/ShowSeasons"
import Meta from "../Components/Meta"
import StarRating from '../Components/StarRating'
import { getMovieDetails } from '../utils/apis'
import SliderActor from "../Components/SliderActor"

const Details = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    min-height: 100vh;
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
    const [data, setData] = useState()
    const [casts, setCasts] = useState()
    const [similar, setSimilar] = useState()
    const [videos, setVideos] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const resultsMovieDetails = () => {
            getMovieDetails(params.media_type, params.id)
            .then(
                res => {
                    setData(res.data)
                    setCasts(res.casts)
                    setSimilar(res.similar)
                    setVideos(res.videos)
                }
            )
            .catch(err => console.log(err))
        }

        resultsMovieDetails()
    }, [])
    
    useEffect(() =>{
        setTimeout(() => {
            setLoading(false)
        }, 2500);
    })

    return (
        <>
            <Meta title={data?.title || data?.name} />
            {
                loading === true ?
                <Loading typeLoad='Plane' position='center' /> :
                <>
                    <Details>
                        <img
                            src={data.backdrop_path ? `https://image.tmdb.org/t/p/original/${data.backdrop_path}` : null}
                            alt="banner"
                            className="big-img-banner w-100 mask absolute top-0"
                        />
                        <div className="mask-banner top-0 position-absolute mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>                
                            <div className="banner-info container d-flex">
                                <BannerImg>
                                    <img
                                        src={data.poster_path ? `https://image.tmdb.org/t/p/w300${data.poster_path}` : null}
                                        alt="poster"
                                        className="banner-img"
                                    />
                                </BannerImg>
                                <div className=" text-light ms-4 me-5">
                                    <div>
                                        <Link to={params.media_type === 'movie' ? `/${params.media_type}/${params.id}` : `/${params.media_type}/${params.id}/season=1/episode=1`}>
                                            <Button name='Play Now' />
                                        </Link>
                                    </div>
                                    <div className="fs-1 fw-bold">{data.title || data.name}</div>
                                    <div className="fst-italic fs-6">{data.tagline}</div>
                                    <div className="fs-4">{data.overview}</div>
                                    <div className="fs-5 fst-italic">Release Date: {data.release_date || data.first_air_date}</div>
                                    <div>Vote: {data.vote_average}</div>
                                    <StarRating 
                                        stars={Math.round(data.vote_average)}
                                        extraText={`(${data.vote_count} votes)`}
                                    />
                                    <div>acctor</div>
                                </div>
                            </div>
                            <div>
                                <SliderActor casts={casts} />
                            </div>
                        </div>
                        
                        {
                            params.media_type === 'tv' ?
                            <ShowSeasons data={data.seasons} id={params.id} /> :
                            null
                        }
                    </Details>
                </>
            }
        </>
    );
}

export default WatchDetails
