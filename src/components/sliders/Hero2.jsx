import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from "@data/sliders/hero-2.json";
import Link from "next/link";
import SvgComponent from "./SvgComponent";
import { useTranslate } from "@/src/contexts/TranslateContext";

const Hero2Slider = () => {
  const { t } = useTranslate();

  return (
    <>
      {/* Onovo Hero */}
      <section className="onovo-section onovo-hero hero--two">
        {/* Hero swiper */}
        <Swiper
          {...sliderProps.hero2Slider}
          className="swiper-container js-hero-slider"
        >
          <div className="swiper-wrapper">
            {Data.items.map((item, key) => (
              <SwiperSlide key={`h2s-slide-${key}`} className="swiper-slide">
                <div className="onovo-hero-slide-item">
                  {item.video == undefined && (
                    <div
                      className="image"
                      data-dimg={item.image.desktop}
                      data-mimg={item.image.mobile}
                    >
                      <div className="ovrl" style={{ opacity: "0.95" }} />
                    </div>
                  )}
                  {item.video != undefined && (
                    <div className="image video">
                      <video autoPlay muted loop playsInline>
                        <source src={item.video} type="video/mp4" />
                      </video>
                      <div className="ovrl" style={{ opacity: "0.95" }} />
                    </div>
                  )}
                  <div className="container">
                    <div className="row gap-top-50 md:gap-top-20">
                      <div className="titles col-sm-12 col-md-6 col-lg-8">
                        <h1 className="title onovo-text-white hero-h1">
                          <div
                            style={{
                              fontSize: "1rem",
                              marginBottom: "0.8rem",
                              fontWeight: "bold",
                            }}
                          >
                            {t("TECH AT IT'S BEST")}
                          </div>
                          <span
                            className="hero-title"
                            data-splitting
                            dangerouslySetInnerHTML={{ __html: t(item.title) }}
                          />
                        </h1>
                        <div className="text">
                          <div className="subtitle onovo-text-white subtitle--left">
                            <div
                              data-splitting
                              dangerouslySetInnerHTML={{ __html: t(item.text) }}
                            />
                          </div>
                          {item.button && (
                            <div className="text-left mb-6">
                              <Link
                                className="onovo-btn onovo-hover-btn DYK-button inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transform transition-all duration-200"
                                href={item.button.link}
                              >
                                <i className="arrow mr-2">
                                  <span />
                                </i>
                                <span>{t(item.button.label)}</span>
                              </Link>
                            </div>
                          )}
                          {/* <div className="onovo-bts ">
                            <Link
                              className="onovo-btn btn--border btn--white btn--color onovo-hover-btn"
                              href={item.button.link}
                            >
                              <i className="arrow">
                                <span />
                              </i>
                              <span>{t(item.button.label)}</span>
                            </Link>
                          </div> */}
                        </div>
                      </div>
                      {item.svg && (
                        <div className=" col-sm-12 col-md-6 col-lg-4 hide-on-mobile">
                          <SvgComponent />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>

          {/* navs */}
          {/* <div className="onovo-navs js-hero-slider-navs">
            <div className="onovo-prev js-hero-slider-prev nav--white onovo-hover-2">
              <i />
            </div>
            <div className="onovo-paginations-container pag--white">
              <div className="onovo-paginations js-hero-pagination" />
              <div className="swiper-nav-active" />
            </div>
            <div className="onovo-next js-hero-slider-next nav--white onovo-hover-2">
              <i />
            </div>
          </div> */}
        </Swiper>
      </section>
    </>
  );
};
export default Hero2Slider;
