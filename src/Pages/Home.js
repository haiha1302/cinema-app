import { useState, useEffect } from "react"
import BannerSlide from "../Components/BannerSlide/BannerSlide"
import Slider from "../Components/Slider"
import http from '../utils/http'
import Loading from "../Components/Loading"
import Meta from "../Components/Meta"
import { getDataHomepage } from "../utils/apis"

const Home = () => {
    const [dataTrending, setDataTrending] = useState([])
    const [dataMovies, setDataMovies] = useState([])
    const [dataTVSeries, setDataTVSeries] = useState([])
    const [loading, setLoading] = useState(true)

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
            media_type: 'movie',
            value: dataMovies
        },
        {
            title: 'TV Series',
            path: '/tvseries',
            media_type: 'tv',
            value: dataTVSeries
        }
    ]

    useEffect(() => {
        const fetchData = () => {
            getDataHomepage()
            .then(res => {
                setDataTrending(res[0].data.results)
                setDataMovies(res[1].data.results)
                setDataTVSeries(res[2].data.results)
            })
            .catch(err => console.log(err))
        }
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
            <Meta title='Cinema App By HL'/>
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
                                media_type={data.media_type}
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
