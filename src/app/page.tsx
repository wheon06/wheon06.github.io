import { findAllCategory } from '@/app/util/findAllCategory';
import { getPostList } from '@/app/util/getPostList';
import { PostItem } from '@/app/components/post-item';
import { PostType } from '@/app/types/post-type';
import { CategoryList } from '@/app/posts/category-list';
import { TagKeysType } from '@/app/types/tag-keys-type';
import { PostFooter } from '@/app/components/post-footer';
import { PostHeader } from '@/app/components/post-header';
import { formatKoreanDateToCleanString } from '@/app/util/formatKoreanDateToCleanString';

export async function generateStaticParams() {
  const categoryNameList = findAllCategory('src/app/posts');
  return categoryNameList.map((category) => ({
    category: encodeURIComponent(category),
  }));
}

interface Props {
  params: { category: string };
}

const Home = async ({ params }: Props) => {
  const categoryNameList = findAllCategory('src/app/posts');
  const category = params.category || '**';
  const postList: PostType[] = await getPostList(category);

  return (
    <>
      <div className='mx-auto flex min-h-screen max-w-screen-md flex-col gap-2.5 bg-white px-5 py-10'>
        <PostHeader />
        <div className='flex w-full gap-2'>
          <a
            href='/blog'
            className={`rounded-xl p-2 font-semibold text-black hover:bg-[#ebebeb] ${category === '**' ? 'bg-[#ebebeb]' : ''}`}
          >
            전체
          </a>
          {categoryNameList.map((categoryName) => (
            <a
              key={categoryName}
              href={`/blog/${categoryName}`}
              className={`rounded-xl p-2 font-semibold text-black hover:bg-[#ebebeb] ${category === categoryName ? 'bg-[#ebebeb]' : ''}`}
            >
              {CategoryList[categoryName as TagKeysType].label}
            </a>
          ))}
        </div>
        {postList
          .sort(
            (a, b) =>
              Number(formatKoreanDateToCleanString(b.dateString)) -
              Number(formatKoreanDateToCleanString(a.dateString)),
          )
          .map((post) => (
            <div key={post.title}>
              <div className='my-2 h-[1%] w-full border border-[#ebebeb]'></div>
              <PostItem
                category={post.category}
                tags={post.tags}
                title={post.title}
                description={post.description}
                createdAt={post.dateString}
                url={post.url}
              />
            </div>
          ))}
      </div>
      <PostFooter />
    </>
  );
};

export default Home;
