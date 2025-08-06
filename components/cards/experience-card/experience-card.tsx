interface Props {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  mode?: string;
  bullets?: string[];
  children?: React.ReactNode;
}

export const ExperienceCard: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-1 lg:gap-0 lg:justify-between lg:flex-row flex-col lg:items-center text-lg font-bold">
        <h2>{props.company}</h2>
        <div className="flex items-center gap-2 text-sm lg:text-lg">
          <div>{props.startDate}</div>
          <div>-</div>
          <div>{props.endDate}</div>
        </div>
      </div>
      <div className="flex mt-2 lg:mt-0 justify-between items-center">
        <h3>{props.position}</h3>
        {props.mode && <div>{props.mode}</div>}
      </div>
      {props.bullets && (
        <ul className="list-disc mt-4 pl-2 list-inside">
          {props.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}

      {props.children && props.children}
    </div>
  );
};
