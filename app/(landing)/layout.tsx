import Footer from "@/src/components/footer";
import StickyHeader from "@/src/components/header";
import ScrollToTopProgress from "@/src/components/scrollButton";
import TopHeader from "@/src/components/topheader";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen relative">
      <TopHeader />
      <StickyHeader />
      {children}
      <Footer />
      <ScrollToTopProgress />
    </div>
  );
};

export default LandingLayout;
