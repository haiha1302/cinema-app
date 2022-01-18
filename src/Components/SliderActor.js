import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { poster300, posterCastNotAvailable } from '../utils/contants'

SwiperCore.use([Navigation, Autoplay]);

const SliderActor = props => {
    return (
        <div>
            <Swiper 
                navigation={true} 
                slidesPerView={2}
                className="mySwiper"
                loop={true}
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
                        'slidesPerView': 10,
                    }
                }}
            >
            {
                props.casts.map(cast => {
                    return (
                        <SwiperSlide key={cast.cast_id}>
                            <img 
                                src={cast.profile_path ? `${poster300}/${cast.profile_path}` : posterCastNotAvailable }
                                alt='img_actor'
                                className='w-100 px-2 rounded'
                            />
                            <p>{cast.name}</p>
                        </SwiperSlide>
                    )
                })
            }
            </Swiper>
        </div>
    )
}

export default SliderActor
