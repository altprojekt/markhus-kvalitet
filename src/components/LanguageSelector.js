import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <div style={{ marginBottom: 18 }}>
      <button onClick={() => i18n.changeLanguage('no')}>🇳🇴</button>
      <button onClick={() => i18n.changeLanguage('en')}>🇬🇧</button>
      <button onClick={() => i18n.changeLanguage('lt')}>🇱🇹</button>
      <button onClick={() => i18n.changeLanguage('pl')}>🇵🇱</button>
    </div>
  );
}
