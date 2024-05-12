import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const AssignmentDetails = () => {
    const { id } =  useParams();
    const { data } = useContext(AuthContext);

    const details = data?.find((e) => e._id === id);
    
    return (
        <div>
            
        </div>
    );
};

export default AssignmentDetails;