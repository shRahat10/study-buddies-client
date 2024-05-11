import { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { RiDeleteBin2Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Helmet } from "react-helmet-async";

const Assignments = () => {
    const { data } = useContext(AuthContext);
    const [filter, setFilter] = useState("all");

    const filteredAssignments = data?.filter((assignment) => {
        if (filter === "all") {
            return true;
        } else {
            return assignment.difficulty === filter;
        }
    });

    return (
        <>
            <Helmet>
                <title>Assignments</title>
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
                {filteredAssignments?.map((e, idx) => (
                    <div key={idx} className="relative dark:text-white shadow-md">
                        <img className="h-38 md:h-28 border-t border-x w-full rounded-t" src={e.photoURL} alt="" />
                        <p className="absolute top-0 left-0 text-sm font-semibold text-white bg-blue-500 px-2 py-1">{e.marks}</p>
                        <div className="border-b border-x p-3 rounded-b">
                            <h1 className="font-semibold h-14">{e.title}</h1>
                            <div>
                                {e.difficulty === 'easy' && <p className="text-sm font-semibold text-white bg-green-500 w-20 text-center py-1">{e.difficulty}</p>}
                                {e.difficulty === 'medium' && <p className="text-sm font-semibold text-white bg-yellow-500 w-20 text-center py-1">{e.difficulty}</p>}
                                {e.difficulty === 'hard' && <p className="text-sm font-semibold text-white bg-red-500 w-20 text-center py-1">{e.difficulty}</p>}
                            </div>
                            <div className="flex justify-between items-center mt-3">
                                <p className="text-sm text-blue-500">View Assignment</p>
                                <div className="flex gap-2 justify-end">
                                    <p><TiEdit size={25} /></p>
                                    <p className="text-red-500"><RiDeleteBin2Line size={25} /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Assignments;
