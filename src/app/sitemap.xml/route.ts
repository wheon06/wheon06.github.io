import { PostType } from '@/app/types/post-type';
import { getPostList } from '@/app/util/getPostList';

export async function GET() {
  const baseUrl = 'https://wheon06.github.io';
  const postList: PostType[] = await getPostList('**');

  const urls = [
    { loc: baseUrl, lastmod: new Date() },
    ...postList.map((post) => ({
      loc: `${baseUrl}/${post.url}`,
      lastmod: formatToOriginDate(post.dateString),
    })),
  ];

  const sitemap = generateSitemapXml(urls);

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

const formatToOriginDate = (koreanDate: string) => {
  const dateParts = koreanDate.match(/(\d{4})년 (\d{2})월 (\d{2})일/);

  if (!dateParts) return null;

  return new Date(
    `${dateParts[1]}-${dateParts[2]}-${dateParts[3]}`,
  ).toISOString();
};

const generateSitemapXml = (
  urls: { loc: string; lastmod: Date | string | null }[],
) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(({ loc, lastmod }) => {
      const lastmodString = lastmod
        ? new Date(lastmod).toISOString()
        : new Date().toISOString();
      return `
    <url>
      <loc>${loc}</loc>
      <lastmod>${lastmodString}</lastmod>
    </url>`;
    })
    .join('')}
</urlset>`;
};
