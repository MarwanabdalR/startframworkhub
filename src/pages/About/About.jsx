export default function About() {
  return (
    <>
      <section className="bg-teal-500 py-24">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto  text-center">
            <h1 className="text-center text-5xl my-5 text-white font-bold">
              about component
            </h1>

            <div className="flex items-center justify-center my-2">
              <div className="line"></div>
              <div className="mb-2">
                <i className="fa-solid fa-star fa-xl text-white"></i>{" "}
              </div>
              <div className="line"></div>
            </div>

            <div className="mt-8 flex  justify-between gap-6">
              <p className="text-2xl my-5 text-white font-medium sm:w-auto text-left">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>

              <p className="text-2xl my-5 text-white font-medium sm:w-auto text-left">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
