import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet-async";
import { BASE_URL } from "../constent/constent";
import Swal from 'sweetalert2';
import { AuthContext } from "../provider/AuthProvider";

const CreateAssignments = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [dueDate, setDueDate] = useState(null);

    const onSubmit = (data) => {
        data.dueDate = dueDate;
        data.email = user.email;

        fetch(BASE_URL + '/study-buddies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Successfully Created',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    }).then(() => {
                        fetch(BASE_URL + '/study-buddies')
                            .then(res => res.json())
                            .then(updatedData => {
                                setData(updatedData);
                            })
                    });
                }
            })
            .catch(error => {
                console.error('Error creating assignment:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to create assignment',
                    icon: 'error',
                });
            });
    };

    return (
        <div>
            <Helmet>
                <title>Create Assignment</title>
            </Helmet>
            <h1 className="text-2xl font-bold text-center mb-6 dark:text-white">Create Assignment</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 md:m-10 border border-primary bg-slate-50 dark:bg-transparent dark:text-white p-10 rounded-lg">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold dark:text-white">Title</span>
                        </label>
                        <input name="title" type="text" className="bg-transparent input rounded-none border-b border-b-gray-300 focus:outline-none focus:border-0 focus:border-b-2 focus:border-b-primary" {...register("title", { required: true })} />
                        {errors.title && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold dark:text-white">Photo URL</span>
                        </label>
                        <input name="photoURL" type="text" className="bg-transparent input rounded-none border-b border-b-gray-300 focus:outline-none focus:border-0 focus:border-b-2 focus:border-b-primary" {...register("photoURL", { required: true })} />
                        {errors.photoURL && <span className="text-red-500">This field is required</span>}
                    </div>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold dark:text-white">Marks</span>
                        </label>
                        <input name="marks" type="number" className="bg-transparent input rounded-none border-b border-b-gray-300 focus:outline-none focus:border-0 focus:border-b-2 focus:border-b-primary" {...register("marks", { required: true })} />
                        {errors.marks && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold dark:text-white">Difficulty</span>
                        </label>
                        <select name="difficulty" className=" bg-transparent input rounded-none border-b border-b-gray-300 focus:outline-none focus:border-0 focus:border-b-2 focus:border-b-primary " {...register("difficulty", { required: true })}>
                            <option className="text-black" value="">-- select --</option>
                            <option className="text-black" value="easy">Easy</option>
                            <option className="text-black" value="medium">Medium</option>
                            <option className="text-black" value="hard">Hard</option>
                        </select>
                        {errors.difficulty && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold dark:text-white">Due Date</span>
                        </label>
                        
                        <DatePicker
                            selected={dueDate}
                            onChange={(date) => setDueDate(date)}
                            className="w-full bg-transparent input rounded-none border-b border-b-gray-300 focus:outline-none focus:border-0 focus:border-b-2 focus:border-b-primary"
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Select Due Date"
                            autoComplete="off"
                            minDate={new Date()}
                        />
                        {errors.date && <span className="text-red-500">This field is required</span>}
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold dark:text-white">Description</span>
                    </label>
                    <input name="description" type="text" className="bg-transparent input rounded-none border-b border-b-gray-300 focus:outline-none focus:border-0 focus:border-b-2 focus:border-b-primary" {...register("description", { required: true })} />
                    {errors.description && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn text-white bg-primary hover:bg-transparent hover:border hover:border-primary hover:text-primary transition duration-300 ease-in-out">Create Assignment</button>
                </div>
            </form>
        </div>
    );
};

export default CreateAssignments;
