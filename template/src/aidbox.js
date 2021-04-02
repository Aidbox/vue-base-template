import Aidbox from "@aidbox/client-sdk-js/build/main";

export const createAidbox = () => {
  return Aidbox.initializeInstance(
    {
      URL: process.env.VUE_APP_AIDBOX_URL,
      CLIENT_ID: process.env.VUE_APP_AIDBOX_CLIENT_ID,
      CLIENT_SECRET: process.env.VUE_APP_AIDBOX_CLIENT_SECRET,
      AUTH_MODE: 0,
      FHIR_STRICT: false,
    },
    {
      insertIntoStorage: localStorage.setItem.bind(localStorage),
      obtainFromStorage: localStorage.getItem.bind(localStorage),
    }
  );
};
