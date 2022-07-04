import { Swiper, SwiperSlide } from "swiper/react";

import {  Pagination} from "swiper";

export default function ShopexOfferMobile(){
    return(
        <>
        <div className='ShopexOfferMobile__D'>
            <h1>What Shopex Offer!</h1>
          </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          599: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[ Pagination]}
        className="mySwiper"
      >
        <div className="TopCategoriesMobile">
         <div className='CategoriesMobile__TB'>
            <SwiperSlide>
            <div className='ShopexOfferMobile__Xe1'>
              <img src='./img/shopex.png'></img>
                <h3 className='ShopexOfferMobile__TD'>24/7 Support</h3>
                <p className='ShopexOfferMobile__TDD'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='ShopexOfferMobile__Xe'>
              <img src='./img/shopex1.png'></img>
              <h3 className='ShopexOfferMobile__TD'>24/7 Support</h3>
              <p className='ShopexOfferMobile__TDD'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='ShopexOfferMobile__Xe'>
              <img src='./img/shopex2.png'></img>
              <h3 className='ShopexOfferMobile__TD'>24/7 Support</h3>
              <p className='ShopexOfferMobile__TDD'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='ShopexOfferMobile__Xe'>
              <img src='./img/shopex3.png'></img>
              <h3 className='ShopexOfferMobile__TD'>24/7 Support</h3>
              <p className='ShopexOfferMobile__TDD'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            </SwiperSlide>
            </div>
        </div>
      </Swiper>
    </>
    );
}