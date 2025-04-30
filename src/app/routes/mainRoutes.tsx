import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import AboutPage from "../pages/AboutPage/AboutPage";
import Projects from "../pages/Projects/Projects";
import Skills from "../pages/Skills/Skills";
import Contacts from "../pages/Contacts/Contacts";
import Landing from "../pages/Landing/Landing";

export const MainRoutes = createBrowserRouter([
    {
        errorElement: <div>Страница не найдена!</div>,
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <AboutPage/>,
            },
            {
                path: 'projects',
                element: <Projects/>,
            },
            {
                path: 'skills',
                element: <Skills/>,
            },
            {
                path: 'personal',
                element: <Landing/>
            },
            {
                path: 'contacts',
                element: <Contacts/>,
            }

        ]
    }
]);