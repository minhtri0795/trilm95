const Headings = ({ children }) => <hgroup>{children}</hgroup>;

Headings.H1 = ({ children }) => (
  <h1 className="font-extrabold text-3xl text-gray-900 dark:text-gray-100 sm:text-4xl md:text-6xl leading-[40px] md:leading-[60px]">
    {children}
  </h1>
);

Headings.H2 = ({ children }) => (
  <h2 className="text-sm sm:text-lg mt-4 md:mt-6">{children}</h2>
);

Headings.H3 = ({ children }) => (
  <h3 className="font-bold text-2xl md:text-4xl mt-2 mb-6">{children}</h3>
);

export default Headings;
