import Footer from "@/src/components/footer";
import StickyHeader from "@/src/components/header";
import TopHeader from "@/src/components/topheader";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen relative">
      <TopHeader />
      <StickyHeader />
      {children}
      <Footer />
    </div>
  );
};

export default LandingLayout;
