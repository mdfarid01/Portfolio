export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export const siteConfig = {
  name: "Md Farid",
  title: 'Md Farid',
  description: 'Sleek Portfolio Template by @mdfarid01',
  url: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  ogImage: '/meta/opengraph-image.png',
  author: {
  name: "Md Farid",
  twitter: '@MdFarid7886',
  github: 'mdfarid01',
  linkedin: 'md-farid-1aa563291',
  email: 'mdfarid.0118@gmail.com',
  },
  keywords: [
    'portfolio',
    'developer',
    'full-stack',
    'react',
    'nextjs',
    'typescript',
    'web development',
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  '/blog': {
    title: 'Blog - Thoughts & Tutorials',
    description:
      'Read my thoughts, tutorials, and insights on engineering, programming, and web development.',
    keywords: [
      'blog',
      'tutorials',
      'programming',
      'web development',
      'technical writing',
    ],
    ogImage: '/meta/blogs.png',
    twitterCard: 'summary_large_image',
  },


  };
