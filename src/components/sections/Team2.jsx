import { useTranslate } from "@/src/contexts/TranslateContext";
import Data from "@data/sections/team2.json";
import Link from "next/link";

const Team2Section = ({ team }) => {
  const { t } = useTranslate();

  return (
    <>
      {/* Onovo Team */}
      <section className="onovo-section  ">
        <div className="container">
          {/* Team items */}
          <div className=" text-center">
            <div className="">
              <div className="text-4xl font-semibold mb-4">
                <span>{t("Meet Our Company Family")}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                <span
                  dangerouslySetInnerHTML={{
                    __html: t("Our Team is The Difference."),
                  }}
                />
              </h2>
              <h3 className="text-2xl font-light mb-12">
                <span>{t("Our Chemistry is The Spark.")}</span>
              </h3>
            </div>
          </div>

          <div className="row gap-row align-center">
            {/* team items */}
            <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1"></div>

            {team.slice(0, Data.numOfItems).map((item, key) => (
              <div
                key={`team2-item-${key}`}
                className="col-xs-12 col-sm-12 col-md-6 col-lg-3"
              >
                <div className="onovo-team-two ">
                  <div className="onovo-team-two-item">
                    <div
                      className="image onovo-hover-3 onovo-hover-black-30 "
                      data-onovo-overlay
                      data-onovo-scroll
                    >
                      {/* <a href={`/team/${item.id}`}> */}
                        <img src={item.image} alt={t(item.name)} />
                      {/* </a> */}
                      <div className="onovo-social-2">
                        <ul>
                          {item.social.map((social, social_key) => (
                            <li key={`team2-item-${key}-social-${social_key}`}>
                              <a
                                className="onovo-social-link onovo-hover-2"
                                href={social.link}
                                title={t(social.title)}
                                target="_blank"
                              >
                                <i aria-hidden="true" className={social.icon} />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="desc">
                      <h5 className="title">
                        {/* <a href={`/team/${item.id}`} className="onovo-lnk"> */}
                          <span data-splitting data-onovo-scroll>
                            {t(item.name)}
                          </span>
                        {/* </a> */}
                      </h5>
                      <div className="onovo-subtitle-1">
                        <span data-splitting data-onovo-scroll>
                          {t(item.role)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Button */}
            {/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 align-center align-self-center">
              <Link
                className="onovo-btn-circle onovo-hover-2"
                href={Data.button.link}
              >
                <i className="arrow">
                  <span />
                </i>
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team2Section;
