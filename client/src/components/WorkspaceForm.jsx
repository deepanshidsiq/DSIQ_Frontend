import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WorkspaceForm = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [brands, setBrands] = useState('');
  const [retailer, setRetailer] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Normally, this would be sent to a backend
    const newWorkspace = {
      name,
      category,
      brands,
      retailer,
      modified: new Date().toISOString().split('T')[0]
    };

    console.log('Workspace created:', newWorkspace);
    alert(`Workspace "${name}" created!`);
    navigate('/workspaces'); // Redirect after creation
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Create New Workspace</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Workspace Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Brands</label>
          <input
            type="text"
            value={brands}
            onChange={(e) => setBrands(e.target.value)}
            placeholder="e.g. Apple, Samsung"
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Retailer</label>
          <input
            type="text"
            value={retailer}
            onChange={(e) => setRetailer(e.target.value)}
            placeholder="e.g. BestBuy, Amazon"
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Create Workspace
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkspaceForm;
