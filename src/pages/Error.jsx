import { useLottie } from "lottie-react";
import error_lottie from "../assets/lottie/error_lottie.json";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { Helmet } from "react-helmet-async";

const Error = () => {
    const options = {
        animationData: error_lottie,
        loop: true,
        style: { height: 400, }
    };
    const { View } = useLottie(options);
    return (
        <div>
            <Helmet>
                <title>Study Buddies | Error</title>
            </Helmet>
            <div className="flex flex-col justify-center items-center space-y-5 mt-20 ">
                {View}
                <div className="text-center dark:text-white">
                    <p className="text-lg text-gray-700">Oops! It looks like the page you are looking for does not exist.</p>
                    <p className="text-lg text-gray-700">Do not worry, you can navigate back to the home page using the button below.</p>
                </div>
                <Link to={"/"}><button className="flex gap-2 items-center bg-primary hover:bg-white hover:border hover:border-primary hover:text-primary text-white font-bold py-2 px-4 rounded-lg">
                    <GoArrowLeft />
                    Back to Home
                </button></Link>
            </div>
        </div>
    );
};

export default Error;