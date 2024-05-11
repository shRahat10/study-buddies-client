import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet-async";

const CreateAssignments = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [dueDate, setDueDate] = useState(null);

    const onSubmit = (data) => {
        const { title, description, marks, difficulty } = data;

    };

    return (
        <div>
            <Helmet>
                <title>Create Assignment</title>
            </Helmet>
            <h1 className="text-2xl font-bold text-center mb-6">Create Assignment</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 m-10 border border-primary bg-slate-50 p-10 rounded-lg">
                <div className=" grid grid-cols-2 gap-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold dark:text-white">Title</span>
                        </label>
                        <input name="title" type="text" className="bg-transparent input rounded-none border-b border-b-gray-300 focus:outline-none focus:border-0 focus:border-b-2 focus:border-b-primary" {...register("title", { required: true })} />
                        {errors.title && <span className="text-red-500">This field is required</span>}
                    </div>
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
                        <select name="difficulty" className=" bg-transparent input rounded-none border-b border-b-gray-300 focus:outline-none focus:border-0 focus:border-b-2 focus:border-b-primary" {...register("difficulty", { required: true })}>
                            <option value="">-- select --</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
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
