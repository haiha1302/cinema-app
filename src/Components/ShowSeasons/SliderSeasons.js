import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation} from 'swiper';
import http from '../../utils/http'
import CardSimilarLandscape from './CardSimilarLandscape'
import Loading from '../Loading'

SwiperCore.use([Navigation]);

const SliderSeasons = (props) => {
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
        }, 1000)
    })

    return (
        <>
            {
                loading === true ?
                <Loading /> :
                <>
                    <Swiper 
                        navigation={true} 
                        slidesPerView={4}
                        className="mySwiper"
                    >
                    {
                        dataEpisodes.episodes.map(episode => {
                            return (
                                <SwiperSlide key={episode.id}>
                                    <CardSimilarLandscape
                                        episode_id={episode.id}
                                        type={episode.media_type}
                                        still_path={episode.still_path}
                                        title={episode.name}
                                        id={props.id}
                                        season_number={episode.season_number}
                                        episode_number={episode.episode_number}
                                    />
                                </SwiperSlide>
                            )
                        })
                    }           
                    </Swiper>
                </>
            }
        </>
    )
}

export default SliderSeasons
