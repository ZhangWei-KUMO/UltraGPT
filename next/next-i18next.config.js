module.exports = {
  i18n: {
    defaultLocale: "zh",
    locales: [
      "en",
      "hu",
      "fr",
      "de",
      "it",
      "ja",
      "lt",
      "zh",
      "zhtw",
      "ko",
      "pl",
      "pt",
      "ro",
      "ru",
      "uk",
      "es",
      "nl",
      "sk",
      "hr",
      "tr",
    ],
  },
  localePath: typeof window === "undefined" ? "./public/locales" : "/locales",
  debug: false,
  reloadOnPrerender: process.env.NODE_ENV === "development",
  defaultNS: "common",
  ns: ["common", "help", "settings", "chat", "agent", "errors", "languages", "drawer", "indexPage"],
  react: {
    useSuspense: false,
  },
  saveMissing: true,
};
