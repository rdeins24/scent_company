/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.scentiomilano.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/404", "/500"],
  changefreq: "monthly",
  transform: async (config, path) => ({
    loc: path,
    changefreq: config.changefreq,
    priority:
      path === "/"
        ? 1.0
        : path.startsWith("/aromatizare-") || path === "/servicii"
          ? 0.9
          : path.startsWith("/echipamente")
            ? 0.8
            : 0.7,
    lastmod: new Date().toISOString(),
  }),
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
