import SidePanel from "../components/SidePanel";
import Hero from '../components/Hero';
import Favorites from '../components/Favorites';
import ExperienceSection from '../components/ExperienceSection';

function About() {
    return (
        <div style={{ display: "flex" }}>
            <SidePanel />
            <div style={{ flex: 1 }}>
                <Hero />
                
            </div>
            <div style={{ flex: 1 }}>
                <ExperienceSection />
                <Favorites />
            </div>
        </div>
    );
}

export default About;