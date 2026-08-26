Deno.serve(async (req) => {
  const pages = [
    ["", "weekly", "1.0"],
    ["solar/chico-ca", "monthly", "0.8"],
    ["solar/redding-ca", "monthly", "0.8"],
    ["solar/monterey-ca", "monthly", "0.8"],
    ["solar/salinas-ca", "monthly", "0.8"],
    ["solar/fresno-ca", "monthly", "0.8"],
    ["solar/visalia-ca", "monthly", "0.8"],
    ["solar/sacramento-ca", "monthly", "0.8"],
    ["solar/stockton-ca", "monthly", "0.8"],
    ["solar/modesto-ca", "monthly", "0.8"],
    ["solar/lake-isabella-ca", "monthly", "0.7"],
  ];

  const urls = pages
    .map(
      ([path, changefreq, priority]) => `  <url>
    <loc>https://g8solarenergy.com/${path}</loc>
    <lastmod>2026-08-26</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
});
