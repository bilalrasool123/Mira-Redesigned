import { useTranslate } from "@/src/contexts/TranslateContext";
import Data from "@data/sections/partners.json";

const PartnersSection = ({ paddingTop }) => {
  const { t } = useTranslate();

  return (
    <>
      {/* Onovo Brands */}
      <section
        className={
          paddingTop ? "onovo-section gap-top-140" : "onovo-section gap-top-140"
        }
      >
        <div className="container">
          {/* Heading */}
          <div className="onovo-heading gap-bottom-40">
            <div className="onovo-subtitle-1">
              <span dangerouslySetInnerHTML={{ __html: t(Data.subtitle) }} />
            </div>
            <h2 className="onovo-title-2" style={{ fontSize: "40px" }}>
              <span dangerouslySetInnerHTML={{ __html: t(Data.title) }} />
            </h2>
          </div>

          {/* Brands items */}
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-marquee">
              {Data.items.map((item, key) => (
                <div
                  key={`partners-item-${key}`}
                  className="flex-shrink-0 w-72 sm:w-56 md:w-64 lg:w-72 "
                >
                  <div
                    className="onovo-brands onovo-hover-3 onovo-hover-label rounded-lg"
                    data-onovo-overlay
                    data-onovo-scroll
                  >
                    <a target="_blank" href={item.link}>
                      <span className="image">
                        <img
                          decoding="async"
                          src={item.image}
                          width="285"
                          height="200"
                          alt={t(item.alt)}
                        />
                      </span>
                      <span className="label onovo-white-black">
                        {t("Visit Website")}
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersSection;
