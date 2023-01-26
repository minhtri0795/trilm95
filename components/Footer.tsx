import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const socialURLs = [
  `https://twitter.com/min_tri95`,
  `https://github.com/minhtri0795`,
  `https://linkedin.com/in/minhtri0795`,
];
const renderIcon = (url: string) => {
  const size = "1.5em";
  if (url.includes("twitter"))
    return <FiTwitter className="stroke-current" size={size} />;
  if (url.includes("github"))
    return <FiGithub className="stroke-current" size={size} />;
  if (url.includes("linkedin"))
    return <FiLinkedin className="stroke-current" size={size} />;
};
const getLabel = (url: string) => {
  if (url.includes("twitter")) return `Twitter @min_tri95`;
  if (url.includes("github")) return `Github @minhtri0795`;
  if (url.includes("linkedin")) return `LinkedIn @minhtri0795`;
};
const Footer = () => (
  <footer className="text-sm  px-4 pt-10 pb-12 sm:pt-14 sm:pb-16 border-t border-gray-500 lg:px-0 bg-slate-600">
    <div className="max-w-xl mx-auto">
      <p className="font-semibold ">About this place</p>
      <p className="mt-2">Welcome to my digital garden 👋🏻</p>
      <p className="mt-1">
        I'm Tri, a web developer. On this site, I occasionally write programming
        tutorials and lessons I learned from few year working.
      </p>
      <nav className="mt-6">
        <p className="mt-2">Everywhere I'm online, I'm @minhtri0795.</p>
        <div className="mt-4 flex flex-row space-x-5">
          {socialURLs.map((url) => (
            <a
              key={url}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
              title={getLabel(url)}
              aria-label={getLabel(url)}
              href={url}
            >
              {renderIcon(url)}
            </a>
          ))}
        </div>
      </nav>
    </div>
  </footer>
);

export default Footer;
