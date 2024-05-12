import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";


const Features = () => {
    const { data } = useContext(AuthContext);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
                {
                    data?.slice(0, 6).map((e, idx) => (
                        <Link key={idx} to={`/assignmentDetails/${e._id}`}>
                            <div className="card h-full bg-base-100 shadow-xl image-full">
                                <figure><img src={e.photoURL} alt="loading..." /></figure>
                                <div className="card-body">
                                    <p className="absolute top-0 left-0 rounded-tl-xl text-sm font-semibold text-white bg-blue-500 px-2 py-1">{e.marks}</p>
                                    <h2 className="card-title h-16 text-white">{e.title}</h2>
                                    <div className=" flex justify-between items-center">
                                        <div>
                                            {e.difficulty === 'easy' && <p className="text-sm font-semibold text-white bg-green-500 w-20 text-center py-1">{e.difficulty}</p>}
                                            {e.difficulty === 'medium' && <p className="text-sm font-semibold text-white bg-yellow-500 w-20 text-center py-1">{e.difficulty}</p>}
                                            {e.difficulty === 'hard' && <p className="text-sm font-semibold text-white bg-red-500 w-20 text-center py-1">{e.difficulty}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className=" flex justify-center">
                {
                    data?.length > 6 && <Link to={"/assignments"}><button className=" border p-2 rounded mt-6 border-primary text-primary">Show More</button></Link>
                }
            </div>
        </div>
    );
};

export default Features;