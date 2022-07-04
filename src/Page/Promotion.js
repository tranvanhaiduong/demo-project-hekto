function Promotion(){
    return(
      <div className='promotion'>
        <div className="promotion__TD">
          <div className="promotionT__TD__bg">
          <img className='promotion promotion__light' src='./img/light.png'></img>
          <div className='promotion promotion__bg'>
            <div className='promotion__BNL'>
              <h4 className='promotion__BNL__BF'>Best Furniture For Your Castle....</h4>
              <h4 className='promotion__BNL__NF'>New Furniture Collection Trends in 2020</h4>
              <p className='promotion__BNL__LD'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
            </div>
            <button onClick={""} className='promotion__BNL__SN' type='submit'>Shop Now</button>
          </div>
          <div className="promotion__TD__sofabg">
          <img className='promotion promotion__sofa' src='./img/sofa.png'></img></div>
        </div>
        </div>
      </div>
    );
  }
  export default Promotion;