import Hero from "~/components/Hero";
import FeaturedPosts from "~/components/FeaturedPosts";
export default async function Page() {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl lg:max-w-3xl mx-auto pb-16">
      <Hero />
      <FeaturedPosts />
    </div>
  );
}
