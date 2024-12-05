import Home from '@/app/page';
import { getAllFolderNames } from '@/app/util/getAllFolderNames';

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

  return <Home category={category} />;
};

export default Category;
