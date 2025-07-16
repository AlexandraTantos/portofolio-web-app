import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full" alt="about-me-svg" />
        <article>
          <SectionTitle text="About me" />
          <p className="text-slate-600 mt-8 leading-loose">
            Welcome to my digital domain! I&apos;m a Computer Science student
            with a background in physiotherapy—I used to help people move
            better, now I help code run smoother.{" "}
          </p>
          <p className="text-slate-600 mt-8 leading-loose">
            My journey in web development has given me a well-rounded skill set,
            covering both front-end and back-end technologies. I thrive on
            building responsive and dynamic websites using HTML, CSS, and
            JavaScript. React is my go-to framework for creating interactive and
            user-friendly interfaces, while on the back end, I rely on .NET to
            develop scalable, efficient solutions.{" "}
          </p>
          <p className="text-slate-600 mt-8 leading-loose">
            During university, I&apos;ve built multiple applications—both web
            and mobile—including Android apps using Java, and desktop projects
            using C++ or C#. These experiences gave me a solid foundation in
            software development, teamwork, and problem-solving.
          </p>
          <p className="text-slate-600 mt-8 leading-loose">
            I love learning new technologies and turning ideas into functional,
            user-friendly applications. Whether it&apos;s frontend interfaces or
            backend logic, I enjoy building things that are clean, reliable, and
            useful.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
