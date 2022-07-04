function DiscountItem(){
    return(
        <div className='DiscountItem'>
            <div className='DiscountItem__TD'>
              <h3 className='DiscountItem__TDDI'>Discount Item</h3> 
              <div className='DiscountItem__TC'>
                <p className='DiscountItem__TDWc'>Wood Chair</p>
                <p className='fa fa-circle PFc'></p>
                <p className='DiscountItem__TDPc'>Plastic Chair</p>
                <p className='DiscountItem__TDSc'>Sofa Colletion</p>
              </div>
            </div>
            <div className='DiscountItem__N'>
              <div className='DiscountItem__Nd'>
                <p className='DiscountItem__NdTd'>20% Discount Of All Products</p>
                <p className='DiscountItem__NdT2'>Eams Sofa Compact</p>
                <p className='DiscountItem__NdT3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                <div className='DiscountItem__NdT4'>
                  <p className='fa fa-check DiscountItem__NdT4'><h className='NdT5'>Material expose like metals</h></p>
                  <p className='fa fa-check DiscountItem__NdT41'><h className='NdT5'>Clear lines and geomatric figures</h></p>
                  <p className='fa fa-check DiscountItem__NdT4'><h className='NdT5'>Simple neutral colours.</h></p>
                  <p className='fa fa-check DiscountItem__NdT42'><h className='NdT5'>Material expose like metals</h></p>
                </div>
                <button className='DiscountItem__Btn'>Shop Now</button>
              </div>
              <div className='DiscountItem__P'>
                <img className="imgItem" src='./img/DiscountSofa.png'></img>
              </div>
            </div>
          </div>
    );
}
export default DiscountItem;