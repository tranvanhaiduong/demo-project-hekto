function UniqueFeature(){
    return(
        <div className="UniqueFeatures">
          <div className='UniqueFeatures__TD'>
          <div className='UniqueFeatures__Img'>
            <img className="UniqueFeatures__UFImg" src='./img/sofauni.png'></img>
          </div>
          <div className='UniqueFeatures__UniqueT'>
            <h3 className='UniqueFeatures__UniqueTUF'>Unique Features Of leatest & Trending Poducts</h3>
            <p className='fa fa-circle cle1'><h className='UniqueFeatures__UniqueTA'>All frames constructed with hardwood solids and laminates</h></p>
            <p className='fa fa-circle cle2'><h className='UniqueFeatures__UniqueTA'>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</h></p>
            <p className='fa fa-circle cle3'><h className='UniqueFeatures__UniqueTA'>Arms, backs and seats are structurally reinforced</h></p>
            <div className='UniqueFeatures__UniqueB'>
              <button onClick={""} type='submit' className='UniqueFeatures__btn'>Add To Cart</button>
                <div className='UniqueFeatures__BT'>
                  <h5 className='UniqueFeatures__BTh'>B&B Italian Sofa</h5>
                  <p className='UniqueFeatures__BTp'>$32.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}
export default UniqueFeature;