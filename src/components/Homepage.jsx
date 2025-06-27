import ChairmanMessage from './ChairmanMessage';
import ConnectSection from './ConnectSection';
import Footer from './Footer';
import HeroSection from './HeroSection';
import LoginButtons from './LoginButtons';
import MissionStatement from './MissionStatement';
import OurVisions from './OurVisions';
import Programs from './Programs';
import Statistics from './Statistics';
import UpcomingEvents from './UpcomingEvents';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white font-[Poppins,sans-serif]">
      <HeroSection />
      <LoginButtons />
      <MissionStatement />
      <Statistics />
      <ChairmanMessage />
      <OurVisions />
      <Programs />
      <UpcomingEvents />
      <ConnectSection />
      <Footer />
    </div>
  );
};

export default Homepage;
