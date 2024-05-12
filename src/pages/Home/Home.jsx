import Banner from "./Banner";
import Faq from "./Faq";
import Features from "./Features";


const Home = () => {
    return (
        <div className=" space-y-10">
            <Banner></Banner>
            <Features></Features>
            <Faq></Faq>
        </div>
    );
};

export default Home;