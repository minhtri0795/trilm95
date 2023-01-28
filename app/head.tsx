import DefaultTags from "./DefaultTags";
export default function Head({ params }: { params: { slug: string } }) {
  return (
    <>
      <title>Home</title>
      <DefaultTags />
    </>
  );
}
