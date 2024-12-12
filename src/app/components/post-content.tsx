import { MDXRemote } from 'next-mdx-remote/rsc';
import { PostType } from '@/app/types/post-type';
import rehypeSlug from 'rehype-slug';
import remarkA11yEmoji from '@fec/remark-a11y-emoji';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

export const PostContent = async ({ post }: { post: PostType }) => {
  return (
    <div className='prose min-w-full'>
      <MDXRemote
        source={post.content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkA11yEmoji, remarkBreaks],
            rehypePlugins: [
              [
                // @ts-ignore
                rehypePrettyCode,
                {
                  theme: { dark: 'github-dark-dimmed', light: 'github-light' },
                },
              ],
              rehypeSlug,
            ],
          },
        }}
      />
    </div>
  );
};
