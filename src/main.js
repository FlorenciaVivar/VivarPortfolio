import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Index from "./Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectsDetail } from "./ProjectsDetail";
import { NotFound } from "./Notfound";
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Index, {}) }), _jsx(Route, { path: "/proyecto/:slug", element: _jsx(ProjectsDetail, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }) }));
