import Bg from "../public/bg-comming-soon.webp";
function CommingSoon() {
  return (
    <section
      style={{ backgroundImage: `url("${Bg.src}")` }}
      className="text-7xl xl:text-8xl text-center h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat"
    >
      <h1>Great things coming soon.</h1>
      <span className="px-5 text-lg xl:text-xl block mt-16">
        We are a small and growing consulting firm with big ideas.
      </span>
    </section>
  );
}

export default CommingSoon;
