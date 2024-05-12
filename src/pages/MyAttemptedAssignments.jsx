import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const MyAttemptedAssignments = () => {
    const { submissions, user } = useContext(AuthContext);
    const filteredData = submissions?.filter((data) => data.email === user.email);
    // console.log(filteredData);

    return (
        <>
            <h1 className=" text-center font-bold text-2xl mb-6">My Assignments</h1>

            <div className=" grid grid-cols-6 gap-2 font-bold border-b-2 text-xs md:text-base">
                <p className=" py-2 col-span-2">Title</p>
                <p className=" py-2">Status</p>
                <p className=" py-2">Marks</p>
                <p className=" py-2">Obtained</p>
                <p className=" py-2">Feedback</p>
            </div>
            {
                filteredData?.map((e, idx) => (
                    <div key={idx} className=" grid grid-cols-6 gap-2 border-b text-xs md:text-base">
                        <p className=" py-2 col-span-2">{e.title}</p>
                        {
                            e.status === 'pending' && <p className="py-2 text-orange-500">{e.status}</p>
                        }
                        {
                            e.status === 'completed' && <p className="py-2 text-green-500">{e.status}</p>
                        }
                        <p className=" py-2">{e.totalMarks}</p>
                        <p className=" py-2">{e.obtainedMarks}</p>
                        <p className=" py-2">{e.feedback}</p>
                    </div>
                ))
            }
        </>
    );
};

export default MyAttemptedAssignments;