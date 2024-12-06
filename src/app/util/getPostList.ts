import fs from 'fs';
import matter from 'gray-matter';
import dayjs from 'dayjs';
import { parsePostAbstract } from '@/app/util/parsePostAbstract';
import { getPostPaths } from '@/app/util/getPostPaths';
import { PostType } from '@/app/types/post-type';

export const getPostList = async (category?: string): Promise<PostType[]> => {
  const paths: string[] = getPostPaths(category);
  return await Promise.all(paths.map((postPath) => parsePost(postPath)));
};

export const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);
  const tags: string[] = data.tags;
  const title: string = data.title;
  const description: string = data.description;
  const dateString = dayjs(data.date).locale('ko').format('YYYY년 MM월 DD일');
  return { tags, title, description, dateString, content };
};

const parsePost = async (postPath: string) => {
  const postAbstract = parsePostAbstract(postPath);
  const postDetail = await parsePostDetail(postPath);
  return { ...postAbstract, ...postDetail };
};
