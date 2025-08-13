import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/utils"; // assuming you use cn for class merging

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          "text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 mt-10",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          "text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mt-10 mb-4",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn(
          "text-2xl lg:text-3xl font-medium tracking-tight text-foreground mt-8 mb-3",
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }) => (
      <h4
        className={cn(
          "text-xl lg:text-2xl font-medium text-foreground mt-6 mb-2",
          className
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p
        className={cn(
          "text-base lg:text-lg text-foreground/80 leading-relaxed mb-4",
          className
        )}
        {...props}
      />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "border-l-4 pl-4 italic text-muted-foreground my-6 border-border",
          className
        )}
        {...props}
      />
    ),
    ul: ({ className, ...props }) => (
      <ul
        className={cn(
          "list-disc pl-6 text-foreground/80 space-y-2 mb-4",
          className
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }) => (
      <ol
        className={cn(
          "list-decimal pl-6 text-foreground/80 space-y-2 mb-4",
          className
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }) => (
      <li className={cn("leading-relaxed", className)} {...props} />
    ),
    code: ({ className, ...props }) => (
      <code
        className={cn(
          "bg-muted px-1.5 py-1 rounded text-sm font-mono text-foreground/90",
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }) => (
      <pre
        className={cn(
          "bg-muted rounded-md p-4 overflow-x-auto text-sm text-foreground",
          className
        )}
        {...props}
      />
    ),
    strong: ({ className, ...props }) => (
      <strong
        className={cn("font-semibold text-foreground", className)}
        {...props}
      />
    ),
    em: ({ className, ...props }) => (
      <em className={cn("italic text-foreground", className)} {...props} />
    ),
    hr: ({ className, ...props }) => (
      <hr className={cn("my-8 border-border", className)} {...props} />
    ),
    a: ({ className, ...props }) => (
      <a
        className={cn(
          "text-primary underline underline-offset-4 hover:text-primary/80",
          className
        )}
        {...props}
      />
    ),
    table: ({ className, ...props }) => (
      <table
        className={cn(
          "w-full text-left text-sm border-collapse border border-border my-6",
          className
        )}
        {...props}
      />
    ),
    thead: ({ className, ...props }) => (
      <thead className={cn("bg-muted text-foreground", className)} {...props} />
    ),
    tbody: ({ className, ...props }) => (
      <tbody className={cn("text-foreground/80", className)} {...props} />
    ),
    tr: ({ className, ...props }) => (
      <tr className={cn("border-b border-border", className)} {...props} />
    ),
    th: ({ className, ...props }) => (
      <th className={cn("px-4 py-2 font-medium", className)} {...props} />
    ),
    td: ({ className, ...props }) => (
      <td className={cn("px-4 py-2", className)} {...props} />
    ),
    section: ({ className, ...props }) => (
      <section className={cn("my-8", className)} {...props} />
    ),
    article: ({ className, ...props }) => (
      <article className={cn("prose prose-invert", className)} {...props} />
    ),
  };
}
