import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Index from "./Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ProjectsDetail} from "./pages/ProjectDetail/ProjectsDetail";
import {NotFound} from "./Notfound";
import {ScrollToTop} from "./components/ScrollTop";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/proyecto/:slug" element={<ProjectsDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
