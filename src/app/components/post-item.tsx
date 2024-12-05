import { TagList } from '@/app/components/tag-list';

interface Props {
  tags?: string[];
  title: string;
  description: string;
  createdAt: string;
  url: string;
}

export const PostItem = ({
  tags,
  title,
  description,
  createdAt,
  url,
}: Props) => {
  return (
    <a href={url} className='flex flex-col gap-1 rounded-xl'>
      <div className='flex gap-1.5'>
        <TagList labels={tags} />
      </div>
      <div className='flex flex-col'>
        <h2 className='text-2xl font-semibold text-[#303030]'>{title}</h2>
        <h3>{description}</h3>
      </div>

      <p className='text-xs font-semibold text-[#a4a4a4]'>{createdAt}</p>
    </a>
  );
};
