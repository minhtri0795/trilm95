import Link from "next/link";
import Headings from "./Headings";
import { FiArrowRight, FiEye } from "react-icons/fi";
function FeaturedPosts() {
  return (
    <div className="">
      <Headings.H3>Featured Posts</Headings.H3>
      <div className="flex gap-6 flex-col md:flex-row">
        <Link
          className="transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]"
          href="/blog/style-guides-component-libraries-design-systems"
        >
          <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
            <div className="flex flex-col md:flex-row justify-between">
              <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
                Everything I Know About Style Guides, Design Systems, and
                Component Libraries
              </h4>
            </div>
            <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
              <FiEye size={"1.3em"} />
              <span className="ml-2 align-baseline capsize">176.175</span>
            </div>
          </div>
        </Link>
        <Link
          className="transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          href="/blog/rust"
        >
          <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
            <div className="flex flex-col md:flex-row justify-between">
              <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
                Rust Is The Future of JavaScript Infrastructure
              </h4>
            </div>
            <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
              <FiEye size={"1.3em"} />
              <span className="ml-2 align-baseline capsize">260.609</span>
            </div>
          </div>
        </Link>
        <Link
          className="transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          href="/blog"
        >
          <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
            <div className="flex flex-col md:flex-row justify-between">
              <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
                Past, Present, and Future of React State Management
              </h4>
            </div>
            <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
              <FiEye size={"1.3em"} />
              <span className="ml-2 align-baseline capsize">148.423</span>
            </div>
          </div>
        </Link>
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
