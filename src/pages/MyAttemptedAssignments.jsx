import { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { GrDocumentPdf } from "react-icons/gr";
import { IoMdCloseCircle } from "react-icons/io";

const MyAttemptedAssignments = () => {
    const { submissions, user } = useContext(AuthContext);
    const filteredData = submissions?.filter((data) => data.email === user.email);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pdfLink, setPdfLink] = useState("");

    const toggleModal = (link) => {
        setPdfLink(link);
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <h1 className="text-center font-bold text-2xl mb-6">My Assignments</h1>

            <div className="grid grid-cols-12 gap-2 font-bold border-b-2 text-xs md:text-base">
                <div></div>
                <p className="py-2 col-span-3">Title</p>
                <p className="py-2 col-span-2">Status</p>
                <p className="py-2 col-span-2">Marks</p>
                <p className="py-2 col-span-2">Obtained</p>
                <p className="py-2 col-span-2">Feedback</p>
            </div>
            {
                filteredData?.map((e, idx) => (
                    <div key={idx} className="grid grid-cols-12 gap-2 border-b text-xs md:text-base">
                        <div className="py-2 text-red-600" onClick={() => toggleModal(e.link)}><GrDocumentPdf size={20} /></div>
                        <p className="py-2 col-span-3">{e.title}</p>
                        {e.status === 'pending' && <p className="py-2 col-span-2 text-orange-500">{e.status}</p>}
                        {e.status === 'completed' && <p className="py-2 col-span-2 text-green-500">{e.status}</p>}
                        <p className="py-2 col-span-2">{e.totalMarks}</p>
                        <p className="py-2 col-span-2">{e.obtainedMarks}</p>
                        <p className="py-2 col-span-2">{e.feedback}</p>
                    </div>
                ))
            }

            {
                isModalOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-8 pt-12 rounded relative">
                            <button onClick={() => toggleModal("")} className="absolute top-0 right-0 m-2 text-red-500 hover:text-red-700">
                                <IoMdCloseCircle size={30} />
                            </button>
                            <iframe title="PDF Preview" src={pdfLink} width="800px" height="600px" />
                        </div>
                    </div>
                )
            }

        </>
    );
};

export default MyAttemptedAssignments;
