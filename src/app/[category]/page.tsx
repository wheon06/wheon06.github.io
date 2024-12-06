import Home from '@/app/page';
import { getAllFolderNames } from '@/app/util/getAllFolderNames';
import NotFound from '@/app/404';

interface Props {
  params: { category: string };
}

export async function generateStaticParams() {
  const categoryNameList = getAllFolderNames('src/app/posts');
  return categoryNameList.map((category) => ({
    category: category,
  }));
}

const Category = async ({ params }: Props) => {
  const { category } = params;

  const categoryNameList = getAllFolderNames('src/app/posts');
  if (!categoryNameList.includes(decodeURIComponent(category)))
    return NotFound();

  return <Home category={category} />;
};

export default Category;
