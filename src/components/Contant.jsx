import React from "react";
import logo from "./assets/logo.jpg";



export const Contant = () => {
    return (
      <div className="contant">
        {/* Simple and fast URL shortener! ShortURL allows to shorten long links from
        Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs
        and sites. Just paste the long URL and click the Shorten URL button. On
        the next page, copy the shortened URL and share it on sites, chat and
        emails. */}
        <div class="hero_area">
          <section class="slider_section ">
            <div id="customCarousel1" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="container ">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="detail-box">
                          <h1>
                            Fast & Secure & Short <br />
                            Web URL
                          </h1>
                          <p>
                            Simple and fast URL shortener! ShortURL allows to
                            shorten long links from Instagram, Facebook, YouTube,
                            Twitter, Linked In, WhatsApp, TikTok, blogs and sites.{" "}
                          </p>
                          <div class="btn-box">
                            <a href="/login" class="btn-1">
                              Login
                            </a>
                            <a href="#contact" class="btn-2">
                              Contact Us
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="row">
                          <div class=" col-lg-10 mx-auto">
                            <div class="img-box">
                              <img src={logo} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              yy
            </div>
          </section>
        </div>
  
        <section id="contact" class="info_section layout_padding2">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <div class="info_contact">
                  <h4>Address</h4>
                  <div class="contact_link_box">
                    <a href="https://goo.gl/maps/imTMixvrkLSXq54g9">
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <span>Jordan - Irbid</span>
                    </a>
                    <a href="">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                      <span>Call +(962) 787 222 787</span>
                    </a>
                    <a href="">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                      <span>info@yalopi.com</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="info_detail">
                  <h4>Info</h4>
                  <p>
                  Just paste the long URL and click the Shorten URL button. On
                  the next page, copy the shortened URL and share it on sites, chat and
                  emails.
                  </p>
                </div>
              </div>
              <div class="col-md-3 mb-0">
                <h4>Subscribe</h4>
                <form action="#">
                  <input type="text" placeholder="Enter email" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
              <div class="col-md-3">
                <div class="info_detail">
                  <h4>Note</h4>
                  <p>
                    After your email to Subscribe we will recive email to confirm your
                    account, please check your email.
  
                    login
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <footer class="footer_section">
          <div class="container">
            {/* space tage in html is */}
  
            <p>Copyright © 2022 | Powered By &nbsp;
              <a href="https://alrefa3ee.studio/">Alrefa3ee.studio</a>
            </p>
          </div>
        </footer>
      </div>
    );
  };

export default Contant;

    // Path: firstp\src\components\Home.jsx