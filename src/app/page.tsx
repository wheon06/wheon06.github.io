import { getPostList } from '@/app/util/getPostList';
import { PostItem } from '@/app/components/post-item';
import { PostType } from '@/app/types/post-type';

interface Props {
  category?: string;
}

const Home = async ({ category }: Props) => {
  const postList: PostType[] = await getPostList(category);

  return (
    <>
      <div className='mx-auto flex max-w-screen-md flex-col gap-2.5 px-5 py-10'>
        <h2 className='text-3xl font-bold text-[#303030]'>
          {"HEEYEON'S BLOG"}
        </h2>
        {postList.map((post) => (
          <>
            <div className='my-2 h-[1%] w-full border border-[#ebebeb]'></div>
            <PostItem
              tags={post.tags}
              title={post.title}
              description={post.description}
              createdAt={post.dateString}
              url={post.url}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default Home;
