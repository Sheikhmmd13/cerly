import HeroSection from "@/components/Hero Section/HeroSection";
import ServicesSection from "@/components/Services Section/ServicesSection";

export default function Home() {
		return (
		<main className="w-full max-w-[1400px] mx-auto h-fit relative overflow-hidden">
			<HeroSection />
			<ServicesSection />
		</main>
	);
}

