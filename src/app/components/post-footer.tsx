export const PostFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='flex w-full justify-center gap-1 bg-white py-10 text-black'>
      <p>© 2024-{currentYear}. </p>
      <p className='font-semibold'>Heeyeon Lee</p>
      <p>all rights reserved.</p>
    </div>
  );
};
