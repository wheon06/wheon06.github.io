import Home from '@/app/page';
import { findAllCategory } from '@/app/util/findAllCategory';
import NotFound from '@/app/404';

export async function generateStaticParams() {
  const categoryNameList = findAllCategory('src/app/posts');
  return categoryNameList.map((category) => ({
    category: category,
  }));
}

interface Props {
  params: { category: string };
}

const Category = async ({ params }: Props) => {
  const { category } = params;

  const categoryNameList = findAllCategory('src/app/posts');
  if (!categoryNameList.includes(decodeURIComponent(category)))
    return NotFound();

  return <Home params={{ category: decodeURIComponent(category) }} />;
};

export default Category;
