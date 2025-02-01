import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="bg-teal-500 py-24">
        <div className="flex items-center justify-center py-16">
          <img
            className="w-60"
            src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
            alt="avatar"
          />
        </div>
        <h1 className="text-center text-5xl my-5 text-white font-bold">
          start Framework
        </h1>
        <div className="flex items-center justify-center my-2">
          <div className="line"></div>
          <div className="mb-2">
            <i className="fa-solid fa-star fa-xl text-white"></i>{" "}
          </div>
          <div className="line"></div>
        </div>
        <h1 className="text-center text-xl my-5 text-white font-thin">
          Graphic Artist - Web Designer - Illustrator
        </h1>
      </div>
    </>
  );
}
