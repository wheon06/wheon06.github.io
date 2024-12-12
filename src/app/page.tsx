import { getAllFolderNames } from '@/app/util/getAllFolderNames';
import { getPostList } from '@/app/util/getPostList';
import { PostItem } from '@/app/components/post-item';
import { PostType } from '@/app/types/post-type';

export async function generateStaticParams() {
  const categoryNameList = getAllFolderNames('src/app/posts');
  return categoryNameList.map((category) => ({
    category,
  }));
}

interface Props {
  params: { category: string };
}

const Home = async ({ params }: Props) => {
  const categoryNameList = getAllFolderNames('src/app/posts');
  const category = params.category || '**';
  const postList: PostType[] = await getPostList(category);
  console.log(categoryNameList);

  return (
    <div className='mx-auto flex max-w-screen-md flex-col gap-2.5 px-5 py-10'>
      <h2 className='text-3xl font-bold text-[#303030]'>HEEYEON'S BLOG</h2>
      <div className='flex w-full gap-2'>
        <a
          href='/'
          className={`rounded-xl p-2 font-semibold text-black hover:bg-[#ebebeb] ${category === '**' ? 'bg-[#ebebeb]' : ''}`}
        >
          전체
        </a>
        {categoryNameList.map((categoryName) => (
          <a
            key={categoryName}
            href={`${categoryName}`}
            className={`rounded-xl p-2 font-semibold text-black hover:bg-[#ebebeb] ${category === categoryName ? 'bg-[#ebebeb]' : ''}`}
          >
            {categoryName}
          </a>
        ))}
      </div>
      {postList.map((post) => (
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
  );
};

export default Home;
