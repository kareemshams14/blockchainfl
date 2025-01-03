// pages/api/robots.txt.ts

import { NextResponse } from 'next/server';

export const runtime = 'edge'; // Optimized for middleware and static content

/**
 * Handler for generating the robots.txt file.
 * This defines crawl instructions for search engine bots.
 */
export default function handler() {
  const robotsTxtContent = `
User-agent: *
Allow: /
Sitemap: https://blockchainfl.com/sitemap.xml
  `;

  return new NextResponse(robotsTxtContent.trim(), {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
