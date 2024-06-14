import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";

export const FooterBase = ({ t, lng }) => {
  return (
    <div className="uppercase">
      <Trans i18nKey="languageSwitcher" t={t}>
        <span>
          <strong>{{ lng }}</strong> /{" "}
        </span>
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </div>
  );
};
