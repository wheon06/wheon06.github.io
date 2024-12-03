import { formatDate } from '@/app/util/format-date';
import { TagList } from '@/app/components/tag-list';

interface Props {
  title: string;
  tags?: string[];
  createdAt: Date;
}

export const PostItem = ({ title, tags, createdAt }: Props) => {
  return (
    <div className='flex flex-col gap-1'>
      <div className='flex gap-1.5'>
        <TagList labels={tags} />
      </div>
      <h2 className='text-2xl font-semibold text-[#303030]'>{title}</h2>
      <p className='text-xs font-semibold text-[#a4a4a4]'>
        {formatDate(createdAt)}
      </p>
    </div>
  );
};
