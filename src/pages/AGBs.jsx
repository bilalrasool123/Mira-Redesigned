import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import { useTranslate } from "../contexts/TranslateContext";

const AGBs = (props) => {
  const { t } = useTranslate();

  return (
    <Layouts header={2} footer={2} darkHeader>
      <PageBanner pageTitle={t("General terms and conditions")} />

      {/* <div className="container" style={{ padding: "20px" }}>
        <div className="content">
        <p className="font-bold text-[25px] text-center my-2">{t('General Terms and Conditions (GTC) of Mira Elektronikentwicklung GmbH')}</p>
        <h3 className="font-bold">{t('general')}</h3>
      <p>{t('personal_data_info')}</p>
      
      <h3 style={{ marginTop: '2rem' }}>{t('contact_heading')}</h3>
      
      <h4>{t('purpose_of_processing')}</h4>
      <p>{t('processing_info')}</p>
      
      <h4>{t('legal_bases')}</h4>
      <p>{t('legal_basis_info')}</p>
      
      <h4>{t('legitimate_interest')}</h4>
      <p>{t('legitimate_interest_info')}</p>
      
      <h4>{t('categories_of_recipients')}</h4>
      <p>{t('recipients_info')}</p>
      
      <h4>{t('storage_period')}</h4>
      <p>{t('storage_period_info')}</p>
      
      <h4>{t('right_of_withdrawal')}</h4>
      <p>{t('right_of_withdrawal_info')}</p>
      
      <h3 style={{ marginTop: '2rem' }}>{t('comments_heading')}</h3>
      
      <h4>{t('comment_processing')}</h4>
      <p>{t('comment_info')}</p>
      
      <h4>{t('comment_legal_basis')}</h4>
      <p>{t('comment_legal_basis_info')}</p>
      
      <h4>{t('comment_legitimate_interest')}</h4>
      <p>{t('comment_legitimate_interest_info')}</p>
      
      <h4>{t('comment_storage_period')}</h4>
      <p>{t('comment_storage_period_info')}</p>
      
      <h4>{t('right_to_object')}</h4>
      <p>{t('right_to_object_info')}</p>
      <h3 style={{ marginTop: "2rem" }}>{t('webAnalysis.title')}</h3>
      <h4>{t('webAnalysis.purpose')}</h4>
      <p>{t('webAnalysis.purposeText')}</p>
      <h4>{t('webAnalysis.legalBasis')}</h4>
      <p>{t('webAnalysis.legalBasisText')}</p>
      <h4>{t('webAnalysis.categories')}</h4>
      <p>{t('webAnalysis.categoriesText')}</p>
      <h4>{t('webAnalysis.transfer')}</h4>
      <p>{t('webAnalysis.transferText')}</p>
      <h4>{t('storage_period1')}</h4>
      <p>{t('unlimited')}</p>
      
      <h4>{t('right_to_object1')}</h4>
      <p>
        {t('refuse_cookies')}
        <br />
        {t('cookie_note')}
        <br />
        {t('google_optout')}
      </p>

      <h3 style={{ marginTop: "2rem" }}>{t('cookies_heading2')}</h3>
      
      <h4>{t('purpose_of_processing2')}</h4>
      <p>{t('purpose_info2')}</p>

      <h4>{t('legal_basis2')}</h4>
      <p>{t('legal_basis_info2')}</p>

      <h4>{t('legitimate_interest2')}</h4>
      <p>{t('legitimate_interest_info2')}</p>

      <h4>{t('storage_period2')}</h4>
      <p>{t('storage_period_info2')}</p>

      <h4>{t('right_to_object2')}</h4>
      <p>{t('right_to_object_info2')}</p>

      <h3 style={{ marginTop: "2rem" }}>{t('newsletter_heading3')}</h3>

      <h4>{t('purpose_of_processing3')}</h4>
      <p>{t('newsletter_purpose_info3')}</p>

      <h4>{t('legal_basis3')}</h4>
      <p>{t('legal_basis_info3')}</p>

      <h4>{t('categories_of_recipients3')}</h4>
      <p>{t('categories_info3')}</p>

      <h4>{t('storage_period3')}</h4>
      <p>{t('storage_period_info3')}</p>

      <h4>{t('transfer_to_third_country3')}</h4>
      <p>{t('third_country_info3')}</p>

      <h4>{t('right_of_withdrawal3')}</h4>
      <p>{t('right_of_withdrawal_info3')}</p>

      <h4>{t('your_rights_as_data_subject3')}</h4>
      <p>{t('data_subject_rights_info3')}</p>

      <h4>{t('responsible_for_data_processing3')}</h4>
      <p>{t('responsible_info3')}</p>
        </div>
      </div> */}
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">{t("AGB_title")}</h1>

      {[...Array(12)].map((_, i) => {
        const sectionNumber = i + 1;
        return (
          <div key={sectionNumber} className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">
              {`${sectionNumber}. ${t(`AGB_${sectionNumber}_title`)}`}
            </h2>
            {[...Array(3)].map((_, j) => {
              const subsectionNumber = `${sectionNumber}.${j + 1}`;
              const subsectionText = t(`AGB_${sectionNumber}_text_${j + 1}`);
              return (
                subsectionText && (
                  <p key={subsectionNumber} className="mb-2">{`${subsectionNumber}. ${subsectionText}`}</p>
                )
              );
            })}
          </div>
        );
      })}

      <div className="mt-8 ">
        <p>{t("footer_company")}</p>
        <p>{t("footer_address")}</p>
        <p>{t("footer_register")}</p>
        <p>{t("footer_website")}</p>
        <p>{t("footer_email")}</p>
      </div>
    </div>


    </Layouts>
  );
};

export default AGBs;
