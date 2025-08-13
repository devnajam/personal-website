import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPostMetadata {
  title: string;
  excerpt: string;
  author: string;
  category: string;
  subcategory: string;
  publishedAt?: string;
  updatedAt?: string;
  tags?: string[];
  coverImage?: string;
  readingTime?: string;
}

export interface BlogPost {
  slug: string;
  metadata: BlogPostMetadata;
  content: string;
}

const BLOG_POSTS_DIR = path.join(process.cwd(), "blog-posts");

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_POSTS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_POSTS_DIR);
  const posts: BlogPost[] = [];

  for (const file of files) {
    if (file.endsWith(".mdx")) {
      const slug = file.replace(/\.mdx$/, "");
      const post = getBlogPostBySlug(slug);
      if (post) {
        posts.push(post);
      }
    }
  }

  return posts;
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_POSTS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: metadata, content } = matter(fileContent);

    return {
      slug,
      metadata: metadata as BlogPostMetadata,
      content,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export function getAllBlogPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_POSTS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_POSTS_DIR);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
