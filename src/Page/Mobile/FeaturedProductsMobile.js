import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";

function FeaturedProductsMobile(){
    return (
      <>
    <div className='FeaturedProductsMobile'><h1>Featured Products</h1></div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
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
          modules={[Pagination]}
          className="mySwiper"
        >
        <div className='Products'>
        <SwiperSlide >
            <div className='Products__char1'>
              <div className='Products__char1__char1img'>
                <img className='char1img__img' src='./img/char1.png'></img>
                </div>
                <div className='Products__char1back'>
                  <h5 className='Products__char1F'>Cantilever chair</h5>
                  <div className="Products__imgc2"><img src='./img/charc2.png'></img></div>
                  <h5 className='Products__char1ND'>Code - Y523201</h5>
                  <h5 className='Products__char1ND'>$42.00</h5>
                  </div>
                  <div className="Products__icon">
                    <div className='icon'>
                      <p className='buy'><img src="./img/vectorbye.png"></img></p>
                      <p className='tym'><img src="./img/vectortym.png"></img></p>
                      <p className='zoom'><img src="./img/vectorZoom.png"></img></p> 
                    </div>
                    <div className="Products__btn"><button className='Products__btnchar'>View Details</button>
                  </div>
                </div>
              </div>
              </SwiperSlide>
          <SwiperSlide>
            <div className='Products__char2'>
                  <div className='Products__char2__char2img'>
                    <img className='char1img__img2' src='./img/char2.png'></img>
                    </div>
                    <div className='Products__char2back'>
                      <h5 className='Products__char1F'>Cantilever chair</h5>
                      <img src='./img/charc2.png'></img>
                      <h5 className='Products__char1ND'>Code - Y523201</h5>
                      <h5 className='Products__char1ND'>$42.00</h5>
                    </div>
                    <div className="Products__icon">
                      <div className='icon'>
                        <p className='buy'><img src="./img/vectorbye.png"></img></p>
                        <p className='tym'><img src="./img/vectortym.png"></img></p>
                        <p className='zoom'><img src="./img/vectorZoom.png"></img></p> 
                      </div>
                      <div className="Products__btn"><button className='Products__btnchar'>View Details</button>
                    </div>
                  </div>
                </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='Products__char3'>
                  <div className='Products__char__char3img'>
                  <img className='char1img__img' src='./img/char3.png'></img>
                    </div>
                    <div className='Products__char3back'>
                      <h5 className='Products__char1F'>Cantilever chair</h5>
                      <img src='./img/charc2.png'></img>
                      <h5 className='Products__char1ND'>Code - Y523201</h5>
                      <h5 className='Products__char1ND'>$42.00</h5>
                    </div>
                    <div className="Products__icon">
                      <div className='icon'>
                        <p className='buy'><img src="./img/vectorbye.png"></img></p>
                        <p className='tym'><img src="./img/vectortym.png"></img></p>
                        <p className='zoom'><img src="./img/vectorZoom.png"></img></p> 
                      </div>
                      <div className="Products__btn"><button className='Products__btnchar'>View Details</button>
                  </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='Products__char4'>
                  <div className='Products__char__char4img'>
                  <div className="char4img"><img className='img4' src='./img/char4.png'></img></div>
                    </div>
                    <div className='Products__char4back'>
                      <h5 className='Products__char1F'>Cantilever chair</h5>
                      <img src='./img/charc2.png'></img>
                      <h5 className='Products__char1ND'>Code - Y523201</h5>
                      <h5 className='Products__char1ND'>$42.00</h5>
                  </div>
                  <div className="Products__icon">
                    <div className='icon'>
                      <p className='buy'><img src="./img/vectorbye.png"></img></p>
                      <p className='tym'><img src="./img/vectortym.png"></img></p>
                      <p className='zoom'><img src="./img/vectorZoom.png"></img></p> 
                    </div>
                    <div className="Products__btn"><button className='Products__btnchar'>View Details</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
        </Swiper>
      </>
    );
  }
export default FeaturedProductsMobile;