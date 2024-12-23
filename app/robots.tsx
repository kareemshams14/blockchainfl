import { NextResponse } from 'next/server';

export const runtime = 'edge'; // Efficient for middleware and static content

export default function handler() {
  const robotsTxt = `
    User-agent: *
    Allow: /
    Sitemap: https://blockchainfl.com/sitemap.xml
  `;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
