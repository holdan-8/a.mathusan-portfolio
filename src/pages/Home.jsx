import { AboutSection } from "../components/AboutSection";
import { CareerEducationSection } from "../components/CareerEducationSection";
<<<<<<< HEAD
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
=======
>>>>>>> parent of 34880a8 (add the contactsection)
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { SkillsSection } from "../components/SkillsSection";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
            <ThemeToggle />
        {/* Background Effects */}
            <StarBackground />
        {/* Navbar */}
            <Navbar />
        {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <CareerEducationSection />
            </main>
        {/* Footer */}
            <Footer />
    </div>;
};