import i18n from "../plugins/react.i18next";

export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  window.localStorage.setItem("language", lng);
};
