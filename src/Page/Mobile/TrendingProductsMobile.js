import { Swiper, SwiperSlide } from "swiper/react";

import { Keyboard, Pagination, Navigation } from "swiper";

export default function TrendingProductsMobile(){
    return(
        <>
        <div className='TrendingProductsMobile__TD'>
            <h3>Trending Products</h3>
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
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper__TrP"
      >
         <div className='ProductsTrendMobile'>
            <SwiperSlide>
            <div className='ProductsTrendMobile__1'>
              <div className='ProductsTrendMobile1__Img'>
                <img className="ProductsTrendMobile__Trend1Img" src='./img/productsTrend1.png'></img>
              </div>
              <div className='ProductsTrendMobile1__Nd'>
                <p className='ProductsTrendMobile1__Nd__prTD'>Cantilever chair</p>
                <div className='ProductsTrendMobile1__Nd__prT'>
                <p className='ProductsTrendMobile1__Nd__prTr'>$26.00</p>
                <p className='ProductsTrendMobile1__Nd__prTg'>$42.00</p>
                </div>
              </div>
            </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='ProductsTrendMobile__1'>
              <div className='ProductsTrendMobile1__Img'>
                <img className="ProductsTrendMobile__Trend1Img" src='./img/productsTrend2.png'></img>
              </div>
              <div className='ProductsTrendMobile1__Nd'>
                <p className='ProductsTrendMobile1__Nd__prTD'>Cantilever chair</p>
                <div className='ProductsTrendMobile1__Nd__prT'>
                <p className='ProductsTrendMobile1__Nd__prTr'>$26.00</p>
                <p className='ProductsTrendMobile1__Nd__prTg'>$42.00</p>
                </div>
              </div>
            </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='ProductsTrendMobile__1'>
              <div className='ProductsTrendMobile1__Img'>
                <img className="ProductsTrendMobile__Trend1Img"src='./img/productsTrend3.png'></img>
              </div>
              <div className='ProductsTrendMobile1__Nd'>
                <p className='ProductsTrendMobile1__Nd__prTD'>Cantilever chair</p>
                <div className='ProductsTrendMobile1__Nd__prT'>
                <p className='ProductsTrendMobile1__Nd__prTr'>$26.00</p>
                <p className='ProductsTrendMobile1__Nd__prTg'>$42.00</p>
                </div>
              </div>
            </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='ProductsTrendMobile__1'>
                  <div className='ProductsTrendMobile1__Img'>
                    <img className="ProductsTrendMobile1__Trend4Img"src='./img/productsTrend4.png'></img>
                </div>
                <div className='ProductsTrendMobile1__Nd'>
                  <p className='ProductsTrendMobile1__Nd__prTD'>Cantilever chair</p>
                  <div className='ProductsTrendMobile1__Nd__prT'>
                  <p className='ProductsTrendMobile1__Nd__prTr'>$26.00</p>
                  <p className='ProductsTrendMobile1__Nd__prTg'>$42.00</p>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='ProductsTrendMobile__4'>
              <div className='ProductsTrendMobile4__Nd'>
                <div className='ProductsTrendMobile4__prC'>
                  <p className='ProductsTrendMobile4__prCO'>23% off in all products</p>
                  <p className='ProductsTrendMobile4__prCS'>Shop Now</p>
                </div>
                <div className='productsTrendMobile4__Img'>
                  <img className="productsTrendMobile4__Trend4Img" src='./img/productsTrend5.png'></img>
                </div>
              </div>
            </div>
              </SwiperSlide>
            <SwiperSlide> 
              <div className='ProductsTrendMobile__5'>
                <div className='ProductsTrendMobile5__Nd'>
                  <div className='ProductsTrendMobile5__prC5'>
                    <p className='ProductsTrendMobile5__prCO5'>23% off in all products</p>
                    <p className='ProductsTrendMobile5__prCS5'>View Collection</p>
                  </div>
                  <div className='ProductsTrendMobile5__Img'>
                    <img className="ProductsTrendMobile5__Trend5Img" src='./img/productsTrend6.png'></img>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='ProductsTrendMobile__7'>
                <div className='ProductsTrendMobile7__ND'>
                  <div className='ProductsTrendMobile7__prC71'>
                    <div className='ProductsTrendMobile7__prCO71'>
                      <img src='./img/productsTrend7-1.png'></img>
                    </div>
                    <div className='ProductsTrendMobile7__prCS71'>
                    <h3>Executive Seat chair</h3>
                      <p className='ProductsTrendMobile7__prCS71S'>$32.00</p>
                    </div>
                  </div>
                  <div className='ProductsTrendMobile7__prC72'>
                    <div className='ProductsTrendMobile7__prCO71'>
                      <img src='./img/productsTrend7-1.png'></img>
                    </div>
                    <div className='ProductsTrendMobile7__prCS71'>
                    <h3>Executive Seat chair</h3>
                      <p className='ProductsTrendMobile7__prCS71S'>$32.00</p>
                    </div>
                  </div>
                  <div className='ProductsTrendMobile7__prC73'>
                    <div className='ProductsTrendMobile7__prCO71'>
                      <img src='./img/productsTrend7-1.png'></img>
                    </div>
                    <div className='ProductsTrendMobile7__prCS71'>
                      <h3>Executive Seat chair</h3>
                      <p className='ProductsTrendMobile7__prCS71S'>$32.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            </div>
      </Swiper>
    </>
    );
}