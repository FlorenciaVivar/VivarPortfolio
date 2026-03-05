import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Index from "./Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ProjectsDetail} from "./ProjectsDetail";
import {NotFound} from "./Notfound";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/proyecto/:slug" element={<ProjectsDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
