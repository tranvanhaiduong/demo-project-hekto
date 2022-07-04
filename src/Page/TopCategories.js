function TopCategories(){
    return(
        <div className='TopCategories'>
          <div className='Categories__TD'><h3>Top Categories</h3></div>
          <div className='Categories__TB'>
            <div className='Categories__TBn'>
              <div className='Categories__TBv'>
                <div className='Categories__TB_img'>
                    <img className='imgtop' src='./img/top3.png'></img>
                    </div>
                <div className='bnt'><button className='Categories__Bnt'>View Shop</button></div>
                <div className='Categories__TBname'>
                  <p className='Categories__TBt'>Mini LCW Chair</p>
                  <p className='Categories__TBpri'>$56.00</p></div>
              </div>
            </div>
            <div className='Categories__TBn'>
              <div className='Categories__TBv'>
                <div className='Categories__TB_img'><img className='imgtop1' src='./img/top1.png'></img></div>
                <div className='bnt'><button className='Categories__Bnt'>View Shop</button></div>
                <div className='Categories__TBname'>
                <p className='Categories__TBt'>Mini LCW Chair</p>
                <p className='Categories__TBpri'>$56.00</p></div>
              </div>
            </div>
            <div className='Categories__TBn'>
              <div className='Categories__TBv'>
                <div className='Categories__TB_img'><img className='imgtop1' src='./img/top2.png'></img></div>
                <div className='bnt'><button className='Categories__Bnt'>View Shop</button></div>
                <div className='Categories__TBname'>
                  <p className='Categories__TBt'>Mini LCW Chair</p>
                  <p className='Categories__TBpri'>$56.00</p></div>
              </div>
            </div>
            <div className='Categories__TBn'>
              <div className='Categorie__TBv'>
                <div className='Categories__TB_img'><img className='imgtop4' src='./img/top3.png'></img></div>
                <div className='bnt'><button className='Categories__Bnt'>View Shop</button></div>
                <div className='Categories__TBname'>
                <p className='Categories__TBt'>Mini LCW Chair</p>
                <p className='Categories__TBpri'>$56.00</p></div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default TopCategories;