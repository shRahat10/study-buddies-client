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
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Banner = () => {
    const options = {
        animationData: banner,
        loop: true,
        style: { height: 400 }
    };

    const { View } = useLottie(options);

    const [head1] = useTypewriter({
        words: ['Welcome to Study Buddies'],
        loop: true,
        onLoopDone: () => console.log(`loop completed`)
    })
    const [body1] = useTypewriter({
        words: ['The beautiful journey of today can only begin when we learn to let go of yesterday.'],
        loop: true,
        onLoopDone: () => console.log(`loop completed`)
    })
    const [head2] = useTypewriter({
        words: ['Unlock Your Potential'],
        loop: true,
        onLoopDone: () => console.log(`loop completed`)
    })
    const [body2] = useTypewriter({
        words: ['The only way to do great work is to love what you do.'],
        loop: true,
        onLoopDone: () => console.log(`loop completed`)
    })
    const [head3] = useTypewriter({
        words: ['Discover Your Brilliance'],
        loop: true,
        onLoopDone: () => console.log(`loop completed`)
    })
    const [body3] = useTypewriter({
        words: ['Education is the passport to the future, for tomorrow belongs to those who prepare for it today.'],
        loop: true,
        onLoopDone: () => console.log(`loop completed`)
    })


    return (
        <div className="grid grid-cols-1 md:grid-cols-5 justify-center items-center">
            <div className="col-span-3 order-2 md:order-1">
                <Swiper
                    modules={[Navigation, A11y, Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 10000 }}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide style={{ backgroundImage: `url(${banner1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="bg-gray-900 bg-opacity-50 p-10 rounded h-80 flex flex-col justify-center">
                            <div className='App h-20 md:h-10'>
                                <span className="text-white text-2xl font-bold mb-6">{head1}</span>
                                <Cursor cursorColor='red' />
                            </div>
                            <div className='App h-16'>
                                <span className="text-white text-lg">{body1}</span>
                                <Cursor cursorColor='red' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ backgroundImage: `url(${banner2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="bg-gray-900 bg-opacity-50 p-10 rounded h-80 flex flex-col justify-center">
                            <div className='App h-20 md:h-10'>
                                <span className="text-white text-2xl font-bold mb-6">{head2}</span>
                                <Cursor cursorColor='red' />
                            </div>
                            <div className='App h-16'>
                                <span className="text-white text-lg">{body2}</span>
                                <Cursor cursorColor='red' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ backgroundImage: `url(${banner3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="bg-gray-900 bg-opacity-50 p-10 rounded h-80 flex flex-col justify-center">
                            <div className='App h-20 md:h-10'>
                                <span className="text-white text-2xl font-bold mb-6">{head3}</span>
                                <Cursor cursorColor='red' />
                            </div>
                            <div className='App h-16'>
                                <span className="text-white text-lg">{body3}</span>
                                <Cursor cursorColor='red' />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="col-span-2 order-1 md:order-2">{View}</div>
        </div>
    );
};

export default Banner;