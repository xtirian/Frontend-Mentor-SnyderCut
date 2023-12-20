import Button from "@/components/button";
import ContentView from "@/views/content-view";
import HeroBanner from "@/views/hero-banner";
import PropertView from "@/views/property-view";

export default function Home() {
  return (
    <main>
    <HeroBanner />   
    <ContentView /> 
    <PropertView />
    </main>
  )
}
