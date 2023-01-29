import { SEO } from "~/components/Seo";

export default function Head() {
  return (
    <SEO
      title="Blog | Minh-Tri Le"
      description="All my blog posts. I write about Web Development and other topics I'm interested in."
      ogImage={{ title: "Posts" }}
    />
  );
}
