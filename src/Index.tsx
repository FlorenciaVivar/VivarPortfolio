
import {Toaster} from "sonner";
import {HeaderComponent} from "./components/HeaderComponent";
import {HeroComponent} from "./components/HeroComponent";
import {AboutComponent} from "./components/AboutComponent";
import {ProjectsComponent} from "./components/ProjectsComponent";
import {TechnologiesComponent} from "./components/TechnologiesComponent";
import {ContactComponent} from "./components/ContactComponent";
import {FooterComponent} from "./components/FooterComponent";

const Index = () => (
    <div className="min-h-screen bg-background">
            <Toaster richColors position="top-right" />
        <HeaderComponent />
        <HeroComponent />
        <AboutComponent />
        <ProjectsComponent />
        <TechnologiesComponent />
        <ContactComponent />
        <FooterComponent />
    </div>
);

export default Index;