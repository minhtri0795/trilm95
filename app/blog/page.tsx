import Headings from "../../components/Headings";
import { allPosts } from "contentlayer/generated";
function Blog() {
  return (
    <div className="flex flex-col items-start justify-center max-w-2xl lg:max-w-3xl w-full mx-auto mb-16">
      <Headings.H1>Blog</Headings.H1>
      <Headings.H2>
        Personal documentary: 100% authentic, good for inspiration.
      </Headings.H2>
      {allPosts.map((post) => {
        return (
          <article className="mt-8 md:mt-10">
            <a href={post.url}>
              <h4 className="font-semibold text-lg leading-5 dark:text-gray-200 sm:text-xl">
                {post.title}
              </h4>
              <p className="mt-2 text-sm line-clamp-2 text-gray-500 sm:text-base">
                {post.excerpt}
              </p>
            </a>
          </article>
        );
      })}
    </div>
  );
}

export default Blog;
