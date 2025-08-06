import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { CardContainer } from "@/components/cards/card-container/card-container";

interface Props {
  title: string;
  description: string;
  year: string;
  skills: string[];
  githubLink: string;
  demoLink: string;
}

export const ProjectCard: React.FC<Props> = (props) => {
  return (
    <CardContainer className="space-y-2">
      <div className="flex justify-between gap-1 lg:gap-0 lg:flex-row flex-col font-bold text-lg lg:items-center">
        <h2>{props.title}</h2>
        <p className="text-sm lg:text-lg">Completed in {props.year}</p>
      </div>
      <p>{props.description}</p>
      <div className="mt-4">
        <span className="font-bold">Skills used: </span>
        {props.skills.join(", ")}
      </div>
      <div className="flex gap-5 mt-4 text-sm lg:text-base justify-end">
        <a
          href={props.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 hover:underline underline-offset-2 items-center"
        >
          <FaGithub size={18} /> View code
        </a>
        <a
          href={props.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 hover:underline underline-offset-2 items-center"
        >
          <TbExternalLink size={18} /> View live
        </a>
      </div>
    </CardContainer>
  );
};
