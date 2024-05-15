import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import AssignmentMarking from "./AssignmentMarking";
import { Helmet } from "react-helmet-async";

const PendingAssignments = () => {
    const { submissions, user } = useContext(AuthContext);
    const [selectedAssignment, setSelectedAssignment] = useState(null);

    const pendingAssignments = submissions?.filter(e => e.status === 'pending' && e.creatorEmail === user.email);

    const openMarkingModal = (assignment) => {
        setSelectedAssignment(assignment);
    }

    const closeMarkingModal = () => {
        setSelectedAssignment(null);
    }

    return (
        <>
            <Helmet>
                <title>Study Buddies | Pending Assignments</title>
            </Helmet>
            <div className="dark:text-white">
            <h1 className="text-2xl font-bold text-center mb-6 dark:text-white">Pending Assignment: {pendingAssignments?.length}</h1>
            <div className="grid grid-cols-4 items-center border-b-2 py-4 font-bold">
                <h1>Title</h1>
                <p className="place-self-center">Marks</p>
                <p className="place-self-center">Examinee</p>
            </div>
            {
                pendingAssignments?.map((assignment, idx) => (
                    <div key={idx} className="grid grid-cols-4 items-center border-b py-4 ">
                        <h1>{assignment.title}</h1>
                        <p className="place-self-center">{assignment.totalMarks}</p>
                        <p className="place-self-center">{assignment.name}</p>

                        {/* Button to open the assignment marking modal */}
                        <button onClick={() => openMarkingModal(assignment)} className="w-fit p-2 text-xs md:text-sm rounded bg-primary text-white md:place-self-end">Give Mark</button>

                        {/* Modal for assignment marking */}
                        {selectedAssignment === assignment && <AssignmentMarking submittedData={selectedAssignment} onClose={closeMarkingModal} />}
                    </div>
                ))
            }
        </div>
        </>
    );
};

export default PendingAssignments;
