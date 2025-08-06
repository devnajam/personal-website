import { Box } from "@/components/containers/box/box";
import { ProfileAvatar } from "@/components/profile-avatar/profile-avatar";
import { ProfileBanner } from "@/components/profile-banner/profile-banner";
import { CardContainer } from "@/components/cards/card-container/card-container";
import { ExperienceCard } from "@/components/cards/experience-card/experience-card";
import { ProjectCard } from "@/components/cards/project-card/project-card";
import { skills, experience, projects } from "@/data/data";

export default function Home() {
  return (
    <Box>
      <div className="relative">
        <ProfileBanner>Less is more.</ProfileBanner>
        <ProfileAvatar
          image="/images/profile-min.png"
          name="Najam Iftikhar"
          bio="Senior Software Engineer at Swiss Strategic Development Group AG"
          className="absolute top-[60%] lg:top-[70%] lg:left-10 left-4"
        />
      </div>
      <div className="lg:mt-52 mt-40 lg:px-10 flex flex-col">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Professional Summary</h1>
          <CardContainer>
            Senior Software Engineer with 4+ years of experience delivering 25+
            web apps and 5 MVPs that accelerated product validation by 50%.
            Completed 48 self-employed projects with a perfect 5-star client
            rating. Scraped 800K+ leads to boost outreach by 60% and improved
            delivery speed by 50% through DevOps.
          </CardContainer>
        </div>

        <div className="flex flex-col gap-4 pt-10" id="skills">
          <h1 className="text-2xl font-bold">Skills</h1>
          <CardContainer className="space-y-4">
            {skills.map((category) => (
              <div key={category.category}>
                <span className="font-bold tracking-wide">
                  {category.category}:
                </span>{" "}
                {category.skills.join(", ")}
              </div>
            ))}
          </CardContainer>
        </div>

        <div className="flex flex-col gap-4 pt-10" id="experience">
          <h1 className="text-2xl font-bold">Work Experience</h1>
          <div className="space-y-4">
            {experience.map((experience) => (
              <CardContainer key={experience.company}>
                <ExperienceCard {...experience} />
              </CardContainer>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-10" id="education">
          <h1 className="text-2xl font-bold">Education</h1>
          <CardContainer>
            <ExperienceCard
              company="University of Engineering and Technology, Mardan"
              position="BSc in Computer Software Engineering"
              startDate="August 2019"
              endDate="July 2023"
              mode="Full-time"
            >
              <p className="mt-4">
                <span className="font-bold">Relevant Coursework: </span>
                Web Engineering, Software Requirements Engineering, Data
                Structures & Algorithms, Database Systems, Artificial
                Intelligence,
              </p>
              <p>Big Data Analytics, Mobile Application Development.</p>
            </ExperienceCard>
          </CardContainer>
        </div>

        <div className="flex flex-col gap-4 pt-10" id="projects">
          <h1 className="text-2xl font-bold">Project Work</h1>
          <div className="space-y-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
}
