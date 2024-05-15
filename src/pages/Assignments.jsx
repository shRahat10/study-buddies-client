import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { RiDeleteBin2Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { BASE_URL } from "../constent/constent";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight  } from "react-icons/fa";

const Assignments = () => {
    const { data, setData, user, noOfPages, setNoOfPages } = useContext(AuthContext);
    const [filter, setFilter] = useState("all");
    const pages = [...Array(noOfPages).keys()];
    const [ currentPage, setCurrentPage ] = useState(0);

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    const filteredAssignments = data?.filter((assignment) => {
        if (filter === "all") {
            return true;
        } else {
            return assignment.difficulty === filter;
        }
    });

    useEffect(() => {
        if (filteredAssignments) {
            setNoOfPages(Math.ceil(filteredAssignments.length / 12));
        }
    }, [filteredAssignments, setNoOfPages])

    const handleDelete = (id) => {
        const filteredData = data?.find((e) => e._id === id)
        if (filteredData?.email !== user?.email) {
            Swal.fire({
                title: 'Unauthorized',
                text: "You cannot delete someone else's assignment!",
                icon: 'warning',
                confirmButtonText: 'Ok'
            })
        }
        else {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(BASE_URL + `/study-buddies/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(deletedData => {
                            if (deletedData.deletedCount > 0) {
                                setData(prevData => prevData.filter(item => item._id !== id));
                                Swal.fire(
                                    'Deleted!',
                                    'Your assignment has been deleted.',
                                    'success'
                                )
                            }
                        })
                        .catch(error => {
                            console.error('Error deleting assignment:', error);
                            Swal.fire({
                                title: 'Error',
                                text: 'Failed to delete assignment',
                                icon: 'error',
                            });
                        });
                }
            })
        }
    }
    
    const startIndex = currentPage * 12;
    const endIndex = Math.min(startIndex + 12, filteredAssignments?.length);

    return (
        <>
            <Helmet>
                <title>Study Buddies | Assignments</title>
            </Helmet>
            <h1 className="text-2xl font-bold text-center mb-6 dark:text-white">Assignments</h1>
            <div className="flex justify-end mb-4">
                <select value={filter} onChange={(e) => setFilter(e.target.value)} className="px-3 py-1 border rounded-md focus:outline focus:outline-primary">
                    <option value="all">All</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredAssignments?.slice(startIndex, endIndex).map((e, idx) => (
                    <div key={idx} className="relative dark:text-white shadow-md">
                        <img className="h-38 md:h-28 border-t border-x w-full rounded-t" src={e.photoURL} alt="" />
                        <p className="absolute top-0 left-0 rounded-tl text-sm font-semibold text-white bg-blue-500 px-2 py-1">{e.marks}</p>
                        <div className="border-b border-x p-3 rounded-b">
                            <h1 className="font-semibold h-14">{e.title}</h1>
                            <div className=" flex justify-between">
                                <div>
                                    {e.difficulty === 'easy' && <p className="text-sm font-semibold text-white bg-green-500 w-20 text-center py-1">{e.difficulty}</p>}
                                    {e.difficulty === 'medium' && <p className="text-sm font-semibold text-white bg-yellow-500 w-20 text-center py-1">{e.difficulty}</p>}
                                    {e.difficulty === 'hard' && <p className="text-sm font-semibold text-white bg-red-500 w-20 text-center py-1">{e.difficulty}</p>}
                                </div>
                                <Link to={`/updateAssignments/${e._id}`}><p><TiEdit size={25} /></p></Link>
                            </div>
                            <div className="flex justify-between items-center mt-3">
                                <Link to={`/assignmentDetails/${e._id}`}><p className="text-sm text-blue-500">View Assignment</p></Link>
                                <p onClick={() => handleDelete(e._id)} className="text-red-500"><RiDeleteBin2Line size={25} /></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className=" flex justify-center items-center mt-10">
                <button onClick={handlePrev} className="mr-2 border bg-primary text-white rounded-lg"><FaArrowAltCircleLeft size={23}/></button>
                {
                    pages?.map((page, idx) =>
                        <button onClick={()=>setCurrentPage(page)} className={currentPage === page ? " px-2 mr-1 border border-primary bg-primary text-white rounded-lg" : " px-2 mr-1 border border-primary text-primary rounded-lg"} key={idx}>{page}</button>
                    )
                }
                <button onClick={handleNext} className="ml-1 border bg-primary text-white rounded-lg"><FaArrowAltCircleRight size={23}/></button>
            </div>
        </>
    );
};

export default Assignments;
