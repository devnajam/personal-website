import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import { getAllBlogPostSlugs, getBlogPostBySlug } from "@/lib/blog";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const { metadata } = post;

  return {
    title: `${metadata.title} | Najam Iftikhar`,
    description: metadata.excerpt,
    authors: [{ name: metadata.author }],
    keywords: [
      metadata.category,
      metadata.subcategory,
      ...(metadata.tags || []),
    ],
    openGraph: {
      title: metadata.title,
      description: metadata.excerpt,
      type: "article",
      authors: [metadata.author],
      tags: [metadata.category, metadata.subcategory, ...(metadata.tags || [])],
      publishedTime: metadata.publishedAt,
      modifiedTime: metadata.updatedAt,
      ...(metadata.coverImage && {
        images: [{ url: metadata.coverImage, alt: metadata.title }],
      }),
      siteName: "Najam Iftikhar",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.excerpt,
      ...(metadata.coverImage && { images: [metadata.coverImage] }),
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
    other: {
      "article:author": metadata.author,
      "article:published_time": metadata.publishedAt || "",
      "article:modified_time": metadata.updatedAt || "",
      "article:section": metadata.category,
      "article:tag": metadata.tags?.join(", ") || "",
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllBlogPostSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPost({ params }: { params: any }) {
  const { slug } = await params;

  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const mdxComponents = useMDXComponents({});

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8">
        {post.metadata.coverImage && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.metadata.coverImage}
              alt={post.metadata.title}
              width={1200}
              height={600}
              className="w-full h-64 sm:h-80 object-cover"
              priority
            />
          </div>
        )}

        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/blog#${post.metadata.category.toLowerCase()}`}
              >
                {post.metadata.category}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{post.metadata.subcategory}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl font-bold mb-4">{post.metadata.title}</h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground mb-4">
          <p>
            <strong>Author:</strong> {post.metadata.author}
          </p>
          {post.metadata.publishedAt && (
            <>
              <span className="hidden sm:block">•</span>
              <p>
                Published:{" "}
                {new Date(post.metadata.publishedAt).toLocaleDateString()}
              </p>
            </>
          )}
          {post.metadata.updatedAt &&
            post.metadata.updatedAt !== post.metadata.publishedAt && (
              <>
                <span className="hidden sm:block">•</span>
                <p>
                  Updated:{" "}
                  {new Date(post.metadata.updatedAt).toLocaleDateString()}
                </p>
              </>
            )}
          {post.metadata.readingTime && (
            <>
              <span className="hidden sm:block">•</span>
              <p>{post.metadata.readingTime}</p>
            </>
          )}
        </div>
        <p className="text-lg text-muted-foreground mb-4">
          {post.metadata.excerpt}
        </p>
        {post.metadata.tags && post.metadata.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.metadata.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}
