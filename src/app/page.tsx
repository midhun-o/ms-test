import CareerSection from "./components/CareerSection/CareerSection";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import Footer from "./components/Footer/Footer";
import GallerySection from "./components/GallerySection/GallerySection";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import InformationSection from "./components/InformationSection/InformationSection";
import InsightSection from "./components/InsightSection/InsightSection";
import SliderSection from "./components/SliderSection/SliderSection";
import StatisticsSection from "./components/StatisticsSection/StatisticsSection";

export default function Home() {
  return (
    <div className="mx-auto">
      <HeroBanner></HeroBanner>
      <FeatureSection></FeatureSection>
      <GallerySection></GallerySection>
      <StatisticsSection></StatisticsSection>
      <InformationSection></InformationSection>
      <SliderSection></SliderSection>
      <InsightSection></InsightSection>
      <CareerSection></CareerSection>
      <Footer></Footer>
  </div>
  );
}
