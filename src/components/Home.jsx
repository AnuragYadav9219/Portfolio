const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200"
    >
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          Hi, I'm <span className="text-blue-600">Anurag Yadav</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-600">
          Full Stack Developer | Problem Solver | Tech Enthusiast
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-full shadow hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;