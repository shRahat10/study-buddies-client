import { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { GrDocumentPdf } from "react-icons/gr";
import { IoMdCloseCircle } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import userIcon from "../assets/images/userIcon.webp"
import { Helmet } from "react-helmet-async";

const MyAttemptedAssignments = () => {
    const { submissions, user, updateUserProfile } = useContext(AuthContext);
    const filteredData = submissions?.filter((data) => data.email === user.email);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pdfLink, setPdfLink] = useState("");

    const toggleModal = (link) => {
        setPdfLink(link);
        setIsModalOpen(!isModalOpen);
    };

    const handleEditProfile = () => {
        Swal.fire({
            title: 'Edit Profile',
            html:
                `<input id="swal-input-name" class="swal2-input w-3/5 md:w-4/5" placeholder="Name" value="${user.displayName}">` +
                `<input id="swal-input-photoUrl" class="swal2-input w-3/5 md:w-4/5" placeholder="Photo URL" value="${user.photoURL}">`,
            focusConfirm: false,
            preConfirm: () => {
                const name = Swal.getPopup().querySelector('#swal-input-name').value;
                const photoUrl = Swal.getPopup().querySelector('#swal-input-photoUrl').value;
                return updateUserProfile(name, photoUrl)
                    .then(() => {
                        Swal.fire({
                            title: 'Profile Updated!',
                            icon: 'success',
                        });
                    })
                    .catch((error) => {
                        console.error('Error updating profile:', error);
                        Swal.fire({
                            title: 'Error',
                            text: 'Failed to update profile',
                            icon: 'error',
                        });
                    });
            }
        });
    };

    return (
        <>
            <Helmet>
                <title>Study Buddies | Attempted Assignment</title>
            </Helmet>
            <div className=" dark:text-white">
                <div className="relative w-fit mx-auto mb-20 text-center">
                    <img className="w-36 h-36 rounded-full object-center object-cover mx-auto mb-4" src={user.photoURL ? user.photoURL : userIcon} alt="" />
                    <h1 className="text-xl font-bold text-gray-700 dark:text-white">{user.displayName}</h1>
                    <p className="text-gray-700 dark:text-white">{user.email}</p>
                    <button onClick={handleEditProfile} className="p-2 absolute top-0 right-0 dark:text-white">
                        <FaRegEdit size={23} />
                    </button>
                </div>

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
                            <div className="bg-white dark:bg-slate-900 p-8 pt-12 rounded relative">
                                <button onClick={() => toggleModal("")} className="absolute top-0 right-0 m-2 text-red-500 hover:text-red-700">
                                    <IoMdCloseCircle size={30} />
                                </button>
                                <iframe className=" w-72 md:w-[600px] lg:w-[800px]" title="PDF Preview" src={pdfLink} height="600px" />
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    );
};

export default MyAttemptedAssignments;
