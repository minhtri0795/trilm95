import Hero from "~/components/Hero";
import FeaturedPosts from "~/components/FeaturedPosts";
import Spotify from "~/components/Spotify";
export default async function Page() {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl lg:max-w-3xl mx-auto pb-16">
      <Hero />
      <FeaturedPosts />
      <Spotify/>
    </div>
  );
}
