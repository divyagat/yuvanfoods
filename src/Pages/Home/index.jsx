import ProductItem from "../../Components/ProductItem";
import banner1 from "../../assets/images/banner1.jpg";
import { CiMail } from "react-icons/ci";
import banner2 from "../../assets/images/banner2.jpg"
import HomeBanner from "../../Components/HomeBanner";
import HomeCat from "../../Components/HomeCat";
function Home() {

  return (
    <>
      <HomeBanner />
      <HomeCat />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner mb-5">
                <img src={banner1} alt="Dry Petha" className="cursor w-100" />
              </div>
              <div className="banner">
                <img src={banner2} alt="Cake" className="cursor w-100" />
              </div>
            </div>


            <div className="col-md-9">
              <ProductItem />
            </div>

          </div>
        </div>
      </section>
      <section className="newsLetterSection my-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">$20 discount for your first order</p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light">Join our email subcription <br /> now to get updates on promotions and coupons.</p>
              <form action="">
                <CiMail />
                <input type="text" placeholder="Your Email Address"/>
                <button>Subcription</button>
              </form>
            </div>
            <div className="col-md-6">

            </div>
          </div>
        </div>
      </section>

     

    </>
  );
}

export default Home;
