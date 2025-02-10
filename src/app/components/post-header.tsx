import Link from 'next/link';
import { FaGithubSquare } from 'react-icons/fa';

export const PostHeader = () => {
  return (
    <div className='flex w-full justify-between'>
      <a href='/' className='text-3xl font-bold text-[#303030] '>
        HEEYEON'S BLOG
      </a>
      <Link href='https://github.com/wheon06'>
        <FaGithubSquare size={36} className='text-[#303030] ' />
      </Link>
    </div>
  );
};
