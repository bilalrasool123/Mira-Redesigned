import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import { useTranslate } from "../contexts/TranslateContext";

const PrivacyPolicy = (props) => {
    const { t } = useTranslate();

    return (
        <Layouts header={2} footer={2} darkHeader>
            <PageBanner pageTitle={t("privacy_policy.title")} />

            <div className="container privacy-policy-container">
                <div className="content">
                    <h3><strong>{t("privacy_policy.general_info")}</strong></h3>
                    <p>{t("privacy_policy.general_info_text")}</p>

                    <h3><strong>{t("privacy_policy.responsible_entity")}</strong></h3>
                    <p>{t("privacy_policy.responsible_info")}</p>

                    <h3><strong>{t("privacy_policy.data_protection_officer")}</strong></h3>
                    <p>{t("privacy_policy.dpo_contact")}</p>

                    <h3><strong>{t("privacy_policy.data_collection")}</strong></h3>
                    
                    <h4><strong>{t("privacy_policy.automatic_data_collection")}</strong></h4>
                    <p>{t("privacy_policy.automatic_data_collection_text")}</p>

                    <h4><strong>{t("privacy_policy.contact_data_collection")}</strong></h4>
                    <p>{t("privacy_policy.contact_data_collection_text")}</p>

                    <h4><strong>{t("privacy_policy.cookies_usage")}</strong></h4>
                    <p>{t("privacy_policy.cookies_usage_text")}</p>

                    <h3><strong>{t("privacy_policy.web_analysis")}</strong></h3>
                    
                    <h4><strong>{t("privacy_policy.google_analytics")}</strong></h4>
                    <p>{t("privacy_policy.google_analytics_text")}</p>

                    <h4><strong>{t("privacy_policy.linkedin_insight")}</strong></h4>
                    <p>{t("privacy_policy.linkedin_insight_text")}</p>

                    <h4><strong>{t("privacy_policy.google_tag_manager")}</strong></h4>
                    <p>{t("privacy_policy.google_tag_manager_text")}</p>

                    <h4><strong>{t("privacy_policy.similarweb")}</strong></h4>
                    <p>{t("privacy_policy.similarweb_text")}</p>

                    <h4><strong>{t("privacy_policy.semrush")}</strong></h4>
                    <p>{t("privacy_policy.semrush_text")}</p>

                    <h4><strong>{t("privacy_policy.leadfeeder")}</strong></h4>
                    <p>{t("privacy_policy.leadfeeder_text")}</p>

                    <h3><strong>{t("privacy_policy.your_rights")}</strong></h3>
                    <p>{t("privacy_policy.your_rights_text")}</p>

                    <h3><strong>{t("privacy_policy.changes")}</strong></h3>
                    <p>{t("privacy_policy.changes_text")}</p>

                    <p className="date">{t("privacy_policy.last_updated")}</p>
                </div>
            </div>

            <style jsx>{`
                .privacy-policy-container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 30px;
                    line-height: 1.6;
                }
                h3 {
                    margin-top: 30px;
                    font-size: 1.5rem;
                }
                h4 {
                    margin-top: 20px;
                    font-size: 1.2rem;
                }
                p {
                    margin-bottom: 20px;
                    font-size: 1rem;
                }
                .date {
                    margin-top: 30px;
                    font-size: 1rem;
                }
            `}</style>
        </Layouts>
    );
};

export default PrivacyPolicy;
