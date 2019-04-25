const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Hi, I'm Cipri", // Navigation and Site Title
  siteTitleAlt: "Cipri", // Alternative Site title for SEO
  siteTitleShort: "Cipri", // short_name for manifest
  siteHeadline: "Front End Developer", // Headline for schema.org JSONLD
  siteUrl: "https://cipri.codes", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/logo.png", // Used for SEO and manifest
  siteDescription: "Front End Developer | Amsterdam",
  author: "Cipriano Freitas", // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@ciprianofreitas", // Twitter Username
  ogSiteName: "Cipri", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "UA-47519312-5",

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
