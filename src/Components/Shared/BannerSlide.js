import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import CardBanner from "../CardBanner";

SwiperCore.use([Navigation, Autoplay]);

const BannerSlide = (props) => {
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
                overview={data.overview}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BannerSlide;
