module.exports = function (api) {
  api.cache(true);

  const presets = [require("@babel/preset-react"), require("@babel/preset-env")];
  const plugins = [
    require("@babel/plugin-proposal-object-rest-spread"),
    require("@babel/plugin-proposal-class-properties"),
  ];

  return {
    presets,
    plugins
  };
};