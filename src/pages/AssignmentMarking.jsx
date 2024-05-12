import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../constent/constent";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2';

const AssignmentMarking = ({ onClose, submittedData }) => {
    const { setSubmissions } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        if (data.gottenMarks > submittedData.totalMarks) {
            Swal.fire({
                title: 'Error',
                text: 'Marks cannot exceed the total marks',
                icon: 'error',
            });
            return;
        }
    
        const markedSubmission = {
            ...submittedData,
            gottenMarks: data.gottenMarks,
            feedback: data.feedback,
            status: 'completed'
        };
    
        fetch(BASE_URL + `/submissions/${submittedData._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(markedSubmission)
        })
            .then(res => res.json())
            .then(updatedData => {
                if (updatedData.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Submitted!',
                        text: 'Assignment marked successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    }).then(() => {
                        reset();
                        onClose();
                        fetch(BASE_URL + '/submissions')
                            .then(res => res.json())
                            .then(updatedData => {
                                setSubmissions(updatedData);
                            })
                    });
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Failed to mark assignment',
                        icon: 'error',
                    });
                }
            })
            .catch(error => {
                console.error('Error marking assignment:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to mark assignment',
                    icon: 'error',
                });
            });
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-8 rounded w-96 md:w-3/4 lg:w-1/2 xl:w-2/3 transform scale-110 md:scale-125">
                    <h2 className="text-2xl font-semibold mb-6">Mark Assignment</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold dark:text-white">PDF/doc Link</span>
                            </label>
                            <input name="link" type="text" readOnly defaultValue={submittedData.link} className="bg-transparent input rounded border border-gray-300 focus:outline-none focus:border focus:border-primary" {...register("link", { required: true })} />
                            {errors.link && <span className="text-red-500">PDF/doc link is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold dark:text-white">Examinee Note</span>
                            </label>
                            <input name="note" type="text" readOnly defaultValue={submittedData.note} className="bg-transparent input rounded border border-gray-300 focus:outline-none focus:border focus:border-primary" {...register("note", { required: true })} />
                            {errors.note && <span className="text-red-500">Examinee note is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold dark:text-white">Marks</span>
                            </label>
                            <input name="gottenMarks" type="number" className="bg-transparent input rounded border border-gray-300 focus:outline-none focus:border focus:border-primary" {...register("gottenMarks", { required: true })} />
                            {errors.gottenMarks && <span className="text-red-500">Marks are required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold dark:text-white">Feedback</span>
                            </label>
                            <textarea name="feedback" className="h-20 bg-transparent input rounded border border-gray-300 focus:outline-none focus:border focus:border-primary" {...register("feedback", { required: true })} />
                            {errors.feedback && <span className="text-red-500">Feedback is required</span>}
                        </div>
                        <div className="flex justify-end mt-4">
                            <button type="submit" className="bg-primary text-white px-6 py-3 rounded mr-4">Submit</button>
                            <button type="button" onClick={onClose} className="bg-gray-300 text-gray-800 px-6 py-3 rounded">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AssignmentMarking;
