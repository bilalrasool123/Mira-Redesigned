import { useEffect } from "react";
import dynamic from "next/dynamic";
import Layouts from "@layouts/Layouts";

import { getSortedTeamData } from "@library/team";
import { getSortedServicesData } from "@/src/lib/embedded-services";
import Data from "@data/sections/embedded-services.json";
import CountUp from "react-countup";
import { circleText } from "@common/utilits";

import PageBanner from "@components/PageBanner";
import Team2Section from "@components/sections/Team2";
import PartnersSection from "@components/sections/Partners";
import Services4Section from "@components/sections/Services4";
import { useTranslate } from "../contexts/TranslateContext";

const HistorySlider = dynamic(() => import("@components/sliders/History"), {
  ssr: false,
});
const Testimonial2Slider = dynamic(
  () => import("@components/sliders/Testimonial2"),
  { ssr: false }
);

const About = (props) => {
  const { t } = useTranslate();

  useEffect(() => {
    circleText();
  }, []);

  const clickedVideoButton = (e) => {
    e.preventDefault();

    e.target.parentNode.classList.add("active");
    let videoIframe = e.target.parentNode.querySelector(".js-video-iframe");
    let videoUrl = videoIframe.dataset.src;
    videoIframe.setAttribute("src", videoUrl);
  };

  return (
    <Layouts header={2} footer={2} darkHeader>
      <PageBanner
        pageTitle={t("About Us")}
        pageDesc={t("MIRA Empowering Future with Innovative Solutions!")}
      />

      {/* Onovo About section */}
      <section className="onovo-section gap-top-140 gap-bottom-140">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              {/* Heading */}
              <div className="onovo-heading gap-bottom-60">
                <div className="onovo-subtitle-1">
                  <span> {t("Welcome to Mira Elektronikentwicklung")} </span>
                </div>
                <h2 className="onovo-title-2">
                  <span className="text-4xl">
                    {t("We are a cutting-edge")} <br />
                    {t("software services provider,")} <br />
                    {t("dedicated to developing")} <br />
                    {t("innovative solutions")} <br />
                  </span>
                </h2>
                <div className="onovo-text">
                  <p>
                    {t(
                      "Since our inception, we have been committed to providing innovative software solutions"
                    )}
                    <strong>
                      {t(
                        "tailored to your needs,driving growth and enhancing user experiences. Our dedication to"
                      )}
                    </strong>
                    ,
                    {t(
                      "excellence is reflected in our evolving expertise and successful projects."
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 offset-lg-1 hide-on-mobile">
              {/* Image */}
              <img src="/images/onovo-about-logo.png" alt="" />
            </div>
          </div>

          {/* Numbers items */}
          <div className="row gap-row gap-bottom-100">
            {/*number-item*/}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="onovo-counter">
                <div
                  className="num onovo-text-white js-counter"
                  data-end-value="23"
                >
                  <CountUp
                    end="23"
                    duration={7}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <div className="num-after onovo-text-white"> + </div>
                <div className="label"> {t("Team members")} </div>
              </div>
            </div>

            {/*number-item*/}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="onovo-counter">
                <div
                  className="num onovo-text-white js-counter"
                  data-end-value="50"
                >
                  <CountUp
                    end="50"
                    duration={7}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <div className="num-after onovo-text-white"> + </div>
                <div className="label"> {t("Completed projects")} </div>
              </div>
            </div>

            {/*number-item*/}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="onovo-counter">
                <div
                  className="num onovo-text-white js-counter"
                  data-end-value="1"
                >
                  <CountUp
                    end="1"
                    duration={7}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <div className="num-after onovo-text-white"> {t("M")} </div>
                <div className="label"> {t("Lines of code")} </div>
              </div>
            </div>
          </div>

          {/* Video */}
          {/* <div className="onovo-video" data-onovo-overlay data-onovo-scroll>
            <div
              className="image"
              onClick={(e) => clickedVideoButton(e)}
              style={{ backgroundImage: "url(/images/hero-digital-1.jpg)" }}
            />
            <iframe
              className="js-video-iframe"
              data-src="https://www.youtube.com/embed/Gu6z6kIukgg?showinfo=0&rel=0&autoplay=1"
            ></iframe>
            <div
              className="play onovo-circle-text"
              onClick={(e) => clickedVideoButton(e)}
            >
              <div className="arrow" />
              <div className="label onovo-text-black onovo-circle-text-label">
                {" "}
                Play Video - Play Video - Play Video -{" "}
              </div>
            </div>
          </div> */}

          {/* Description */}
          <div className="row gap-top-100">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <h5 className="text-uppercase">{t("Our Goal")}</h5>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
              {t(
                "MIRA Electronics Development is your reliable partner for embedded systems and customized software solutions. With years of experience, we deliver high-quality, high-performance embedded solutions tailored to meet the specific needs of our clients across various industries. Our expertise encompasses the development of firmware, embedded software, and IoT solutions that enable seamless integration into existing systems.Our mission is to make tomorrow's technology available to our customers today through innovative embedded system solutions. We offer scalable, secure software solutions that meet the demands of the automotive industry, medical technology, Industry 4.0, and telecommunications. With our customized solutions, we optimize the performance, reliability, and security of your devices.With a team of experienced developers specializing in embedded systems and software development, we focus on quality and sustainability to create long-term solutions for digital transformation. We believe in the future of connected devices and provide IoT-based solutions to take your business to the next level of Industry 4.0."
              )}
              <br /> <br />
            </div>
          </div>

          {/* Description */}
          {/* <div className="row gap-top-60">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <h5 className="text-uppercase">{t("Our Goal")}</h5>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
              {t(
                "Driven by a deep-seated trust and shared vision, we forge ahead with each project, crafting bespoke solutions that empower businesses and individuals alike. With a focus on real-time functionality and cutting-edge technology, we elevate processes and drive tangible results. At MIRA Elektronikentwicklung, we understand the power of SEO in enhancing online visibility and driving organic traffic. By optimizing every aspect of our solutions, we ensure that our clients stand out in the digital landscape, commanding attention and achieving their goals. Join us on our journey as we continue to script a compelling narrative for MIRA Elektronikentwicklung, shaping the future of software solutions with innovation, expertise, and a touch of passion and dedication."
              )}
            </div>
          </div> */}

          {/* Gallery */}
          {/* <div className="row gap-top-100">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <a href="/images/posts1.jpg" className="mfp-image">
                <img src="/images/posts1-1024x683.jpg" alt="" />
              </a>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 gap-top-60">
              <a href="/images/posts2.jpg" className="mfp-image">
                <img src="/images/posts2-1024x683.jpg" alt="" />
              </a>
            </div>
          </div> */}
        </div>
      </section>

      <Services4Section services={props.services} />

      {/* <AwardsSection /> */}

      {/* <HistorySlider /> */}

      <Team2Section team={props.team} />

      {/* <Testimonial2Slider /> */}

      <PartnersSection />
    </Layouts>
  );
};
export default About;

export async function getStaticProps() {
  const allTeam = getSortedTeamData();
  const allServices = getSortedServicesData();

  return {
    props: {
      team: allTeam,
      services: Data.items,
    },
  };
}
