
import {Toaster} from "sonner";
import {HeaderComponent} from "./pages/Header/HeaderComponent";
import {HeroComponent} from "./pages/Hero/HeroComponent";
import {AboutComponent} from "./pages/About/AboutComponent";
import {ProjectsComponent} from "./pages/Projects/ProjectsComponent";
import {TechnologiesComponent} from "./pages/Technologies/TechnologiesComponent";
import {ContactComponent} from "./pages/Contact/ContactComponent";
import {FooterComponent} from "./pages/Footer/FooterComponent";

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