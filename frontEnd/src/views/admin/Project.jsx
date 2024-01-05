/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FiEdit, FiTrash, FiGithub, FiGlobe, FiPlus } from "react-icons/fi";
import ScaleLoader from "react-spinners/ScaleLoader";
import Api from "../../contexts/Api";
import { Button, Modal } from "flowbite-react";

export default function Project() {
    const [isLoading, setIsLoading] = useState(false);
    const [hoveredCardId, setHoveredCardId] = useState(null);
    const [formUpdate, setFormUpdate] = useState({});
    const [formData, setFormData] = useState([]);
    const MySwal = withReactContent(Swal);
    const [openModal, setOpenModal] = useState(false);
    const baseStorageURL = "http://localhost:8000/storage";

    const handleHover = (id) => {
        setHoveredCardId(id);
    };

    const handleChange = (e) => {
        let value;

        if (e.target.type === "file") {
            value = e.target.files[0];
        } else {
            value = e.target.value;
        }

        setFormUpdate((prevData) => ({
            ...prevData,
            [e.target.name]: value,
        }));
    };

    const handleEdit = (data) => {
        setFormUpdate(data);
        let formUpdate = data;
        MySwal.fire({
            title: "Update Project",
            html: (
                <div className="form-update">
                    <div className="image mb-4">
                        <label className="block text-start text-sm font-bold mb-2">
                            Project Image:
                        </label>
                        <input
                            type="file"
                            name="projectImage"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="title mb-4">
                        <label className="block text-start text-sm font-bold mb-2">
                            Project Title:
                        </label>
                        <div className="flex items-center justify-between">
                            <input
                                type="text"
                                className="shadow appearance-none border border-blue rounded w-full py-2 px-3 text- leading-tight focus:outline-none focus:shadow-outline"
                                name="projectTitle"
                                defaultValue={formUpdate.projectTitle}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-start text-sm font-bold mb-2">
                            Project Description:
                        </label>
                        <div className="flex items-center justify-between">
                            <input
                                type="text"
                                className="shadow appearance-none border border-blue rounded w-full py-2 px-3 text- leading-tight focus:outline-none focus:shadow-outline"
                                name="projectDescription"
                                defaultValue={formUpdate.projectDescription}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-start text-sm font-bold mb-2">
                            Project Github Link:
                        </label>
                        <div className="flex items-center justify-between">
                            <input
                                type="text"
                                className="shadow appearance-none border border-blue rounded w-full py-2 px-3 text- leading-tight focus:outline-none focus:shadow-outline"
                                name="projectGithubLink"
                                defaultValue={formUpdate.projectGithubLink}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-start text-sm font-bold mb-2">
                            Project Website Link:
                        </label>
                        <div className="flex items-center justify-between">
                            <input
                                type="text"
                                className="shadow appearance-none border border-blue rounded w-full py-2 px-3 text- leading-tight focus:outline-none focus:shadow-outline"
                                name="projectWebLink"
                                defaultValue={formUpdate.projectWebLink}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            ),
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Update",
        }).then((result) => {
            if (result.isConfirmed) {
                MySwal.fire({
                    title: "Updated!",
                    text: "Your file has been Updated.",
                    icon: "success",
                });
            }
        });
    };

    const handleDelete = (data) => {
        MySwal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                MySwal.fire({
                    title: "Deleted!",
                    text: "Project has been deleted.",
                    icon: "success",
                });
            }
        });
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await Api.post("/project", formUpdate);
            fetchProject();
            setIsLoading(false);
            setOpenModal(false);
        } catch (error) {
            setIsLoading(false);
            console.error("Error fetching data:", error);
        }
    };

    const Card = (data) => (
        <div className="card-project h-full flex flex-col">
            <div className="image-project overflow-hidden max-h-52">
                <img
                    src=""
                    // src={`${baseStorageURL}/${data.data.thumbnail}`}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="details-project p-2 flex-1">
                <p className="text-justify text-paragraph text-lg">
                    <label htmlFor="" className="font-bold">
                        {data.data.title} &nbsp;
                    </label>
                    {data.data.description}
                </p>
            </div>
            <div className="action-project grid grid-cols-2">
                <button className="flex flex-col items-center p-1 duration-300 bg-tertiary hover:bg-tertiary-hover">
                    <FiGithub className="text-xl" /> Github
                </button>
                <button className="flex flex-col items-center p-1 duration-300 bg-orange hover:bg-orange-hover">
                    <FiGlobe className="text-xl" />
                    View Page
                </button>
            </div>

            {/* Edit and Delete Buttons */}
            {hoveredCardId === data.data.id && (
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <button
                        type="button"
                        className="text-white mx-2 p-2 hover:bg-gray-600 border rounded-lg bg-blue hover:brightness-75"
                        onClick={(e) => handleEdit(data.data)}
                    >
                        <FiEdit />
                    </button>
                    <button
                        type="button"
                        className="text-white mx-2 p-2 hover:bg-gray-600 border rounded-lg bg-red hover:brightness-75"
                        onClick={(e) => handleDelete(data.data)}
                    >
                        <FiTrash />
                    </button>
                </div>
            )}
        </div>
    );

    const fetchProject = async () => {
        try {
            const response = await Api.get("/project");
            console.log(response);

            setFormData(response.data.project);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchProject();
    }, []);
    return (
        <div className="project-page overflow-hidden">
            <Modal
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
            >
                <Modal.Body className="bg-deep-blue border rounded-xl">
                    <div className="form-update ">
                        <div className="image mb-4">
                            <label className="block text-start text-sm font-bold mb-2">
                                Project Image:
                            </label>
                            <span className="">
                                {formUpdate.thumbnail?.name}
                            </span>
                            <div className="text-left text-white border border-white rounded-sm">
                                <input
                                    className="w-full rounded-sm"
                                    type="file"
                                    name="thumbnail"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="title mb-4">
                            <label className="block text-start text-sm font-bold mb-2">
                                Project Title:
                            </label>
                            <div className="flex items-center justify-between">
                                <input
                                    type="text"
                                    className="shadow appearance-none bg-deep-blue text-white border border-white rounded w-full py-2 px-3 text- leading-tight focus:outline-none focus:shadow-outline"
                                    name="title"
                                    defaultValue={formUpdate.title}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-start text-sm font-bold mb-2">
                                Project Description:
                            </label>
                            <div className="flex items-center justify-between">
                                <input
                                    type="text"
                                    className="shadow bg-deep-blue text-white appearance-none border border-white rounded w-full py-2 px-3 text- leading-tight focus:outline-none focus:shadow-outline"
                                    name="description"
                                    defaultValue={formUpdate.description}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-start text-sm font-bold mb-2">
                                Project Github Link:
                            </label>
                            <div className="flex items-center justify-between">
                                <input
                                    type="text"
                                    className=" bg-deep-blue text-white shadow appearance-none border border-white rounded w-full py-2 px-3 text- leading-tight focus:outline-none focus:shadow-outline"
                                    name="linkGithub"
                                    defaultValue={formUpdate.linkGithub}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-start text-sm font-bold mb-2">
                                Project Website Link:
                            </label>
                            <div className="flex items-center justify-between">
                                <input
                                    type="text"
                                    className="shadow bg-deep-blue text-white appearance-none border border-white rounded w-full py-2 px-3 text- leading-tight focus:outline-none focus:shadow-outline"
                                    name="linkWebsite"
                                    defaultValue={formUpdate.linkWebsite}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-end">
                        <Button onClick={(e) => handleAdd(e)}>
                            {isLoading ? <ScaleLoader height={14} /> : "Submit"}
                        </Button>
                        <Button
                            color="failure"
                            onClick={(e) => {
                                setOpenModal(false), setFormUpdate({});
                            }}
                        >
                            Decline
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
            <div className=" mt-12 container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                <div
                    className="relative border-2 rounded-lg overflow-hidden flex items-center justify-center shadow-md cursor-pointer bg-blue hover:brightness-75"
                    onClick={() => setOpenModal(true)}
                >
                    <FiPlus className="text-2xl" />
                </div>
                {formData?.map((data) => (
                    <div
                        key={data.id}
                        className="relative border-2 rounded-lg overflow-hidden flex flex-col shadow-md cursor-pointer "
                        onMouseEnter={() => handleHover(data.id)}
                        onMouseLeave={() => handleHover(null)}
                    >
                        <Card data={data} />
                    </div>
                ))}
            </div>
        </div>
    );
}
