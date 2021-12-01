let policy = {
  userAgent: "*",
};

if (process.env.ENVIRONMENT !== "production") {
  policy.disallow = "/";
}

const siteUrl = "https://hubertgregg.co.uk";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [policy],
  },
  outDir: "./out",
};
