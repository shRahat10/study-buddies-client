import { useLottie } from "lottie-react";
import faq from "../../assets/lottie/faq.json"

const Faq = () => {
    const options = {
        animationData: faq,
        loop: true,
        style: { height: 400 }
    };

    const { View } = useLottie(options);

    return (
        <div className=" grid grid-cols-1 md:grid-cols-5 items-center dark:text-white">
            <div className=" col-span-2">{View}</div>
            <div className="join join-vertical w-full col-span-3">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        How can I join Study Buddies?
                    </div>
                    <div className="collapse-content">
                        <p>To join Study Buddies, simply click on the Sign Up button at the top right corner of the page. Fill out the required information, and you will become a member of our community instantly! Once you are signed up, you can explore all the features and resources available to help you excel in your studies.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        What kind of study materials does Study Buddies offer?
                    </div>
                    <div className="collapse-content">
                        <p>Study Buddies offers a wide range of study materials to cater to different subjects and academic levels. From lecture notes and practice quizzes to study guides and interactive tutorials, you will find everything you need to enhance your learning experience. Our study materials are curated by experts and designed to help you understand complex concepts easily.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        Can I connect with other students on Study Buddies?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, absolutely! Study Buddies is all about connecting students and fostering a collaborative learning environment. You can interact with fellow students through discussion forums, study groups, and live chat features. Share study tips, ask questions, and collaborate on projects to make your learning journey more engaging and enjoyable.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;