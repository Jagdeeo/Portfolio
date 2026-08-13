import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero.jsx";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-[#050909]">

      {/* Light Mode Background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          dark:hidden
        "
        style={{
          backgroundImage: `
            radial-gradient(
              125% 125% at 50% 90%,
              #ffffff 40%,
              #8edcd4 100%
            )
          `,
        }}
      />

      {/* Dark Mode Background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          hidden
          dark:block
        "
        style={{
          backgroundImage: `
            radial-gradient(
              125% 125% at 50% 90%,
              #050909 40%,
              #174542 100%
            )
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />

        <main>
          <section
            id="home"
            className="min-h-screen"
          >
            {/* Hero section */}
          </section>

          <section id="about">
            {/* About */}
          </section>

          <section id="skills">
            {/* Skills */}
          </section>

          <section id="projects">
            {/* Projects */}
          </section>

          <section id="contact">
            {/* Contact */}
          </section>
        </main>
      </div>

    </div>
  );
}

export default App;