import { Metadata } from "next";
import Link from "next/link";
import { Box } from "@/components/containers/box/box";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Najam Iftikhar | Blog",
  description:
    "Technical articles on software engineering, backend development, frontend development, and algorithmic problem-solving. Covering Node.js, TypeScript, database optimization, clean architecture patterns, API design, microservices, and advanced programming concepts with practical code examples.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  const groupedPosts = posts.reduce((acc, post) => {
    const category = post.metadata.category;
    const subcategory = post.metadata.subcategory;

    if (!acc[category]) {
      acc[category] = {};
    }
    if (!acc[category][subcategory]) {
      acc[category][subcategory] = [];
    }
    acc[category][subcategory].push(post);

    return acc;
  }, {} as Record<string, Record<string, typeof posts>>);

  return (
    <Box>
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Technical articles on software engineering, backend development,
          frontend development, and algorithmic problem-solving. Covering
          Node.js, TypeScript, database optimization, clean architecture
          patterns, API design, microservices, and advanced programming concepts
          with practical code examples.
        </p>
      </header>

      <div className="space-y-12">
        {Object.keys(groupedPosts).length === 0 ? (
          <p className="text-muted-foreground">No blog posts found.</p>
        ) : (
          Object.entries(groupedPosts).map(([category, subcategories]) => (
            <section key={category} id={category.toLowerCase()}>
              <h2 className="text-3xl font-bold mb-6">{category}</h2>

              <div className="space-y-8">
                {Object.entries(subcategories).map(([subcategory, posts]) => (
                  <div key={subcategory}>
                    <h3 className="text-xl font-semibold mb-4 text-muted-foreground">
                      {subcategory}
                    </h3>

                    <ol className="space-y-2">
                      {posts.map((post, index) => (
                        <li key={post.slug} className="flex items-start gap-3">
                          <span className="text-muted-foreground text-sm mt-[2px]">
                            {index + 1}.
                          </span>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-foreground hover:text-primary transition-colors hover:underline"
                          >
                            {post.metadata.title}
                          </Link>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </Box>
  );
}
