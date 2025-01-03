import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = "https://blockchainfl.com";

  // Generate XML for the sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>1.0</priority>
    </url>
  </urlset>`;

  // Set response headers and send the XML content
  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  // Return empty props since this page does not render anything
  return {
    props: {},
  };
};

// Sitemap is an empty functional component as the content is handled server-side
const Sitemap = () => null;

export default Sitemap;
