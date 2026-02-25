import {HeaderComponent} from "./HeaderComponent.tsx";
import {HeroComponent} from "./HeroComponent.tsx";
import {AboutComponent} from "./AboutComponent.tsx";
import {ProjectsComponent} from "./ProjectsComponent.tsx";
import {TechnogiesComponent} from "./TechnogiesComponent.tsx";
import {ContactComponent} from "./ContactComponent.tsx";
import {FooterComponent} from "./FooterComponent.tsx";
import {Toaster} from "sonner";

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