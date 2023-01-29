import { allPosts } from "contentlayer/generated";
import { SEO } from "~/components/Seo";

type PostPageHeadProps = {
  params: {
    slug: string;
  };
};

export default function PostPageHead({ params }: PostPageHeadProps) {
  const post = allPosts.find(
    ({ url }) => url.replace("/blog/", "") === params.slug
  );

  const { title, excerpt } = post || {
    title: "Post Not Found",
    excerpt: "Post not found",
  };

  return (
    <SEO
      title={`Minh-Tri Le | ${title}`}
      description={excerpt}
      ogType="article"
      ogImage={{
        title,
        subtitle: excerpt,
      }}
    />
  );
}
