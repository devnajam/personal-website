interface Props {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  mode: string;
  bullets: string[];
}

export const ExperienceCard: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center text-lg font-bold">
        <h2>{props.company}</h2>
        <div className="flex items-center gap-2">
          <div>{props.startDate}</div>
          <div>-</div>
          <div>{props.endDate}</div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h3>{props.position}</h3>
        <div>{props.mode}</div>
      </div>
      <ul className="list-disc mt-4 pl-2 list-inside">
        {props.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};
