import Head from "next/head";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";

const PostLayout = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const post = allPosts.find(
    ({ url }) => url.replace("/blog/", "") === params.slug
  );
  console.log(allPosts);
  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center"></div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">Post 1</h1>
          {/* <time dateTime={post.date} className="text-sm text-slate-600">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time> */}
        </div>
        <div
          className="cl-post-body"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
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
