import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import CardBanner from "./CardBanner";
import { getGenres } from '../../utils/apis'

SwiperCore.use([Navigation, Autoplay]);

const BannerSlide = (props) => {
  const [genres, setGenres] = useState()

  useEffect(() => {
    const fetchGenres = () => {
        getGenres()
        .then(
            res => setGenres(res)
        )
        .catch(err => console.log(err))
    }
    fetchGenres()
  }, [])
  
  return (
    <div>
      <Swiper
        navigation={true}
        slidesPerView={1}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
      >
        {props.data.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <CardBanner
                poster={data.poster_path}
                backdrop={data.backdrop_path}
                type={data.media_type}
                id={data.id}
                title={data.title || data.name}
                vote_average={data.vote_average}
                release_date={data.release_date || data.first_air_date}
                overview={data.overview}
                genre_ids={data.genre_ids}
                list_genre={genres}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BannerSlide;
