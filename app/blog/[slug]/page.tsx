import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { MdxContent } from "components/MdxContent";
import Published from "~/components/Published";
import Tags from "~/components/Tags";
import Headings from "~/components/Headings";
const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(
    ({ url }) => url.replace("/blog/", "") === params.slug
  );
  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="mx-auto max-w-2xl w-full pt-10 pb-16 prose md:prose-md dark:prose-dark">
        <hgroup className="mb-8 md:mb-10">
          <Headings.H1>{post.title}</Headings.H1>
          <Published
            author={{
              name: "Minh-Tri Le",
              avatarURL: "/me.png",
              url: `https://twitter.com/min_tri95`,
            }}
            date={new Date(post.date)}
          />
          {post.tags && <Tags className="mt-2 sm:mt-3" tags={post.tags} />}
        </hgroup>

        <MdxContent code={post.body.code} />
      </article>
    </>
  );
};

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.url,
  }));
}
export default PostLayout;
