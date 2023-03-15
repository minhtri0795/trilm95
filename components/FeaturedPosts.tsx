import Link from "next/link";
import Headings from "./Headings";
import { FiArrowRight, FiEye } from "react-icons/fi";
import { allPosts } from "contentlayer/generated";
function FeaturedPosts() {
  return (
    <div className="">
      <Headings.H3>Featured Posts</Headings.H3>
      <div className="flex gap-6 flex-col md:flex-row">
        {allPosts.map((post) => {
          return (
            <Link
              className="transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]"
              href={post.url}
              key={post.title}
            >
              <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
                <div className="flex flex-col md:flex-row justify-between">
                  <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
                    {post.title}
                  </h4>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Link
        className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
        href="/blog"
      >
        Read all posts <FiArrowRight />
      </Link>
    </div>
  );
}

export default FeaturedPosts;
