import { TagList } from '@/app/components/tag-list';

interface Props {
  category: string;
  tags?: string[];
  title: string;
  description: string;
  createdAt: string;
  url?: string;
}

export const PostItem = ({
  category,
  tags,
  title,
  description,
  createdAt,
  url,
}: Props) => {
  return (
    <a href={url} className='flex flex-col gap-1 rounded-xl'>
      <div className='flex gap-1.5'>
        <h3 className='rounded-md bg-green-200 px-1.5 py-1 text-[10px] font-semibold text-green-600'>
          {category}
        </h3>
        <TagList labels={tags} />
      </div>
      <div className='flex flex-col'>
        <h2 className='text-2xl font-semibold text-[#303030]'>{title}</h2>
        <div className='flex w-full justify-between'>
          <h3 className='text-[#a4a4a4]'>{description}</h3>
          <p className='text-xs font-semibold text-[#a4a4a4]'>{createdAt}</p>
        </div>
      </div>
    </a>
  );
};
