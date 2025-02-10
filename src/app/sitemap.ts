import { PostType } from '@/app/types/post-type';
import { getPostList } from '@/app/util/getPostList';

export default async function sitemap() {
  const baseUrl = 'https://wheon06.github.io';

  const postList: PostType[] = await getPostList('**');
  const postUrls = postList.map((post) => ({
    url: `${baseUrl}/${post.url}`,
    lastModified: formatToOriginDate(post.dateString),
  }));

  return [{ url: baseUrl, lastModified: new Date() }, ...postUrls];
}

export async function generateStaticParams() {
  const postList: PostType[] = await getPostList('**');
  return postList.map((post) => ({
    __metadata_id__: null,
  }));
}

const formatToOriginDate = (koreanDate: string) => {
  const dateParts = koreanDate.match(/(\d{4})년 (\d{2})월 (\d{2})일/);

  if (!dateParts) return null;

  return new Date(`${dateParts[1]}-${dateParts[2]}-${dateParts[3]}`);
};
