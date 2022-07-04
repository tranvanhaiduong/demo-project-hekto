import './App.css'
import './CSs/swiper.css'
import "swiper/css/pagination";
import './CSs/Preamble.css'
import './CSs/Promotion.css'
import './CSs/FeaturedProducts.css'
import './CSs/Mobile/FeaturedProductsMobile.css'
import './CSs/LeatestProducts.css'
import './CSs/Mobile/LeatestProductMobile.css'
import './CSs/ShopexOffer.css'
import './CSs/UniqueFeatures.css'
import './CSs/TrendingProducts.css'
import './CSs/Mobile/TrendingProductsMobile.css'
import './CSs/DiscountItem.css'
import './CSs/TopCategories.css'
import './CSs/Mobile/TopCategoriesMobile.css'
import './CSs/Getup.css'
import './CSs/LeatestBlog.css'
import './CSs/Mobile/LeatestBlogMobile.css'
import './CSs/Final.css'
import './CSs/Imge1147.css'
import './CSs/Mobile/ShopexOfferMobile.css'

import Preamble from "./Page/Preamble";
import Promotion from "./Page/Promotion";
import FeaturedProducts from './Page/FeaturedProducts';
import LeatestProduct from './Page/LeatestProducts';
import ShopexOffer from './Page/ShopexOffer';
import UniqueFeature from './Page/UniqueFeatures';
import TrendingProducts from './Page/TrendingProducts';
import DiscountItem from './Page/DiscountItem';
import TopCategories from './Page/TopCategories';
import Getup from './Page/Getup';
import LBlog from './Page/LeatestBlog';
import Final from './Page/Final'
import FeaturedProductsMobile from './Page/Mobile/FeaturedProductsMobile'
import LeatestProductMobile from './Page/Mobile/LeatestProductMobile'
import TrendingProductsMobile from './Page/Mobile/TrendingProductsMobile'
import TopCategoriesMobile from './Page/Mobile/TopCategoriesMobile'
import Imge1147 from './Page/Imge1147'
import LeatestBlogMobile from './Page/Mobile/LeatestBlogMobile'
import ShopexOfferMobile from './Page/Mobile/ShopexOfferMobile'

function App() {
  return (
    <>
      <Preamble/>
      <Promotion/>
      <FeaturedProducts/>
      <FeaturedProductsMobile/>
      <LeatestProduct/>
      <LeatestProductMobile/>
      <ShopexOffer/>
      <ShopexOfferMobile/>
      <UniqueFeature/>
      <TrendingProducts/>
      <TrendingProductsMobile/>
      <DiscountItem/>
      <TopCategories/>
      <TopCategoriesMobile/>
      <Getup/>
      <Imge1147/>
      <LBlog/>
      <LeatestBlogMobile/>
      <Final/>
    </>
  );
}

export default App;
