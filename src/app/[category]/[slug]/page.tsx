import NotFound from '@/app/404';
import { getPostList } from '@/app/util/getPostList';
import { PostItem } from '@/app/components/post-item';
import { PostContent } from '@/app/components/post-content';
import { PostFooter } from '@/app/components/post-footer';
import { getAllFolderNames } from '@/app/util/getAllFolderNames';

interface Props {
  params: { category: string; slug: string };
}

export async function generateStaticParams() {
  const categoryNameList = getAllFolderNames('src/app/posts');
  const postList = await getPostList();

  const params = [];

  for (const category of categoryNameList) {
    const postsInCategory = postList.filter(
      (post) => post.category === category,
    );
    for (const post of postsInCategory) {
      params.push({
        category: encodeURIComponent(category),
        slug: encodeURIComponent(post.title),
      });
    }
  }

  return params;
}

const PostDetail = async ({ params }: Props) => {
  const { category, slug } = params;

  const postList = await getPostList();
  const post = postList.find(
    (post) =>
      post.category === decodeURIComponent(category) &&
      post.title === decodeURIComponent(slug),
  );

  if (!post) return NotFound();

  return (
    <div className='mx-auto flex max-w-screen-md flex-col gap-2.5 px-5 py-10'>
      <a href='/' className='mb-10 text-3xl font-bold text-[#303030]'>
        HEEYEON's BLOG
      </a>
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
  );
};

export default PostDetail;
