
import Banner from "@/components/banner/Banner";
import FeaturedRoomCard from "@/components/Featured";
import HowItWorks from "@/components/HowItWorks";
import WhyStudyNook from "@/components/WhyStudyNook";

// Dynamic Tab

export const metadata = {
  title: "Home | StudyNook",
};

export default function Home() {
  return (
    <div>

      <Banner></Banner>
      <FeaturedRoomCard></FeaturedRoomCard>
      <WhyStudyNook></WhyStudyNook>
      <HowItWorks></HowItWorks>

    </div>
  );
}
