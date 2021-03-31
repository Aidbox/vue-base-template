import Aidbox from "@aidbox/client-sdk-js/build/main";

export const createAidbox = () => {
  return Aidbox.initializeInstance(
    {
      URL: "http://localhost:8085",
      CLIENT_ID: "myapp",
      CLIENT_SECRET: "verysecret",
      AUTH_MODE: 0,
      FHIR_STRICT: false,
    },
    {
      insertIntoStorage: localStorage.setItem.bind(localStorage),
      obtainFromStorage: localStorage.getItem.bind(localStorage),
    }
  );
};
