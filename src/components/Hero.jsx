export default function Hero() {
    return (
      <section className="min-h-screen flex flex-col-reverse md:flex-row  justify-center items-center bg-orange-100 pt-20 px-6 md:px-12 md:text-left text-center ">
        <div className="md:w-1/2 flex flex-col items-center md:items-start mt-6 md:mt-0 md:mr-1">
          <h2 className="text-5xl font-bold mb-12">Hello, I'm Jeph</h2>
          <p className="text-lg text-gray-700 mb-6">
            I'm a passionate software engineer with a knack for creating
            innovative solutions. I specialize in full-stack development, I have
            a solid track record of delivering clean, maintainable code for both
            frontend and backend systems. Continuously learning and adapting,
            I’m deeply committed to staying current with modern technologies and
            best practices to solve complex problems and drive product success.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center md:ml-6">
          <img
            src="public/pic.jpg"
            alt="profile pic"
            className="w-48 h-48 md:w-64 md:h-68 object-cover rounded-full shadow-lg border-4 border-white"
          />
        </div>
      </section>
    );
}