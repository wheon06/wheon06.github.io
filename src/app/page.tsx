import { PostItem } from '@/app/components/post-item';
import { fetcher } from '@/app/util/fetcher';

export default async function Home() {
  const response = await fetcher('/post', 'GET');
  const postDataList = await response.json();

  return (
    <div className='mx-auto flex max-w-screen-md flex-col gap-2.5 px-5 py-10'>
      <h2 className='text-3xl font-bold text-[#303030]'>{"HEEYEON'S BLOG"}</h2>
      {postDataList.map((postData) => (
        <>
          <div className='h-[1%] w-full border border-[#a4a4a4]'></div>
          <PostItem
            title={postData.title}
            tags={['태그1']}
            createdAt={new Date()}
          />
        </>
      ))}
    </div>
  );
}
