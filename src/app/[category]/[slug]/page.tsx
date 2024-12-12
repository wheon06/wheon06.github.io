import NotFound from '@/app/404';
import { getAllSlugNames } from '@/app/util/getAllSlugNames';
import { getPostList } from '@/app/util/getPostList';
import { PostItem } from '@/app/components/post-item';
import { PostContent } from '@/app/components/post-content';
import { PostFooter } from '@/app/components/post-footer';

interface Props {
  params: { slug: string };
}

const PostDetail = async ({ params }: Props) => {
  const { slug } = params;

  const postList = await getPostList();
  const post = postList.find((post) => post.title === decodeURIComponent(slug));

  const slugNameList = getAllSlugNames('src/app/posts');

  if (!slugNameList.includes(decodeURIComponent(slug))) return NotFound();
  if (!post) return NotFound;

  return (
    <>
      <div>HEEYEON's BLOG</div>
      <div className='mx-auto flex max-w-screen-md flex-col gap-2.5 px-5 py-10'>
        <PostItem
          category={post.category}
          tags={post.tags}
          title={post.title}
          description={post.description}
          createdAt={post.dateString}
        />
        <div className='my-2 h-[1%] w-full border border-[#ebebeb]'></div>
        <PostContent post={post} />
        <PostFooter />
      </div>
    </>
  );
};

export default PostDetail;
