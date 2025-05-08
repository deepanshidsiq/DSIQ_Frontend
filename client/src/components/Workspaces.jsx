import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiEdit, FiTrash2, FiShare2 } from 'react-icons/fi'; // Optional icons
import { BsFillGridFill, BsListUl } from 'react-icons/bs'; // For view toggle

const dummyData = [
  {
    id: 1,
    name: "Customer Satisfaction",
    type: "Research",
    brands: ["Samsung", "LG"],
    retailer: "Electronics Hub",
    modified: "2025-05-02"
  },
  {
    id: 2,
    name: "Marketing Campaign",
    type: "Marketing",
    brands: ["Nike", "Adidas"],
    retailer: "SportsDirect",
    modified: "2025-05-05"
  },
  // Add the rest similarly
];

const Workspaces = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-1">Workspaces</h1>
        <p className="text-sm">Manage and organize your workspace collections</p>
      </div>

      <div className="flex justify-between items-center my-6">
        <input
          type="text"
          placeholder="Search workspaces..."
          className="border p-2 rounded w-1/3"
        />
        <div className="flex gap-2">
          <select className="border p-2 rounded">
            <option>Name</option>
            <option>Modified</option>
          </select>
          <select className="border p-2 rounded">
            <option>All Categories</option>
          </select>
          <div className="flex items-center gap-2">
            <button className="p-2 border rounded bg-gray-100"><BsFillGridFill /></button>
            <button className="p-2 border rounded"><BsListUl /></button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyData.map((ws) => (
          <div key={ws.id} className="bg-white p-6 rounded shadow relative">
            <h3 className="text-lg font-semibold mb-1">{ws.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{ws.type}</p>
            <p className="text-sm text-gray-600">Brands: {ws.brands.join(', ')}</p>
            <p className="text-sm text-gray-600">Retailer: {ws.retailer}</p>
            <p className="text-sm text-gray-500">Modified: {ws.modified}</p>
            <div className="flex gap-4 mt-4 text-gray-500">
              <FiEdit className="cursor-pointer" />
              <FiTrash2 className="cursor-pointer" />
              <FiShare2 className="cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-sm text-gray-500">Showing {dummyData.length} of {dummyData.length} workspaces</div>
    </div>
  );
};

export default Workspaces;
