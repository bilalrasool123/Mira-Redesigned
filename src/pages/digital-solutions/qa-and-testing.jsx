import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
import appData from "@data/app.json";
import { Formik } from "formik";
import Data from "@data/sections/embedded-services.json";
import { useTranslation } from "next-i18next"; // Import translation hook
import { useTranslate } from "@/src/contexts/TranslateContext";
import i18n from "i18next";




const ServiceDetail = () => {

    const { t } = useTranslate(); // Get the translation function

  const services = i18n.t("digital_solutions.items", { returnObjects: true });
  const postData = services[3];

//   console.log(services)
  let prev_id,
    next_id,
    prev_key,
    next_key = 0;

  services.forEach(function (item, key) {
    if (item.id == postData.id) {
      prev_key = key - 1;
      next_key = key + 1;
    }
  });

  services.forEach(function (item, key) {
    if (key == prev_key) {
      prev_id = item.id;
    }
    if (key == next_key) {
      next_id = item.id;
    }
  });

  return (
    <Layouts header={2} footer={2} darkHeader>
      <PageBanner pageTitle={postData.title} pageDesc={postData.short} />

      {/* Onovo Service Detail */}
      <section className="onovo-section gap-top-140">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              {/* Image */}
              <div className="gap-bottom-50">
                <img src={postData.image} alt={postData.title} />
              </div>

              <div className="content-container">
                <p>{postData.introduction}</p>
              </div>

              {postData.additional.content != "" && (
                <div className="content-container">
                  <div
                    dangerouslySetInnerHTML={{ __html: postData.additional.content }}
                  />
                </div>
               )}

              <div className="content-container">
                <p>{postData.end}</p>
              </div>

              {/* {typeof postData.additional != "undefined" && (
                <>
                  {postData.additional.enabled == 1 && (
                    <div className="onovo-text gap-top-50">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: postData.additional.content,
                        }}
                      />
                    </div>
                  )}
                </>
              )} */}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              {/* Service menu */}
              <div className="onovo-service-item onovo-service-no-icon gap-bottom-40">
                <div className="onovo-service-item-inner onovo-hover-3 onovo-hover-black">
                  <h5 className="title">
                    <span data-splitting data-onovo-scroll>
                      {" "}
                      {t('Services list')}{" "}
                    </span>
                  </h5>
                  <div className="list">
                    <ul>
                      {services.map((item, key) => (
                        <li key={`services-item-${key}`}>
                          <Link
                            className="onovo-lnk"
                            href={`/digital-solutions/${item.id}`}
                          >
                            <span data-splitting data-onovo-scroll>
                              {item.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Onovo Form */}
              <div className="onovo-form-box onovo-text-white">
                <h3 className="text-[20px] mb-3">{t('Send Us A Message')}</h3>
                <p className="mb-1">{t('Feel some love, to see what we can do...!')}</p>
                <Formik
                  initialValues={{ email: "", name: "", tel: "", message: "" }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    const form = document.getElementById("contactForm");
                    const status = document.getElementById("contactFormStatus");
                    const data = new FormData();

                    data.append("name", values.name);
                    data.append("tel", values.tel);
                    data.append("email", values.email);
                    data.append("message", values.message);

                    fetch(form.action, {
                      method: "POST",
                      body: data,
                      headers: {
                        Accept: "application/json",
                      },
                    })
                      .then((response) => {
                        if (response.ok) {
                          status.innerHTML = "Thanks for your submission!";
                          form.reset();
                        } else {
                          response.json().then((data) => {
                            if (Object.hasOwn(data, "errors")) {
                              status.innerHTML = data["errors"]
                                .map((error) => error["message"])
                                .join(", ");
                            } else {
                              status.innerHTML =
                                "Oops! There was a problem submitting your form";
                            }
                          });
                        }
                      })
                      .catch((error) => {
                        status.innerHTML =
                          "Oops! There was a problem submitting your form";
                      });

                    setSubmitting(false);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form
                      onSubmit={handleSubmit}
                      id="contactForm"
                      action={appData.settings.formspreeURL}
                      className="cform"
                      method="post"
                    >
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <input
                              size="40"
                              placeholder={t("Full Name")}
                              type="text"
                              name="name"
                              required="required"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <input
                              size="40"
                              placeholder={t("Email Address")}
                              type="email"
                              name="email"
                              required="required"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <input
                              size="40"
                              placeholder={t("Phone Number")}
                              type="tel"
                              name="tel"
                              required="required"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.tel}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <textarea
                              cols="40"
                              rows="10"
                              placeholder={t("Message")}
                              name="message"
                              required="required"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.message}
                              className="p-4 text-black"
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p className="flex justify-center mt-2">
                            <button
                              type="submit"
                              className="onovo-btn onovo-hover-btn btn--active"
                            >
                              <span>{t('Send Message')}</span>
                            </button>
                          </p>
                        </div>
                      </div>

                      <div
                        className="form-status alert-success"
                        id="contactFormStatus"
                      />
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onovo Navs */}
      <section className="onovo-section">
        <div className="container">
          {/* Navigation */}
          <div className="onovo-page-navigation">
            <div className="onovo-page-navigation-content">
              {prev_id != 0 && prev_id != undefined && (
                <Link
                  href={`/digital-solutions/${prev_id}`}
                  className="page-navigation__prev"
                >
                  <span className="onovo-prev onovo-hover-2">
                    <i />
                  </span>
                </Link>
              )}
              <Link
                href="/digital-solutions"
                className="page-navigation__posts"
              >
                <i className="fas fa-th" />
              </Link>
              {next_id != 0 && next_id != undefined && (
                <Link
                  href={`/digital-solutions/${next_id}`}
                  className="page-navigation__next"
                >
                  <span className="onovo-next onovo-hover-2">
                    <i />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default ServiceDetail;

