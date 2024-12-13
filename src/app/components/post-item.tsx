import { TagList } from '@/app/components/tag-list';
import { CategoryList } from '@/app/posts/category-list';
import { TagKeysType } from '@/app/types/tag-keys-type';

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
    <a href={'/blog/' + url} className='flex flex-col gap-1 rounded-xl'>
      <div className='flex gap-1.5'>
        <h3
          className={`rounded-md px-1.5 py-1 text-[10px] font-semibold ${Object.keys(CategoryList).includes(category) ? CategoryList[category as TagKeysType].color : 'bg-gray-200 text-gray-800'}`}
        >
          {CategoryList[category as TagKeysType].label}
        </h3>
        <TagList labels={tags} />
      </div>
      <div className='flex flex-col'>
        <h2 className='font-semibold text-[#303030] xl:text-2xl'>{title}</h2>
        <div className='flex w-full items-end justify-between'>
          <h3 className='truncate text-sm text-[#a4a4a4] xl:text-[16px]'>
            {description}
          </h3>
          <p className='min-w-fit text-xs font-semibold text-[#a4a4a4]'>
            {createdAt}
          </p>
        </div>
      </div>
    </a>
  );
};
