import banner from "../../assets/lottie/banner.json"
import { useLottie } from "lottie-react";
import { Navigation, A11y, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import banner1 from "../../assets/images/banner1.jpg"
import banner2 from "../../assets/images/banner2.jpg"
import banner3 from "../../assets/images/banner3.jpg"

const Banner = () => {
    const options = {
        animationData: banner,
        loop: true,
        style: { height: 400 }
    };

    const { View } = useLottie(options);

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 justify-center items-center">
            <div className="col-span-3 order-2 md:order-1">
                <Swiper
                    modules={[Navigation, A11y, Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide style={{ backgroundImage: `url(${banner1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="bg-gray-900 bg-opacity-50 p-10 rounded h-80 flex flex-col justify-center">
                            <h2 className="text-white text-2xl font-bold mb-6">Welcome to Study Buddies</h2>
                            <p className="text-white text-lg">The beautiful journey of today can only begin when we learn to let go of yesterday.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ backgroundImage: `url(${banner2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="bg-gray-900 bg-opacity-50 p-10 rounded h-80 flex flex-col justify-center">
                            <h2 className="text-white text-2xl font-bold mb-6">Unlock Your Potential</h2>
                            <p className="text-white text-lg">The only way to do great work is to love what you do.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ backgroundImage: `url(${banner3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="bg-gray-900 bg-opacity-50 p-10 rounded h-80 flex flex-col justify-center">
                            <h2 className="text-white text-2xl font-bold mb-6">Discover Your Brilliance</h2>
                            <p className="text-white text-lg">Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="col-span-2 order-1 md:order-2">{View}</div>
        </div>
    );
};

export default Banner;