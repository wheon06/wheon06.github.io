interface Props {
  labels?: string[];
}

export const TagList = ({ labels }: Props) => {
  return (
    <div className='flex gap-1.5'>
      {labels?.map((label, index) => <TagItem key={index} label={label} />)}
    </div>
  );
};

const TagItem = ({ label }: { label: string }) => {
  return (
    <div className='flex rounded-full bg-[#EBF4FF] px-1.5 py-1'>
      <span className='text-[10px] font-semibold text-[#3B82F6]'>#{label}</span>
    </div>
  );
};
