import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{ EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/bundle"

const Banner = () => {
    SwiperCore.use([Autoplay, Navigation, Pagination])
    return ( 
            <div className="banner">
               <Swiper
                 slidesPerView={1}
                 navigation
                 pagination={{ type: "progressbar" }}
                 effect="fade"
                 modules={[EffectFade]}
                 autoplay={{ delay: 3000 }}
                >
                <SwiperSlide>
                    <div className="">
                        <img src="https://images.unsplash.com/photo-1679214523482-231359cf68f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="banner" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <img src="https://images.unsplash.com/photo-1681284298614-4a10f165bb37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="banner" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <img src="https://images.unsplash.com/photo-1680430631356-02d24afabc5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDgzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="banner" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full overflow-hidden h-[400px]">
                        <img src="https://images.unsplash.com/photo-1680509146561-a9bbf1629812?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0MHw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="banner" />
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>
         );
}
 
export default Banner;