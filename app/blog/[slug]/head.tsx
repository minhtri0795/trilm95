import DefaultTags from "../../DefaultTags";
export default function Head({ params }: { params: { slug: string } }) {
  return (
    <>
      <title>Blog</title>
      <DefaultTags />
    </>
  );
}
