
import {Toaster} from "sonner";
import {HeaderComponent} from "./HeaderComponent";
import {HeroComponent} from "./HeroComponent";
import {AboutComponent} from "./AboutComponent";
import {ProjectsComponent} from "./ProjectsComponent";
import {TechnogiesComponent} from "./TechnogiesComponent";
import {ContactComponent} from "./ContactComponent";
import {FooterComponent} from "./FooterComponent";

const Index = () => (
    <div className="min-h-screen bg-background">
            <Toaster richColors position="top-right" />
        <HeaderComponent />
        <HeroComponent />
        <AboutComponent />
        <ProjectsComponent />
        <TechnogiesComponent />
        <ContactComponent />
        <FooterComponent />
    </div>
);

export default Index;