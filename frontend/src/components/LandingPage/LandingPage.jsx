import React from "react";
import Fitur from "./Fitur/Fitur";
import Footer from "./Footer/Footer";
import NavigationBar from "./NavigationBar/NavigationBar";
import SlideShow from "./SlideShowPage/SlideShow";
import Testimoni from "./Testimoni/Testimoni";

const LandingPage = () => {
    return (
        <>
            <NavigationBar />
            <SlideShow />
            <Fitur />
            <Testimoni />
            <Footer />
        </>
    );
};

export default LandingPage;