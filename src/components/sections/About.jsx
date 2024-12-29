import { useTranslate } from "@/src/contexts/TranslateContext";
import Data from "@data/sections/about.json";
import Link from "next/link";

const AboutSection = () => {
  const { t } = useTranslate();
  return (
    <>
      {/* Onovo About */}
      <section className="onovo-section gap-bottom-140 gap-top-140 ">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-8 col-lg-12">
                  {/* Heading */}
                  <div className="onovo-heading gap-bottom-40">
                    <div className="onovo-subtitle-1">
                      <span>{t(Data.subtitle)}</span>
                    </div>
                    <h2 className="onovo-title-2 ">
                      <span
                        className="about-title text-2xl"
                        dangerouslySetInnerHTML={{ __html: t(Data.title) }}
                      />
                    </h2>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="row flex flex-nowrap justify-center lg:mx-4 md:mx-6">
                {Data.items.map((item, key) => (
                  <div
                    key={`about-item-${key}`}
                    className="col-xs-12 col-sm-12 col-md-4 col-lg-4 flex flex-col items-center  border-2 border-black rounded-xl transform transition-all duration-700 hover:bg-[#007aff] hover:text-white hover:scale-105 overflow-hidden mx-2  cursor-pointer"
                    style={{ marginTop: "12px" }}
                  >
                    {/* Card Content */}
                    <div className="p-6 flex flex-col items-center mt-4">
                      <h5 className="text-uppercase text-center font-semibold text-lg text-black mb-4">
                        {t(item.title)}
                      </h5>
                      <p
                        className="text-black mb-6"
                        dangerouslySetInnerHTML={{ __html: t(item.text) }}
                      />
                    </div>

                    {/* Button Section */}
                    {item.button && (
                      <div className="text-center mb-6">
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
