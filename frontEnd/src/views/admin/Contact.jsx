/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
export default function Admin() {
    const contactData = [
        {
            name: "Alice",
            email: "alice@example.com",
            phone: "+1234567890",
            message: "Hello!",
        },
        {
            name: "Bob",
            email: "bob@example.com",
            phone: "+9876543210",
            message: "Hi there!",
        },
    ];

    return (
        <div className="admin-dashboard p-8">
            <div className="contact-section mb-8">
                <h2 className="text-2xl font-bold mb-4">Contact</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr className="text-left">
                            <th className="py-2">Name</th>
                            <th className="py-2">Email</th>
                            <th className="py-2">Phone</th>
                            <th className="py-2">Message</th>
                            <th className="py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactData.map((contact, index) => (
                            <tr key={index}>
                                <td className="py-2">{contact.name}</td>
                                <td className="py-2">{contact.email}</td>
                                <td className="py-2">{contact.phone}</td>
                                <td className="py-2">{contact.message}</td>
                                <td className="py-2 flex justify-center gap-6">
                                    <button className="border p-2 rounded-lg bg-blue hover:brightness-75">
                                        <FaEye />
                                    </button>
                                    <button className="border p-2 rounded-lg bg-red hover:brightness-75">
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
