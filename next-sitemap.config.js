module.exports = {
  siteUrl: "https://trilm95.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404"],
      },
      { userAgent: "*", allow: "/" },
    ],
  },
};
