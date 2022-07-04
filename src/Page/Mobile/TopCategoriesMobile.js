import { Swiper, SwiperSlide } from "swiper/react";

import { Keyboard, Pagination, Navigation } from "swiper";

export default function TopCategoriesMobile(){
    return(
        <>
        <div className='CategoriesMobile__TD'>
            <h3>Top Categories</h3>
        </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
            599: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="TopCategoriesMobile">
         <div className='CategoriesMobile__TB'>
            <SwiperSlide>
                <div className='CategoriesMobile__TBn'>
                <div className='CategoriesMobile__TBv'>
                    <div className='CategoriesMobile__TB_img'>
                        <img className='Mobile__imgtop' src='./img/top3.png'></img>
                        </div>
                    <div className='bnt'><button className='CategoriesMobile__Bnt'>View Shop</button></div>
                    <div className='CategoriesMobile__TBname'>
                    <p className='CategoriesMobile__TBt'>Mini LCW Chair</p>
                    <p className='CategoriesMobile__TBpri'>$56.00</p></div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='CategoriesMobile__TBn'>
                <div className='CategoriesMobile__TBv'>
                    <div className='CategoriesMobile__TB_img'><img className='Mobile__imgtop1' src='./img/top1.png'></img></div>
                    <div className='bnt'><button className='CategoriesMobile__Bnt'>View Shop</button></div>
                    <div className='CategoriesMobile__TBname'>
                    <p className='CategoriesMobile__TBt'>Mini LCW Chair</p>
                    <p className='CategoriesMobile__TBpri'>$56.00</p></div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='CategoriesMobile__TBn'>
                <div className='CategoriesMobile__TBv'>
                    <div className='CategoriesMobile__TB_img'><img className='Mobile__imgtop1' src='./img/top2.png'></img></div>
                    <div className='bnt'><button className='CategoriesMobile__Bnt'>View Shop</button></div>
                    <div className='CategoriesMobile__TBname'>
                    <p className='CategoriesMobile__TBt'>Mini LCW Chair</p>
                    <p className='CategoriesMobile__TBpri'>$56.00</p></div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='CategoriesMobile__TBn'>
                <div className='CategoriesMobile__TBv'>
                    <div className='CategoriesMobile__TB_img'><img className='Mobile__imgtop4' src='./img/top3.png'></img></div>
                    <div className='bnt'><button className='CategoriesMobile__Bnt'>View Shop</button></div>
                    <div className='CategoriesMobile__TBname'>
                    <p className='CategorieMobile__TBt'>Mini LCW Chair</p>
                    <p className='CategoriesMobile__TBpri'>$56.00</p></div>
                </div>
                </div>
            </SwiperSlide>
            </div>
        </div>
      </Swiper>
    </>
    );
}