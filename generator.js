module.exports = (api) => {
  api.extendPackage({
    dependencies: {
      "@aidbox/client-sdk-js": "*",
    },
  });
  api.render("./template");
};
