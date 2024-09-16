import FeatureSection from "./components/FeatureSection/FeatureSection";
import GallerySection from "./components/GallerySection/GallerySection";
import HeroBanner from "./components/HeroBanner/HeroBanner";

export default function Home() {
  return (
    <div className="mx-auto">
      <HeroBanner></HeroBanner>
      <FeatureSection></FeatureSection>
      <GallerySection></GallerySection>
  </div>
  );
}
