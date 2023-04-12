import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ancla from "../../img/login/ancla.png";
import logo from "../../img/logo.png";
import Preloader from "./Preloader";

function Login() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <div className="bg_login">
          <div className="container__login">
            <img src={logo} alt="" className="logo__login" />
            <div className="box_btns__login">
              <Link to="/secret">
                <button>
                  OPTION 1 <img src={ancla} alt="img_ancla" />
                </button>
              </Link>
              <button>
                OPTION 2 <img src={ancla} alt="img_ancla" />
              </button>
              <button>
                OPTION 3 <img src={ancla} alt="img_ancla" />
              </button>
            </div>
            <span>CHOOSE A LOGIN OPTION</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
