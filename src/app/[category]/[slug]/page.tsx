import NotFound from '@/app/404';
import { getPostList } from '@/app/util/getPostList';
import { PostItem } from '@/app/components/post-item';
import { PostContent } from '@/app/components/post-content';
import { PostFooter } from '@/app/components/post-footer';
import { findAllCategory } from '@/app/util/findAllCategory';
import { findAllSlugByCategory } from '@/app/util/findAllSlugByCategory';
import { PostHeader } from '@/app/components/post-header';

export async function generateStaticParams() {
  const categoryNameList = findAllCategory('src/app/posts');

  const params: { category: string; slug: string }[] = [];

  for (const category of categoryNameList) {
    const postNameList = findAllSlugByCategory('src/app/posts/' + category);
    postNameList.map((postName) => {
      params.push({
        category: category,
        slug: postName.split('/')[4],
      });
    });
  }

  return params;
}

interface Props {
  params: { category: string; slug: string };
}

const PostDetail = async ({ params }: Props) => {
  const { category, slug } = params;
  const postList = await getPostList();
  const post = postList.find(
    (post) => post.category === category && post.slug === slug,
  );

  if (!post) return NotFound();

  return (
    <div className='mx-auto flex max-w-screen-md flex-col gap-2.5 px-5 py-10'>
      <PostHeader />
      <PostItem
        category={post.category}
        tags={post.tags}
        title={post.title}
        description={post.description}
        createdAt={post.dateString}
        url={post.url}
      />
      <div className='my-2 h-[1%] w-full border border-[#ebebeb]'></div>
      <PostContent post={post} />
      <PostFooter />
    </div>
  );
};

export default PostDetail;
