import { Swiper, SwiperSlide } from "swiper/react";

import { Keyboard, Pagination, Navigation } from "swiper";

export default function LeatestBlogMobile(){
    return(
        <>
        <div className='LeatestBlogMobile__N'>
            <h3>Leatest Blog</h3>
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
            spaceBetween: 10,
          },
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiperBL"
      > 
        <div>
         <div className='ProductsTrendMobile__H'>
            <SwiperSlide>
            <div className='ProductsTrendMobile__H1'>
            <img className='ProductsTrendMobile__H1_Img' src='./img/anhkk1.png'></img>
            <div className='ProductsTrendMobile__H1_Text'>
              <div className='ProductsTrendMobile__H1_Text_Td'>
                <img className='ProductsTrendMobile__H1_Vectorbut' src='./img/Vectorbut.png'></img>
                  <p className='ProductsTrendMobile__H1_Vcb'>SaberAli</p>
                <img className='ProductsTrendMobile__H1_VectorLich' src='./img/VectorLich.png'></img>
                  <p className='ProductsTrendMobile__H1_Vcb'>21 August,2020</p>
              </div>
              <div className='ProductsTrendMobile__H1_Text_TT'>
                <h3 className='ProductsTrendMobile__H1_Text_TTop'>Top esssential Trends in 2021</h3>
                <p className='ProductsTrendMobile__H1_Text_Tmor'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                <a href="" className='ProductsTrendMobile__H1_Text_Trm'>Read More</a>
              </div>
            </div>
          </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='ProductsTrendMobile__H2'>
            <img className='ProductsTrendMobile__H1_Img' src='./img/anhkk2.png'></img>
            <div className='ProductsTrendMobile__H1_Text'>
              <div className='ProductsTrendMobile__H1_Text_Td'>
                <img className='ProductsTrendMobile__H1_Vectorbut' src='./img/Vectorbut.png'></img>
                  <p className='ProductsTrendMobile__H1_Vcb'>SaberAli</p>
                <img className='ProductsTrendMobile__H1_VectorLich' src='./img/VectorLich.png'></img>
                  <p className='ProductsTrendMobile__H1_Vcb'>21 August,2020</p>
              </div>
              <div className='ProductsTrendMobile__H1_Text_TT'>
                <h3 className='ProductsTrendMobile__H1_Text_TTop'>Top esssential Trends in 2021</h3>
                <p className='ProductsTrendMobile__H1_Text_Tmor'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                <a href="" className='ProductsTrendMobile__H1_Text_Trm'>Read More</a>
              </div>
            </div>
          </div>
              </SwiperSlide>   
              <SwiperSlide>
              <div className='ProductsTrendMobile__H3'>
            <img className='ProductsTrendMobile__H1_Img' src='./img/anhkk3.png'></img>
            <div className='ProductsTrendMobile__H1_Text'>
              <div className='ProductsTrendMobile__H1_Text_Td'>
                <img className='ProductsTrendMobile__H1_Vectorbut' src='./img/Vectorbut.png'></img>
                  <p className='ProductsTrendMobile__H1_Vcb'>SaberAli</p>
                <img className='ProductsTrendMobile__H1_VectorLich' src='./img/VectorLich.png'></img>
                  <p className='ProductsTrendMobile__H1_Vcb'>21 August,2020</p>
              </div>
              <div className='ProductsTrendMobile__H1_Text_TT'>
                <h3 className='ProductsTrendMobile__H1_Text_TTop'>Top esssential Trends in 2021</h3>
                <p className='ProductsTrendMobile__H1_Text_Tmor'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                <a href="" className='ProductsTrendMobile__H1_Text_Trm'>Read More</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        </div>
        </div>
      </Swiper>
    </>
    );
}