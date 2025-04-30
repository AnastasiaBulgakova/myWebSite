import { FC } from "react";
import { Outlet } from "react-router-dom";

import Header from "./widgets/Header/Header";

const App: FC = () => {
    return (
        <>
        <Header/>
       <Outlet/>
        </>
       
    );
};

export default App;