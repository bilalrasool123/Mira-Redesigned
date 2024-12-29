import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import { useTranslate } from "../contexts/TranslateContext";

const PrivacyPolicy = (props) => {
  const { t } = useTranslate();

  return (
    <Layouts header={2} footer={2} darkHeader>
      <PageBanner pageTitle={t("Privacy Policy")} />

      <div className="container" style={{ padding: "20px" }}>
        <div className="content">
          <h3>1. General: </h3>
          <p>
            Your personal data (e.g. title, name, address, e-mail address,
            telephone number) will only be processed by us in accordance with
            the provisions of German data protection law and the data protection
            law of the European Union (EU). In addition to the processing
            purposes, recipients, legal bases and storage periods, the following
            provisions also inform you about your rights and the controller
            responsible for your data processing. This privacy policy only
            applies to our websites. If you are redirected to other sites via
            links on our pages, please inform yourself there about the
            respective handling of your data.
          </p>
          <h3 style={{ marginTop: "2rem" }}>2. Establishing contact:</h3>
          <h4>(1) Purpose of processing</h4>
          <p>
            We process the personal data you provide to us by e-mail, contact
            form, etc. to answer and process your inquiries. You are not obliged
            to provide us with your personal data. But without your e-mail
            address we cannot reply to you by e-mail.
          </p>
          <h4>(2) Legal bases</h4>
          <p>
            a) If you have given us your express consent to process your data,
            Art. 6 para. 1a) GDPR is the legal basis for this processing. b) If
            we process your data to carry out pre-contractual measures, Art. 6
            para. 1b) GDPR is the legal basis. c) In all other cases (in
            particular when using a contact form), Art. 6 para. 1f) GDPR is the
            legal basis. RIGHT TO OBJECT: You have the right to object to data
            processing based on Art. 6 para. 1 f) GDPR and does not serve direct
            advertising for reasons arising from your particular situation. In
            the case of direct advertising, however, you can object to the
            processing at any time without giving reasons.
          </p>
          <h4>(3) Legitimate interest</h4>
          <p>
            Our legitimate interest in the processing is to communicate with you
            quickly and to respond to your inquiries in a cost-effective manner.
            If you provide us with your address, we reserve the right to use it
            for direct postal advertising. You can protect your interest in data
            protection by passing on data sparingly (e.g. using a pseudonym).
            (4) Categories of recipients Hosting provider, mailing service
            provider for direct advertising (5) Storage period Your data will be
            deleted when it can be inferred from the circumstances that your
            request or the matter in question has been conclusively clarified.
            However, if a contract is concluded, we will retain the data
            required under commercial and tax law for the periods specified by
            law, i.e. regularly ten years (see Section 257 HGB, Section 147 AO).
            (6) Right of withdrawal In the case of processing based on your
            consent, you have the right to withdraw your consent at any time.
          </p>
          <h3 style={{ marginTop: "2rem" }}>3. Comments:</h3>
          <h4>(1) Purpose of processing</h4>
          <p>
            It is possible to write a comment. Your data (e.g. name/pseudonym,
            e-mail address, website) will then only be processed for the purpose
            of publishing your comment.
          </p>
          <h4>(2) Legal basis</h4>
          <p>The legal basis for this processing is Art. 6 para. 1 f) GDPR.</p>
          <h4>(3) Legitimate interest</h4>
          <p>
            Our legitimate interest is the public exchange of user opinions on
            certain topics and products. Publication serves, among other things,
            to promote transparency and opinion-forming. Your interest in data
            protection is safeguarded, as you can publish your comment under a
            pseudonym.
          </p>
          <h4>(4) Storage period</h4>
          <p>
            There is no specific storage period. You can request the deletion of
            your comment at any time.
          </p>
          <h4>(5) RIGHT TO OBJECT</h4>
          <p>
            You have the right to object to data processing based on Art. 6
            para. 1 f) GDPR and does not serve direct advertising for reasons
            arising from your particular situation. In the case of direct
            advertising, however, you can object to the processing at any time
            without giving reasons.
          </p>
          <h3 style={{ marginTop: "2rem" }}>
            4. Web analysis with Google Analytics:
          </h3>
          <h4>(1) Purpose of processing</h4>
          <p>
            This website uses Google Analytics, a web analytics service provided
            by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
            Ireland ("Google"). Google Analytics uses "cookies", which are text
            files placed on your computer, to help the website analyze how users
            use the site. The information generated by the cookie about your use
            of this website is usually transmitted to a Google server in the USA
            and stored there. However, if IP anonymization is activated on this
            website, your IP address will be shortened by Google beforehand
            within member states of the European Union or in other contracting
            states of the Agreement on the European Economic Area. Only in
            exceptional cases will the full IP address be transmitted to a
            Google server in the USA and shortened there. Google will use this
            information on behalf of the operator of this website for the
            purpose of evaluating your use of the website, compiling reports on
            website activity and providing other services relating to website
            activity and internet usage to the website operator.
          </p>
          <h4>(2) Legal basis</h4>
          <p>The legal basis for this processing is Art. 6 para. 1a) GDPR.</p>
          <h4>(3) Categories of recipients</h4>
          <p>Google and its partner companies.</p>
          <h4>(4) Transfer to a third country</h4>
          <p>
            Google Ireland Limited is a company affiliated with Google LLC.
            Google LLC is located in the USA (1600 Amphitheatre Parkway,
            Mountain View, CA 94043).
          </p>
          <h4>(5) Storage period</h4>
          <p>Unlimited</p>
          <h4>(6) RIGHT TO OBJECT</h4>
          <p>
            You may refuse the use of cookies by selecting the appropriate
            settings on your browser, however please note that if you do this
            you may not be able to use the full functionality of this website.
            You can also prevent Google from collecting the data generated by
            the cookie and relating to your use of the website (including your
            IP address) and from processing this data by Google by downloading
            and installing the browser plug-in available under the following
            link: optout
          </p>
          <h3 style={{ marginTop: "2rem" }}>5. Information about cookies:</h3>
          <h4>(1) Purpose of processing</h4>
          <p>
            Technically necessary cookies are used on this website. These are
            small text files that are not permanently stored in or by your
            Internet browser on your computer system and are only used for the
            functionality of the website. Other cookies remain permanent and
            recognize your browser the next time you visit to increase the
            user-friendliness of the website.
          </p>
          <h4>(2) Legal basis</h4>
          <p>The legal basis for processing is Art. 6 (1) f) GDPR.</p>
          <h4>(3) Legitimate interest</h4>
          <p>
            Our legitimate interest is the functionality and user-friendliness
            of our website. The user data collected by technically necessary
            cookies and the long-term cookies described here are not used to
            create user profiles. This safeguards your interest in data
            protection.
          </p>
          <h4>(4) Storage period</h4>
          <p>
            The technically necessary cookies are usually deleted when the
            browser is closed. Permanently stored cookies have a lifespan that
            varies from a few minutes to several years.
          </p>
          <h4>(5) RIGHT TO OBJECT</h4>
          <p>
            If you do not wish these cookies to be stored, please deactivate the
            acceptance of these cookies in your Internet browser. However, this
            may limit the functionality of our website. You can also delete
            permanently stored cookies at any time via your browser.
          </p>
          <h3 style={{ marginTop: "2rem" }}>6. Newsletter:</h3>
          <h4>(1) Purpose of processing</h4>
          <p>
            If you register for the newsletter, your e-mail address will be used
            for advertising purposes, i.e. we will inform you in particular
            about products from our range as part of the newsletter. For
            statistical purposes, we can analyze which links in the newsletter
            are clicked. We cannot recognize which specific person has clicked.
            You have expressly given the following consent separately or, if
            applicable, in the course of the ordering process: Subscribe to
            newsletter
          </p>
          <h4>(2) Legal basis</h4>
          <p>The legal basis for this processing is Art. 6 para. 1 a) GDPR.</p>
          <h4>(3) Categories of recipients</h4>
          <p>Groundhogg and Partner</p>
          <h4>(4) Storage period</h4>
          <p>
            Your e-mail address will only be stored for the newsletter mailing
            for the duration of the desired registration.
          </p>
          <h4>(5) Transfer to a third country</h4>
          <p>
            Groundhogg Inc. (https://groundhogg.io), 25 Lesmill Rd. Unit D,
            Toronto ON, Canada, M3B 2T3.
          </p>
          <h4>(6) Right of withdrawal</h4>
          <p>
            You can revoke your consent at any time with effect for the future.
            If you no longer wish to receive the newsletter, you can unsubscribe
            as follows: Via an unsubscribe link in the newsletter
          </p>
          <h4>(7) Your rights as a data subject</h4>
          <p>
            If your personal data is processed, you are a data subject within
            the meaning of the GDPR and you have the following rights vis-à-vis
            us as the controller: 1. right to information You can request
            information about your personal data processed by us in accordance
            with Art. 15 GDPR. 2. right to rectification If the information
            concerning you is not (or no longer) correct, you can request a
            correction in accordance with Art. 16 GDPR. If your data is
            incomplete, you can request that it be completed. 3. right to
            erasure You can request the deletion of your personal data under the
            conditions of Art. 17 GDPR. 4. right to restriction of processing
            Within the framework of the provisions of Art. 18 GDPR, you have the
            right to request that the processing of data concerning you be
            restricted. 5. right to data portability In accordance with Art. 20
            GDPR, you have the right to receive the personal data concerning
            you, which you have provided to us, in a structured, commonly used
            and machine-readable format or to request that it be transmitted to
            another controller. 6. right to revoke the declaration of consent
            under data protection law According to Art. 7 para. 3 GDPR, you have
            the right to withdraw your declaration of consent under data
            protection law at any time. This does not affect the lawfulness of
            the processing carried out on the basis of the consent until
            revocation. 7. right to lodge a complaint with a supervisory
            authority If you believe that the processing of personal data
            concerning you infringes the GDPR, you have the right to lodge a
            complaint with a supervisory authority (in particular in the Member
            State of your habitual residence, place of work or place of the
            alleged infringement) in accordance with Art. 77 GDPR. Please also
            note your right to object in accordance with Art. 21 GDPR: a)
            General: justified objection required If the processing of personal
            data concerning you takes place - to protect our overriding
            legitimate interest (legal basis pursuant to Art. 6 (1) f) GDPR) or
            - in the public interest (legal basis pursuant to Art. 6 (1) (e)
            GDPR), you have the right to object to the processing at any time
            for reasons arising from your particular situation; this also
            applies to profiling based on the provisions of the GDPR. In the
            event of an objection, we will no longer process the personal data
            concerning you unless we can demonstrate compelling legitimate
            grounds for the processing which override your interests, rights and
            freedoms or for the establishment, exercise or defense of legal
            claims. b) Special case of direct marketing: simple objection is
            sufficient If the personal data concerning you is processed for
            direct marketing purposes, you have the right to object to this
            processing at any time and without stating reasons; this also
            applies to profiling insofar as it is associated with such direct
            marketing. If you object to processing for direct marketing
            purposes, your personal data will no longer be processed for these
            purposes.
          </p>
          <h4>Responsible for data processing:</h4>
          <p>
            Raza Abbas, Waitzstraße 92, 24118 Kiel, Phone: +49 1522 6426128,
            raza.abbas@mira-ee.de
          </p>
        </div>
      </div>
    </Layouts>
  );
};

export default PrivacyPolicy;
