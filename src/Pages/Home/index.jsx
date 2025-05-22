import ProductItem from "../../Components/ProductItem";
import banner1 from "../../assets/images/banner1.jpg";
import HomeBanner from "../../Components/HomeBanner";
function Home() {

  return (
    <>
    <HomeBanner />
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img src={banner1} alt="Dry Petha" className="cursor w-100" />
              </div>
              <div className="banner">
                <img src={banner1} alt="Dry Petha" className="cursor w-100" />
              </div>
            </div>


            <div className="col-md-9">
              <ProductItem />
            </div>


          </div>
        </div>
      </section>



    </>
  );
}

export default Home;
