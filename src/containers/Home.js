import { Link } from "react-router-dom";

import Header from "../Components/Header/Header";

import "./Home.scss";

import formatPrice from "../helpers/formatPrice";

const Home = (props) => {
  const { isLoading, offers } = props;

  return (
    <div className="home">
      <div className="ready">
        <Header />
        <div className="container">
          <div>
            <p>Prêts à faire du tri dans vos placards ?</p>
            <button>Commencer à vendre</button>
          </div>
        </div>
      </div>
      <div className="offers">
        {isLoading
          ? "Chargement en cours"
          : offers.map((e, i) => (
              <Link to={"/offer/" + e._id}>
                <div className="offer-item" key={i}>
                  <div className="username" key={e._id}>
                    {e.owner.account.username}
                  </div>
                  <img src={e.product_image.secure_url} alt="" />
                  <div className="price">{formatPrice(e.product_price)}</div>
                  <div className="details">
                    {Object.values(e.product_details[0])}
                  </div>
                  <div className="details">
                    {Object.values(e.product_details[1])}
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Home;