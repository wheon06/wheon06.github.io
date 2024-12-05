import { sync } from 'glob';
import path from 'path';

const BASE_PATH = '/src/app/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const getPostPaths = () => {
  const folder = '**';
  return sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
};
