import config from ".astro/config.generated.json" with { type: "json" };
import type { APIRoute } from "astro";

const { enable, disallow } = config.seo.robotsTxt;

const getRobotsTxt = (
  sitemapURL: URL,
) => `# Robots.txt file for controlling web crawler access

User-agent: *

# Allowed pages
Allow: /

# Disallowed pages
${disallow?.map((item: string) => `Disallow: ${item}`).join("\n") || ""}

# Sitemap location
Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const baseUrl = config.site.baseUrl || site?.href || "https://www.agaassociates.com/";
  const sitemapURL = new URL("sitemap.xml", baseUrl);
  return enable
    ? new Response(getRobotsTxt(sitemapURL))
    : new Response(null, { status: 404 });
};
