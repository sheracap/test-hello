import { ContentLayout } from "@/components/content-layout";

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { namespaces } from "@core/localization/i18n.constants";

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <ContentLayout
      title={(
        <h1>{t("title", { ns: namespaces.dashboard })}</h1>
      )}
    >
      <div>Hello</div>
      <Link to="/auth">
        123
      </Link>
    </ContentLayout>
  );
}
