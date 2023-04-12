import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../img/logo.png";
import ModalStats from "./Modals/ModalStats";
import hat from "../img/hat.png"
import level from "../img/level.png"
import moustache from "../img/moustache.png"

function Layout() {
  const [mStats, setmStats] = useState(false)
  const [abrir, setAbrir] = useState(false);
  const [slistAssets,setSlistAssets] =useState(false)
  const [slistSeason,setSlistSeason] =useState(false)
  
  return (
    <>
      <header style={{ zIndex: 999 }}>
        <div className="container__layout_img">
          <img src={Logo} alt="logo ndf" className="layout__logo" />
        </div>

        <section
          className={`${
            abrir === true
              ? "container__menu__layout abierto"
              : "container__menu__layout"
          }`
          
          }
          
        >
<div className="bg_menuBurger" onClick={()=> setAbrir(!abrir)}></div>
        <div className="menu_burger_layout">
           {/* MENU BAR */}
           <ul className="container__menu__layout__list listAntiguo"
            
            >
              <li onClick={()=>setAbrir(!abrir)}>
                <Link
                  to="/prod"
                  className="container__menu__layout__list__link button"
                >
                  Prod
                </Link>
              </li>
  
              {/* <li>
                <Link
                  to="/blend"
                  className="container__menu__layout__list__link button"
                >
                  Blend
                </Link>
              </li>
              <li>
                <Link
                  to="/prod"
                  className="container__menu__layout__list__link button"
                >
                  Prod
                </Link>
              </li> */}
  
              <li>
              <p className="container__menu__layout__list__link button" id="btn__sublist-season" onClick={()=>setSlistSeason(!slistSeason)}>season</p>
              {/* SUBLISTA DE SEASON */}
                <ul className="sublista__layout" style={!slistSeason ? {display:"none"} : {display:"block"}}>
                  <li onClick={()=>setAbrir(!abrir)}><Link to="/stats" className="button__sublista_layout"> stats </Link></li>
                  <li onClick={()=>setAbrir(!abrir)}><Link to="/season" className="button__sublista_layout"> Season </Link></li>
                  <li onClick={()=>setAbrir(!abrir)}><Link to="/gangs" className="button__sublista_layout"> gangs </Link></li>
                  <li onClick={()=>setAbrir(!abrir)}><Link to="/battle" className="button__sublista_layout"> battle </Link></li>
                </ul>
              </li>
              
              <li>
              <p className="container__menu__layout__list__link button" id="btn__sublist-assets" onClick={()=>setSlistAssets(!slistAssets)}>assets</p>
              {/* SUBLISTA DE ASSETS */}
                <ul className="sublista__layout" style={!slistAssets ? {display:"none"} : {display:"block"} }>
                  <li onClick={()=>setAbrir(!abrir)}><Link to="/wallet" className="button__sublista_layout"> wallet </Link></li>
                  <li onClick={()=>setAbrir(!abrir)}><Link to="/assets" className="button__sublista_layout"> game items </Link></li>
                  <li onClick={()=>setAbrir(!abrir)}><Link to="/blend" className="button__sublista_layout"> blend </Link></li>
                </ul>
              </li>
              
            </ul>
          {/* <-----------------------------------------------------------> */}
  
            <ul className="container__menu__layout__list menu-horizontal">
              {/* producc */}
              <li>
                <Link
                  to="/prod"
                  className="container__menu__layout__list__link button"
                >
                  Prod
                </Link>
              </li>
  
              {/* season */}
              <li>
                <Link
                  to=""
                  className="container__menu__layout__list__link button"
                >
                  Season
                </Link>
  
                <ul className="menu-vertical">
                  <li>
                    <Link
                      to="/stats"
                      className="container__menu__layout__list__link button"
                    >
                      STATS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/season"
                      className="container__menu__layout__list__link button"
                    >
                      DEAL
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gangs"
                      className="container__menu__layout__list__link button"
                    >
                      GANGS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/battle"
                      className="container__menu__layout__list__link button"
                    >
                      BATTLE
                    </Link>
                  </li>
                </ul>
              </li>
  
  
  
              {/* assets */}
              <li>
                <Link
                  to=""
                  className="container__menu__layout__list__link button"
                >
                  Assets
                </Link>
  
                <ul className="menu-vertical">
                  <li>
                    <Link
                      to="/wallet"
                      className="container__menu__layout__list__link button"
                    >
                      wallet
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/assets"
                      className="container__menu__layout__list__link button"
                    >
                      game items
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blend"
                      className="container__menu__layout__list__link button"
                    >
                      blend
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
  
            <ul className="layout__options">
              <li onClick={()=>setAbrir(!abrir)}>
                <Link to="/profile" className="layout__options__link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="button__icono"
                  >
                    <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM8.715 8c1.151 0 2 .849 2 2s-.849 2-2 2-2-.849-2-2 .848-2 2-2zm3.715 8H5v-.465c0-1.373 1.676-2.785 3.715-2.785s3.715 1.412 3.715 2.785V16zM19 15h-4v-2h4v2zm0-4h-5V9h5v2z" />
                  </svg>
                </Link>
              </li>
              <li onClick={()=>{
                setAbrir(!abrir)}
              
              }>
                <Link to="/CoffeShop" className="layout__options__link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="button__icono"
                  >
                    <path d="M6 18a6.06 6.06 0 0 0 5.17-6 7.62 7.62 0 0 1 6.52-7.51l2.59-.37c-.07-.08-.13-.16-.21-.24-3.26-3.26-9.52-2.28-14 2.18C2.28 9.9 1 15 2.76 18.46z"></path>
                    <path d="M12.73 12a7.63 7.63 0 0 1-6.51 7.52l-2.46.35.15.17c3.26 3.26 9.52 2.29 14-2.17C21.68 14.11 23 9 21.25 5.59l-3.34.48A6.05 6.05 0 0 0 12.73 12z"></path>
                  </svg>
                </Link>
              </li>
  
              {/* STATS */}
              <li className="stats__hover" onClick={()=>{
                setAbrir(!abrir)
                
              }}>
                <Link
                  to=""
                  className="layout__options__link svg_statis"
                  
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    fill="#FFF"
                    className="button__icono"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.93 9H13V4.07c3.61.45 6.48 3.32 6.93 6.93zM4 12c0-4.07 3.06-7.44 7-7.93v15.86c-3.94-.49-7-3.86-7-7.93zm9 7.93V13h6.93A8.002 8.002 0 0 1 13 19.93z" />
                  </svg>
  
                  {/* modal stats */}
                  <div className="modal__statis" style={{ flexDirection:"column", justifyContent:"space-around"}}>
                      <h1 style={{color:"white", fontWeight:"bold"}}>STATS</h1>
                      
                      <div style={{display:"flex", width:"100%", justifyContent:"space-around"}}>
  
                        <div className="box__Statis">
                          <div>
                            <img src={hat} alt="" />
                            <h4>RESPECT</h4>
                          </div>
                          <p>170  <span>RECEIVED</span>  </p>
                        </div>
  
                        <div className="box__Statis">
                          <div>
                            <img src={level} alt="" />
                            <h4>LEVEL</h4>
                          </div>
                          <p>20 <span>280/2,500 XP</span>  </p>
                        </div>
                      </div>
  
                      <div style={{display:"flex", width:"100%", justifyContent:"space-around"}}>
                        <div className="box__Statis">
                            <div>
                              <img src={moustache} alt="" />
                              <h4>$PB0</h4>
                            </div>
                            <p>6,550  <span>EARNED</span>  </p>
                        </div>
                        <div className="box__Statis">
                            <div>
                              
                              <h4>SEASON POINTS</h4>
                            </div>
                            <p>340,222  <span>IMPSUN</span>  </p>
  
                        </div>
                      </div>
  
                      <div style={{display:"flex", width:"100%", justifyContent:"space-around"}}>
                        <div className="box__Statis">
                            <div>
                              
                              <h4>OTHER STAT</h4>
                            </div>
                            <p>000  <span>L IMPSUN</span>  </p>
                        </div>
                        
                      </div>
                  </div>
  
                </Link>
              </li>
  
              <li 
              className="stats__modal"
              onClick={()=>{
                setAbrir(!abrir)
                setmStats(!mStats)
              }}>
                <Link
                  to=""
                  className="layout__options__link svg_statis"
                  
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    fill="#FFF"
                    className="button__icono"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.93 9H13V4.07c3.61.45 6.48 3.32 6.93 6.93zM4 12c0-4.07 3.06-7.44 7-7.93v15.86c-3.94-.49-7-3.86-7-7.93zm9 7.93V13h6.93A8.002 8.002 0 0 1 13 19.93z" />
                  </svg>
  
                  {/* modal stats */}
                  <div className="modal__statis" style={{ flexDirection:"column", justifyContent:"space-around"}}>
                      <h1 style={{color:"white", fontWeight:"bold"}}>STATS</h1>
                      
                      <div style={{display:"flex", width:"100%", justifyContent:"space-around"}}>
  
                        <div className="box__Statis">
                          <div>
                            <img src={hat} alt="" />
                            <h4>RESPECT</h4>
                          </div>
                          <p>170  <span>RECEIVED</span>  </p>
                        </div>
  
                        <div className="box__Statis">
                          <div>
                            <img src={level} alt="" />
                            <h4>LEVEL</h4>
                          </div>
                          <p>20 <span>280/2,500 XP</span>  </p>
                        </div>
                      </div>
  
                      <div style={{display:"flex", width:"100%", justifyContent:"space-around"}}>
                        <div className="box__Statis">
                            <div>
                              <img src={moustache} alt="" />
                              <h4>$PB0</h4>
                            </div>
                            <p>6,550  <span>EARNED</span>  </p>
                        </div>
                        <div className="box__Statis">
                            <div>
                              
                              <h4>SEASON POINTS</h4>
                            </div>
                            <p>340,222  <span>IMPSUN</span>  </p>
  
                        </div>
                      </div>
  
                      <div style={{display:"flex", width:"100%", justifyContent:"space-around"}}>
                        <div className="box__Statis">
                            <div>
                              
                              <h4>OTHER STAT</h4>
                            </div>
                            <p>000  <span>L IMPSUN</span>  </p>
                        </div>
                        
                      </div>
                  </div>
  
                </Link>
              </li>
  
  
  
              <li>
                <Link to="" className="layout__options__link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="button__icono"
                  >
                    <path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z" />
                    <path d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="" className="layout__options__link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="button__icono"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                  </svg>
                </Link>
              </li>
              <li className="layout__options_btn-logout">
                <Link to="/" className="button ">
                  Logout{" "}
                </Link>
              </li>
            </ul>
  
            <button>
              <svg
                className="icono_x"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                onClick={() => setAbrir(!abrir)}
              >
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
              </svg>
            </button>
        </div>

        </section>

        <svg
          className="icono_bar"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          onClick={() => setAbrir(!abrir)}
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
        
      </header>
      {mStats && <ModalStats state={mStats} setState={setmStats}/>}
      <Outlet />
    </>
  );
}

export default Layout;
