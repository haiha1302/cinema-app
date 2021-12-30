import { useState, useEffect } from "react"
import BannerSlide from "../Components/BannerSlide/BannerSlide"
import Slider from "../Components/Slider"
import http from '../utils/http'
import Loading from "../Components/Loading"
import Meta from "../Components/Meta"

const Home = () => {
    const [dataTrending, setDataTrending] = useState([])
    const [dataMovies, setDataMovies] = useState([])
    const [dataTVSeries, setDataTVSeries] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        const resData = await Promise.all([
        http('/trending/all/day', {}),
        http('/discover/movie', {
            params: {
            language: 'en-US',
            sort_by: 'popularity.desc',
            include_adult: false,
            include_video: false,
            }
        }),
        http('/discover/tv', {
            language: 'en-US',
            sort_by: 'popularity.desc',
            include_adult: false,
            include_video: false,
        })
        ])

        setDataTrending(resData[0].data.results)
        setDataMovies(resData[1].data.results)
        setDataTVSeries(resData[2].data.results)
    }

    const dataBanner = dataTrending.slice(0, 10)

    const dataAll = [
        {
            title: 'Trending',
            path: '/trending',
            value: dataTrending
        },
        {
            title: 'Movies',
            path: '/movies',
            type: 'movie',
            value: dataMovies
        },
        {
            title: 'TV Series',
            path: '/tvseries',
            type: 'tv',
            value: dataTVSeries
        }
    ]

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    })

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    })

    return (
        <div>
            <Meta title='Cinema App By HL' />
            {
                loading === true ?
                <Loading typeLoad='Plane' position='center' /> :
                <>
                    <BannerSlide data={dataBanner} />
                    {dataAll.map(data => {
                        return (
                            <Slider
                                key={data.title}
                                title={data.title}
                                type={data.type}
                                path={data.path}
                                data={data.value}
                            />
                        )
                    })}
                </>
            }
        </div>
    )
}

export default Home
