import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import { useTranslate } from "../contexts/TranslateContext";

const PrivacyPolicy = (props) => {
    const { t } = useTranslate();

    return (
        <Layouts header={2} footer={2} darkHeader>
            <PageBanner pageTitle={t("privacy_policy.title")} />

            <div className="container mx-auto px-4 py-8">
                <div className="content">
                    <h3 className="text-2xl font-bold mt-6">{t("privacy_policy.general_info")}</h3>
                    <p className="mb-4">{t("privacy_policy.general_info_text")}</p>

                    <h3 className="text-xl font-semibold mt-6">{t("privacy_policy.responsible_entity")}</h3>
                    <p className="mb-4">{t("privacy_policy.responsible_info")}</p>

                    <h3 className="text-xl font-semibold mt-6">{t("privacy_policy.data_protection_officer")}</h3>
                    <p className="mb-4">{t("privacy_policy.dpo_contact")}</p>

                    <h3 className="text-2xl font-bold mt-6">{t("privacy_policy.data_collection")}</h3>
                    
                    <h4 className="text-xl font-semibold mt-4">{t("privacy_policy.automatic_data_collection")}</h4>
                    <p className="mb-4">{t("privacy_policy.automatic_data_collection_text")}</p>

                    <h4 className="text-xl font-semibold mt-4">{t("privacy_policy.contact_data_collection")}</h4>
                    <p className="mb-4">{t("privacy_policy.contact_data_collection_text")}</p>

                    <h4 className="text-xl font-semibold mt-4">{t("privacy_policy.cookies_usage")}</h4>
                    <p className="mb-4">{t("privacy_policy.cookies_usage_text")}</p>

                    <h3 className="text-2xl font-bold mt-6">{t("privacy_policy.web_analysis")}</h3>
                    
                    <h4 className="text-xl font-semibold mt-4">{t("privacy_policy.google_analytics")}</h4>
                    <p className="mb-4">{t("privacy_policy.google_analytics_text")}</p>

                    <h4 className="text-xl font-semibold mt-4">{t("privacy_policy.linkedin_insight")}</h4>
                    <p className="mb-4">{t("privacy_policy.linkedin_insight_text")}</p>

                    <h4 className="text-xl font-semibold mt-4">{t("privacy_policy.google_tag_manager")}</h4>
                    <p className="mb-4">{t("privacy_policy.google_tag_manager_text")}</p>

                    <h4 className="text-xl font-semibold mt-4">{t("privacy_policy.similarweb")}</h4>
                    <p className="mb-4">{t("privacy_policy.similarweb_text")}</p>

                    <h4 className="text-xl font-semibold mt-4">{t("privacy_policy.semrush")}</h4>
                    <p className="mb-4">{t("privacy_policy.semrush_text")}</p>

                    <h4 className="text-xl font-semibold mt-4">{t("privacy_policy.leadfeeder")}</h4>
                    <p className="mb-4">{t("privacy_policy.leadfeeder_text")}</p>

                    <h3 className="text-2xl font-bold mt-6">{t("privacy_policy.your_rights")}</h3>
                    <p className="mb-4">{t("privacy_policy.your_rights_text")}</p>

                    <h3 className="text-2xl font-bold mt-6">{t("privacy_policy.changes")}</h3>
                    <p className="mb-4">{t("privacy_policy.changes_text")}</p>

                    <p className="text-center text-lg mt-8">{t("privacy_policy.last_updated")}</p>
                </div>
            </div>
        </Layouts>
    );
};

export default PrivacyPolicy;
