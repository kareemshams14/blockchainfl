// pages/sitemap.tsx

export async function getServerSideProps({ res }: { res: any }) {
    const baseUrl = "https://blockchainfl.com";
  
    const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${baseUrl}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>1.0</priority>
        </url>
        // <url>
        //   <loc>${baseUrl}/contact</loc>
        //   <lastmod>${new Date().toISOString()}</lastmod>
        //   <priority>0.8</priority>
        // </url>
        // <url>
        //   <loc>${baseUrl}/about</loc>
        //   <lastmod>${new Date().toISOString()}</lastmod>
        //   <priority>0.7</priority>
        // </url>
      </urlset>
    `;
  
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
  
    return {
      props: {},
    };
  }
  
  export default function Sitemap() {
    return null; // This page is handled by server-side rendering
  }
  