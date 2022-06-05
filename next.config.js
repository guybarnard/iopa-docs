const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
});

const withYAML = require("next-yaml");

module.exports = withYAML(withNextra({
  reactStrictMode: true,
  experiments: {
    esmExternals: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
}));
