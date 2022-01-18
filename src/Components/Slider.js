import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import CardSlide from './CardSlide'
import { Link } from 'react-router-dom'

SwiperCore.use([Navigation, Autoplay]);

const Slider = (props) => {
    return (
        <div className='mt-3'>
            <div className='d-flex justify-content-between'>
                <h3 className='text-light fst-italic'>{props.title}</h3>
                {
                    props.path !== '/trending' ? 
                    <Link to={props.path} className='text-decoration-none mt-2 me-3'>See all</Link> :
                    <></>
                }
            </div>
            <Swiper 
                navigation={true} 
                slidesPerView={2}
                className="mySwiper"
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    '500': {
                        'slidesPerView': 3,
                    },
                    '800': {
                        'slidesPerView': 4,
                    },
                    '1000': {
                        'slidesPerView': 5,
                    },
                    '1200': {
                        'slidesPerView': 6,
                    }
                }}
            >
            {
                props.data.map(data => {
                    return (
                        <SwiperSlide key={data.id}>
                            <CardSlide 
                                id={data.id}
                                media_type={props.media_type || data.media_type}
                                poster_path={data.poster_path}
                                title={data.title || data.name}
                            />
                        </SwiperSlide>
                    )
                })
            }
            </Swiper>
        </div>
    )
}

export default Slider