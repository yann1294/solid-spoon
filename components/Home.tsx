import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import PalmierLandingPage1 from "../components/landing_page/PalmierLandingPage1";
import PalmierLandingPage2 from "../components/landing_page/PalmierLandingPage2";
import PalmierLandingPage3 from "../components/landing_page/PalmierLandingPage3";
import PalmierLandingPageFooter from "../components/PalmierLandingPageFooter";

const Home: React.FC = () => {


    return (
        <div>
            <main>
                <TopBar/>
                <Navbar/>
                <PalmierLandingPage1/>
                <PalmierLandingPage2/>
                <PalmierLandingPage3/>
                <PalmierLandingPageFooter/>
            </main>

        </div>
    )
}