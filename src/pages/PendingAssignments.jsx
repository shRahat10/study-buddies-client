import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import AssignmentMarking from "./AssignmentMarking";


const PendingAssignments = () => {
    const { submissions, data } = useContext(AuthContext);
    const [showMarkingModal, setShowMarkingModal] = useState(false);

    const pendingAssignments = submissions?.filter(e => e.status === 'pending');
    // console.log(pendingAssignments);

    const openMarkingModal = () => {
        setShowMarkingModal(true);
    }

    return (
        <div>
            <div className=" grid grid-cols-4 items-center border-b-2 py-4 font-bold">
                <h1>Title</h1>
                <p className=" place-self-center">Marks</p>
                <p className=" place-self-center">Examinee</p>
            </div>
            {
                pendingAssignments?.map((e, idx) => (
                    <div key={idx} className=" grid grid-cols-4 items-center border-b py-4 ">
                        <h1>{e.title}</h1>
                        <p className=" place-self-center">{e.totalMarks}</p>
                        <p className=" place-self-center">{e.name}</p>

                        {/* Button to open the assignment marking modal */}
                        <button onClick={openMarkingModal} className=" w-fit p-2 text-xs md:text-sm rounded bg-primary text-white md:place-self-end">Give Mark</button>

                        {/* Modal for assignment marking */}
                        {showMarkingModal && <AssignmentMarking submittedData={e} onClose={() => setShowMarkingModal(false)} />}
                    </div>
                ))
            }
        </div>
    );
};

export default PendingAssignments;