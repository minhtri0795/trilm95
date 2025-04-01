import Headings from "~/components/Headings";
export default async function Page() {
  return (
    <div className="flex flex-col items-start justify-start max-w-2xl lg:max-w-3xl w-full mx-auto mb-16">
      <Headings.H1>About Me 👋</Headings.H1>
      <p className="mt-5 lg:mt-12 text-[16px] leading-7">
        My name is Minh Tri. I’m currently working as a Development Team Lead at
        Saigon Digital where I’m collaborate with other software developers,
        marketing analysts and directors to plan, develop and
        maintain website for our enterprise clients worldwide.
      </p>
      <p className="text-[16px] leading-7 my-4">
        I am passionate about developing beautiful, engaging, and
        high-performance web applications using the latest web
        technologies and AI integration. I am especially interested in Jamstack and modern web tools,
        so I like to work with Next.js, Gatsby.js,
        TypeScript, Tailwind CSS, Vercel, Strapi, Contentful, and Storybook.
      </p>
      <p className="text-[16px] leading-7 my-4">
        Beyond development, I am also interested in SEO and marketing, and
        have expanded my knowledge and skillset in these areas throughout my
        career.
      </p>
      <p className="text-[16px] leading-7 my-4">
        Currently, I'm working on building open-source projects, learning more
        about AI, and working on full-stack projects. When I'm
        not working, I enjoy running. If you'd like to collaborate on any of
        these projects, or for any other reason, please feel free to reach out
        to me 💖 !
      </p>
    </div>
  );
}
