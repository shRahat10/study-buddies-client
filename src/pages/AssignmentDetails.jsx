import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import AssignmentSubmissionForm from "./AssignmentSubmissionForm ";

const AssignmentDetails = () => {
    const { id } = useParams();
    const { data, user } = useContext(AuthContext);
    const [showSubmissionModal, setShowSubmissionModal] = useState(false);

    const details = data?.find((e) => e._id === id);
    const formattedDate = new Date(details.dueDate).toISOString().split('T')[0];

    const openSubmissionModal = () => {
        setShowSubmissionModal(true);
    }

    return (
        <div className="border p-8 rounded bg-gray-100 dark:bg-transparent dark:text-white">
            <h1 className="text-xl font-semibold mb-4">{details.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <img className="col-span-2 rounded" src={details.photoURL} alt={details.title} />
                <div className="space-y-6">
                    <p className="font-semibold">Posted by: {user.displayName}</p>
                    <p className="font-semibold">Due Date: {formattedDate}</p>
                    <p className="font-semibold">Total Marks: {details.marks}</p>
                    <p className="font-semibold">Difficulty: {details.difficulty}</p>
                </div>
            </div>
            <p className="mb-2"><span className=" font-semibold">Description:</span> {details.description}</p>
            {/* Button to open the assignment submission modal */}
            <button className="bg-primary p-2 text-white rounded" onClick={openSubmissionModal}>Take Assignment</button>
            
            {/* Modal for assignment submission */}
            {showSubmissionModal && <AssignmentSubmissionForm data={details} user={user} onClose={() => setShowSubmissionModal(false)} />}
        </div>
    );
};

export default AssignmentDetails;