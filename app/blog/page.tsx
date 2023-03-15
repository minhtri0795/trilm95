import Headings from "../../components/Headings";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";
function Blog() {
  return (
    <div className="flex flex-col items-start justify-center max-w-2xl lg:max-w-3xl w-full mx-auto mb-16">
      <Headings.H1>Blog</Headings.H1>
      <Headings.H2>
        Personal documentary: 100% authentic, good for inspiration.
      </Headings.H2>
      {allPosts.map((post) => {
        return (
          <article key={post.title} className="mt-8 md:mt-10">
            <Link href={post.url}>
              <h4 className="font-semibold text-lg leading-5 dark:text-gray-200 sm:text-xl">
                {post.title}
              </h4>
              <p className="mt-2 text-sm line-clamp-2 text-gray-500 sm:text-base">
                {post.excerpt}
              </p>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
export const metadata = {
  title:"Blog | Minh-Tri Le",
  description:"All my blog posts. I write about Web Development and other topics I'm interested in."
};
export default Blog;
