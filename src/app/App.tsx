import { FC } from "react";

import Header from "./widgets/Header/Header";
import AboutPage from "./pages/AboutPage/AboutPage";

const App: FC = () => {
    return (
        <>
        <Header/>
        <AboutPage/>
        </>
       
    );
};

export default App;