import Banner from "./Banner";
import Faq from "./Faq";
import Features from "./Features";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Study Buddies | Home</title>
            </Helmet>
            <div className=" space-y-10">
                <Banner></Banner>
                <Features></Features>
                <Faq></Faq>
            </div>
        </>
    );
};

export default Home;