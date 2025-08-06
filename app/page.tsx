import { Box } from "@/components/containers/box/box";
import { ProfileAvatar } from "@/components/profile-avatar/profile-avatar";
import { ProfileBanner } from "@/components/profile-banner/profile-banner";
import { CardContainer } from "@/components/cards/card-container/card-container";

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
      <div className="lg:mt-52 mt-40 lg:px-10">
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
      </div>
    </Box>
  );
}
