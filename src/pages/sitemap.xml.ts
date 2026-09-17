import type { APIRoute } from "astro";
import config from ".astro/config.generated.json" with { type: "json" };

export const GET: APIRoute = ({ site }) => {
  const siteUrl = config.site.baseUrl || site?.href || "https://agaassociates-website.pages.dev/";
  const targetUrl = new URL("sitemap-0.xml", siteUrl);

  return new Response(null, {
    status: 301,
    headers: {
      Location: targetUrl.href,
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
};
