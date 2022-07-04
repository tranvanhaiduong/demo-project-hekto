import { Swiper, SwiperSlide } from "swiper/react";

import {Pagination} from "swiper";

export default function LeatestProductMobile(){
  return(
      <>
     <div className='LeatestProductMobile__lpts'>
          <h3>Leatest Products</h3>
      </div>
      <div className='LeatestProductMobile__Nlpts'>
          <a href="" className='LeatestProductMobile__Nlpts__NA'>New Arrival</a>
          <a href="" className='LeatestProductMobile__Nlpts__BE'>Best Seller</a>
          <a href="" className='LeatestProductMobile__Nlpts__BE'>Featured</a>
          <a href="" className='LeatestProductMobile__Nlpts__BE'>Special Offer</a>
      </div>
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
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper__LPM"
      >
      <div className='LeatestProduct__Product'>
          <SwiperSlide>
          <div className='Product'>
              <div className='Product__Img'><img className='Product__Craff' src='./img/craff1.png'></img></div>
                  <div className='Product__NSG'>
                  <p className='Product__Name'>Comfort Handy Craft</p>
                  <p className='Product__priceSale'>$42.00</p>
                  <p className='Product__priceGoc'>$65.00</p>
              </div>
              <div className='Product2t'>
                  <div className='Product2icon'>
                    <p className='MobilebuyP'><img src="./img/vectorbye.png"></img></p>
                    <p className='MobiletymP'><img src="./img/vectortym.png"></img></p>
                    <p className='MobilezoomP'><img src="./img/vectorZoom.png"></img></p>
                  </div>
                  <div className='Product2__Mobile_ImgSale'><img className="Product2Img" src='./img/sale.png'></img></div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='Product'>
              <div className='Product__Img'><img className='Product__Craff' src='./img/craff2.png'></img></div>
              <div className='Product__NSG'>
                <p className='Product__Name'>Comfort Handy Craft</p>
                <p className='Product__priceSale'>$42.00</p>
                <p className='Product__priceGoc'>$65.00</p>
              </div>
                <div className='Product2t'>
                  <div className='Product2icon'>
                    <p className='MobilebuyP'><img src="./img/vectorbye.png"></img></p>
                    <p className='MobiletymP'><img src="./img/vectortym.png"></img></p>
                    <p className='MobilezoomP'><img src="./img/vectorZoom.png"></img></p>
                  </div>
                  <div className='Product2__Mobile_ImgSale'><img className="Product2Img" src='./img/sale.png'></img></div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='Product'>
              <div className='Product__Img'><img className='Product__Craff' src='./img/craff3.png'></img></div>
              <div className='Product__NSG'>
                <p className='Product__Name'>Comfort Handy Craft</p>
                <p className='Product__priceSale'>$42.00</p>
                <p className='Product__priceGoc'>$65.00</p>
              </div>
              <div className='Product2t'>
                  <div className='Product2icon'>
                    <p className='MobilebuyP'><img src="./img/vectorbye.png"></img></p>
                    <p className='MobiletymP'><img src="./img/vectortym.png"></img></p>
                    <p className='MobilezoomP'><img src="./img/vectorZoom.png"></img></p>
                  </div>
                  <div className='Product2__Mobile_ImgSale'><img className="Product2Img" src='./img/sale.png'></img></div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='Product'>
                  <div className='Product__Img'><img className='Product__Craff' src='./img/craff4.png'></img></div>
                      <div className='Product__NSG'>
                          <p className='Product__Name'>Comfort Handy Craft</p>
                          <p className='Product__priceSale'>$42.00</p>
                          <p className='Product__priceGoc'>$65.00</p>
                      </div>
              <div className='Product2t'>
                  <div className='Product2icon'>
                    <p className='MobilebuyP'><img src="./img/vectorbye.png"></img></p>
                    <p className='MobiletymP'><img src="./img/vectortym.png"></img></p>
                    <p className='MobilezoomP'><img src="./img/vectorZoom.png"></img></p>
                  </div>
                  <div className='Product2__Mobile_ImgSale'><img className="Product2Img" src='./img/sale.png'></img></div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='Product'>
              <div className='Product__Img'><img className='Product__Craff' src='./img/craff5.png'></img></div>
              <div className='Product__NSG'>
                <p className='Product__Name'>Comfort Handy Craft</p>
                <p className='Product__priceSale'>$42.00</p>
                <p className='Product__priceGoc'>$65.00</p>
              </div>
              <div className='Product2t'>
                  <div className='Product2icon'>
                    <p className='MobilebuyP'><img src="./img/vectorbye.png"></img></p>
                    <p className='MobiletymP'><img src="./img/vectortym.png"></img></p>
                    <p className='MobilezoomP'><img src="./img/vectorZoom.png"></img></p>
                  </div>
                  <div className='Product2__Mobile_ImgSale'><img className="Product2Img" src='./img/sale.png'></img></div>
                </div>
            </div>
            </SwiperSlide>
          <SwiperSlide> 
              <div className='Product'>
              <div className='Product__Img'><img className='Product__Craff' src='./img/craff6.png'></img></div>
              <div className='Product__NSG'>
                <p className='Product__Name'>Comfort Handy Craft</p>
                <p className='Product__priceSale'>$42.00</p>
                <p className='Product__priceGoc'>$65.00</p>
              </div>
              <div className='Product2t'>
                  <div className='Product2icon'>
                    <p className='MobilebuyP'><img src="./img/vectorbye.png"></img></p>
                    <p className='MobiletymP'><img src="./img/vectortym.png"></img></p>
                    <p className='MobilezoomP'><img src="./img/vectorZoom.png"></img></p>
                  </div>
                  <div className='Product2__Mobile_ImgSale'><img className="Product2Img" src='./img/sale.png'></img></div>
                </div>
              </div>
              </SwiperSlide>
          </div>
    </Swiper>
  </>
  );
}