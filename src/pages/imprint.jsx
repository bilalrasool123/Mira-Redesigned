import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import { useTranslate } from "../contexts/TranslateContext";

const Imprint = (props) => {
  const { t } = useTranslate();

  return (
    <Layouts header={2} footer={2} darkHeader>
      <PageBanner pageTitle={t("Imprint")} />

      <div className="container" style={{ padding: "20px" }}>
        <div className="content">
          <h3>Postal address: </h3>
          <p>Mira Elektronikentwicklung UG (limited liability)</p>
          <p>Waitzstraße 92</p>
          <p>24118 Kiel</p>
          <p>Email: raza.abbas@mira-ee.de</p>
          <p>Phone: +49 1522 6426128</p>
          <p>Commercial register number: HRB 24555 B</p>
          <p>Responsible for content: Raza Abbas</p>
          <p>
            The European Commission provides a platform for online dispute
            resolution (ODR), which you can find here
            ec.europa.eu/consumers/odr/.
          </p>
          <p>
            We are prepared to participate in an out-of-court arbitration
            procedure before a consumer arbitration board.
          </p>
          <p>
            The responsible body is the General Consumer Arbitration Board of
            the Center for Arbitration eV, Straßburger Straße 8, 77694 Kehl am
            Rhein, www.verbraucher-schlichter.de.
          </p>
          <h3 style={{ marginTop: "2rem" }}>Disclaimer:</h3>
          <p>
            As a content provider, the operator of the homepage is responsible
            under general law for the "own content" made available for use on
            www.mira-ee.com in accordance with Section 7 Paragraph 1 of the
            Telemedia Act. Cross-references ("links") to content made available
            by other providers must be distinguished from this own content.
            Through the cross-reference, the operator of the homepage makes
            "external content" available for use, which is marked accordingly
            with the note "[external]". This external content was checked when
            the link was first set to determine whether it could trigger
            possible civil or criminal liability. However, it cannot be ruled
            out that the content may be changed subsequently by the respective
            providers. The operator of the homepage does not constantly check
            the content to which it refers in its offer for changes that could
            give rise to new liability. If you are of the opinion that the
            linked external pages violate applicable law or have otherwise
            inappropriate content, please let us know.
          </p>
          <p>
            The operator of the homepage has the copyright or the corresponding
            rights of use for all images, films and texts published in the web
            shop, emails or in catalogues. Use, in particular the reproduction,
            editing, translation, storage, processing or reproduction of the
            images, films and texts is not permitted without the express written
            consent of the provider or the original owner of the property
            rights.
          </p>
          <h3 style={{ marginTop: "2rem" }}>Image Material:</h3>
          <p>
            Used hero image from
            <a target="_blank" href="https://unsplash.com/">
              Unsplash
            </a>
          </p>
          <p>Others are our own images</p>
          <h3 style={{ marginTop: "2rem" }}>Legal Notice:</h3>
          <p>
            All texts, graphics and images on the homepage www.mira-ee.com are
            subject to the copyright of Raza Abbas and may be protected by third
            parties. No part of this publication may be reproduced in any form
            and processed, duplicated or distributed using electronic systems
            without the written permission of Raza Abbas. Raza Abbas accepts no
            liability for the data security of any information sent via the
            website or by e-mail.
          </p>
          <p>
            Raza Abbas is not responsible for sites and their content referred
            to via hyperlinks.
          </p>
          <h3 style={{ marginTop: "2rem" }}>Liability for links:</h3>
          <p>
            Our offer contains links to external third-party websites over whose
            content we have no influence. We therefore cannot accept any
            liability for this external content. The respective provider or
            operator of the pages is always responsible for the content of the
            linked pages. The linked pages were checked for possible legal
            violations at the time of linking. Illegal content was not
            recognizable at the time of linking. However, permanent control of
            the content of the linked pages is not reasonable without concrete
            evidence of a legal violation. If we become aware of any legal
            violations, we will remove such links immediately.
          </p>
        </div>
      </div>
    </Layouts>
  );
};

export default Imprint;
