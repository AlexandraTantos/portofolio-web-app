import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import PropTypes from "prop-types";

const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className=" p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose text-justify">{text}</p>
        <div className="mt-4 flex gap-x-4">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} live website in a new tab`}
            >
              <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} source code on GitHub (opens in a new tab)`}
            >
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

ProjectsCard.propTypes = {
  url: PropTypes.string,
  img: PropTypes.string.isRequired,
  github: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default ProjectsCard;
