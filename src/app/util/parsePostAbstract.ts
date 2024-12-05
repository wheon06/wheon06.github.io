const BASE_PATH = '/src/app/posts';

export const parsePostAbstract = (postPath: string) => {
  const filePath = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, '')
    .replace('.mdx', '');

  const [category, slug] = filePath.split('/');

  const url = category + '/' + slug;

  return { url, category, slug };
};
