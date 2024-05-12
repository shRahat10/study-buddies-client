import React, { useState } from "react";

const AssignmentSubmissionForm = ({ onClose }) => {
    const [pdfDocLink, setPdfDocLink] = useState("");
    const [note, setNote] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-8 rounded w-96 md:w-3/4 lg:w-1/2 xl:w-2/3 transform scale-110 md:scale-125">
                    <h2 className="text-2xl font-semibold mb-6">Submit Assignment</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="pdfDocLink" className="block font-semibold mb-2">PDF/Doc Link</label>
                            <input type="text" id="pdfDocLink" value={pdfDocLink} onChange={(e) => setPdfDocLink(e.target.value)} className="border rounded px-4 py-3 w-full focus:outline-primary" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="note" className="block font-semibold mb-2">Note</label>
                            <textarea id="note" value={note} onChange={(e) => setNote(e.target.value)} className="border rounded px-4 py-3 w-full focus:outline-primary" />
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-primary text-white px-6 py-3 rounded mr-4">Submit</button>
                            <button type="button" onClick={onClose} className="bg-gray-300 text-gray-800 px-6 py-3 rounded">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AssignmentSubmissionForm;
