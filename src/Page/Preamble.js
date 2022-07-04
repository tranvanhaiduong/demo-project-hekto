function Preamble(){
    return(
      <div className='Preamble'>
      <div className="Preamble_nar_On">
        <div className="mobile_circle"><i class='far fa-user-circle'></i></div>
        <div className="tablet_circle"><i class='far fa-user-circle'></i> mhhasanul@gmail.com</div>
        <div className='Preamble on'>
          <a href="" className='Preamble on gmail'>
            <i class="fal L fa-light fa-envelope"></i>mhhasanul@gmail.com</a>
          <a href="" className='Preamble on phone'>
            <i class="fal L fa-duotone fa-phone-volume"></i>(12345)67890</a>
          <a href="" className='Preamble on Egl'>English
            <i class="fal R fa-solid fa-angle-down"></i></a>
          <a href="" className='Preamble on USD'>USD 
            <i class="fal R fa-solid fa-angle-down"></i></a>
          <a href="" className='Preamble on Lg'>Login 
            <i class="fal R fa-light fa-user"></i></a>
          <a href="" className='Preamble on Wl'>Wisshlist 
            <i class="fal R fa-light fa-heart"></i></a>
          <a href="" className='Preamble on shop'>
            <i class="fal R fa-light fa-cart-plus"></i></a>
        </div>
      </div>
      <div className="Preamble_nar_Off">
        <div className='Preamble Off'>
          <div className="mobile_justify"><i class='fas fa-align-justify'></i></div>
          <div>
            <img class="Hekto" src='./img/Hekto.jpg'></img>
            <a href="" className="Preamble Off home ">Home
              <i class="fal C fa-solid fa-angle-down"></i></a>
            <a href="" className="Preamble Off AF">Pages</a>
            <a href="" className="Preamble Off AF">Products</a>
            <a href="" className="Preamble Off AF">Blog</a>
            <a href="" className="Preamble Off AF">Shop</a>
            <a href="" className="Preamble Off AF">Contact</a>
          </div>
          <div className="Preamble_nar_Off_R">
            <input className="Preamble Off IP"></input>
            <button onClick={""} className='Off-btn' type="submit"><i class="fa fa-search"></i></button>
          </div>
        </div>
      </div>
    </div>
      );
}

export default Preamble;