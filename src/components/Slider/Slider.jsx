import { Swiper, SwiperSlide} from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css'
import hero1 from '../../assets/images/hero1.jpg'
import hero2 from '../../assets/images/hero2.jpg'
import hero3 from '../../assets/images/hero3.jpg'
function Slider(){
    return(
        <section id='hero'>
            <Swiper
            effect={'fade'}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            loop={true}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper w-full h-screen overflow-hidden relative md:text-center">
                <SwiperSlide>
                    <div className='text-white absolute top-1/2 left-1/2 translate-[-50%] w-3/4 z-10'>
                        <h2 className='text-4xl font-bold mb-5'>We are professional</h2>
                        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button className='btn'>Get Started</button>
                    </div>
                    <img src={hero1} className='h-full w-full object-cover' />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-white absolute top-1/2 left-1/2 translate-[-50%] w-3/4 z-10'>
                        <h2 className='text-4xl font-bold mb-5'>At vero eos et accusamus</h2>
                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.</p>
                        <button className='btn'>Get Started</button>
                    </div>
                    <img src={hero2} className='h-full w-full object-cover' />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-white absolute top-1/2 left-1/2 translate-[-50%] w-3/4 z-10'>
                        <h2 className='text-4xl font-bold mb-5'>Temporibus autem quibusdam</h2>
                        <p>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.</p>
                        <button className='btn'>Get Started</button>
                    </div>
                    <img src={hero3} className='h-full w-full object-cover' />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Slider